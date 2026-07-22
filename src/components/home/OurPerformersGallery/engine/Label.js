/**
 * Small caption overlay showing which performer is currently centered in the
 * gallery, plus an accent color chip. Positioned absolutely within the
 * gallery's own container (not fixed to the whole page like the original
 * demo's color-chip overlay).
 */
class Label {
  constructor(gallery, container) {
    this.gallery = gallery
    this.container = container

    this.overlayElement = null
    this.indexElement = null
    this.wordElement = null
    this.chipElement = null
    this.activePlaneIndex = -1
  }

  createElement() {
    const overlay = document.createElement("div")
    Object.assign(overlay.style, {
      position: "absolute",
      left: "clamp(1.25rem, 4vw, 3rem)",
      bottom: "clamp(1.5rem, 5vh, 3rem)",
      zIndex: "20",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: "#ffffff",
      opacity: "0",
      transition: "opacity 320ms ease",
      pointerEvents: "none",
      fontFamily: "ui-sans-serif, system-ui, Arial, sans-serif",
    })

    const chip = document.createElement("span")
    Object.assign(chip.style, {
      width: "12px",
      height: "12px",
      borderRadius: "9999px",
      display: "inline-block",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.25), 0 0 12px currentColor",
      flexShrink: "0",
    })

    const textWrap = document.createElement("div")
    Object.assign(textWrap.style, {
      display: "flex",
      alignItems: "baseline",
      gap: "0.6rem",
    })

    const index = document.createElement("span")
    Object.assign(index.style, {
      fontSize: "10px",
      fontWeight: "700",
      letterSpacing: "0.18em",
      opacity: "0.55",
    })

    const word = document.createElement("span")
    Object.assign(word.style, {
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    })

    textWrap.append(index, word)
    overlay.append(chip, textWrap)

    return { overlay, index, word, chip }
  }

  init() {
    if (this.overlayElement) return

    const { overlay, index, word, chip } = this.createElement()
    this.overlayElement = overlay
    this.indexElement = index
    this.wordElement = word
    this.chipElement = chip

    this.container.append(this.overlayElement)
  }

  getTargetPlaneIndex(cameraZ) {
    const blendData = this.gallery.getPlaneBlendData(cameraZ)
    if (!blendData) return -1
    return blendData.blend >= 0.5 ? blendData.nextPlaneIndex : blendData.currentPlaneIndex
  }

  applyPlaneContent(planeIndex) {
    const plane = this.gallery.planes[planeIndex]
    if (!plane || this.activePlaneIndex === planeIndex) return

    const labelData = plane.userData.label || {}
    const accentColor = plane.userData.accentColor || "#ffffff"

    this.indexElement.textContent = String(planeIndex + 1).padStart(2, "0")
    this.wordElement.textContent = labelData.word || "performer"
    this.chipElement.style.backgroundColor = accentColor
    this.chipElement.style.color = accentColor

    this.activePlaneIndex = planeIndex
  }

  update(camera = null) {
    if (!camera || !this.overlayElement) return

    const targetPlaneIndex = this.getTargetPlaneIndex(camera.position.z)
    if (targetPlaneIndex < 0) {
      this.overlayElement.style.opacity = "0"
      return
    }

    this.applyPlaneContent(targetPlaneIndex)
    this.overlayElement.style.opacity = "1"
  }

  dispose() {
    this.overlayElement?.remove()
    this.overlayElement = null
    this.indexElement = null
    this.wordElement = null
    this.chipElement = null
    this.activePlaneIndex = -1
  }
}

export { Label }
