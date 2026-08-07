"use client";

import { useEffect } from "react";

const CMS_ORIGIN = process.env.NEXT_PUBLIC_CMS_ORIGIN ?? "http://localhost:3001";

interface UpdateMessage {
  type: "CMS_UPDATE_FIELD";
  sectionId: string;
  field: string;
  value: string;
}

function isUpdateMessage(data: unknown): data is UpdateMessage {
  return (
    typeof data === "object" &&
    data !== null &&
    (data as { type?: string }).type === "CMS_UPDATE_FIELD"
  );
}

export default function EditBridge() {
  useEffect(() => {
    function targetFor(el: Element) {
      const sectionId = el.getAttribute("data-cms-section");
      const field = el.getAttribute("data-cms-field");
      const sectionType = el.getAttribute("data-cms-type");
      if (!sectionId || !field) return null;
      return { sectionId, field, sectionType };
    }

    function handleMouseOver(e: MouseEvent) {
      const el = (e.target as Element).closest("[data-cms-field]");
      if (!el) return;
      const target = targetFor(el);
      if (!target) return;
      const rect = el.getBoundingClientRect();
      window.parent.postMessage(
        {
          type: "CMS_HOVER",
          ...target,
          rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
        },
        CMS_ORIGIN,
      );
    }

    function handleMouseOut(e: MouseEvent) {
      const el = (e.target as Element).closest("[data-cms-field]");
      if (!el) return;
      window.parent.postMessage({ type: "CMS_HOVER_END" }, CMS_ORIGIN);
    }

    function handleClick(e: MouseEvent) {
      const el = (e.target as Element).closest("[data-cms-field]");
      if (!el) return;
      const target = targetFor(el);
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      window.parent.postMessage(
        { type: "CMS_SELECT", ...target, value: el.textContent ?? "" },
        CMS_ORIGIN,
      );
    }

    function handleMessage(e: MessageEvent) {
      if (e.origin !== CMS_ORIGIN) return;
      if (!isUpdateMessage(e.data)) return;
      const el = document.querySelector(
        `[data-cms-section="${e.data.sectionId}"][data-cms-field="${e.data.field}"]`,
      );
      if (el) el.textContent = e.data.value;
    }

    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    document.addEventListener("click", handleClick, true);
    window.addEventListener("message", handleMessage);

    window.parent.postMessage({ type: "CMS_READY" }, CMS_ORIGIN);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return null;
}
