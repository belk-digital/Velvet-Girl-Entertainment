import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("x-cms-secret");
    
    // Verify the request is coming from our trusted CMS
    if (!authHeader || authHeader !== process.env.CMS_EDIT_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const tag = body.tag || "cms";

    // Clear the Next.js fetch cache for the given tag
    revalidateTag(tag);
    
    return NextResponse.json({ revalidated: true, tag, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ error: "Error revalidating" }, { status: 500 });
  }
}
