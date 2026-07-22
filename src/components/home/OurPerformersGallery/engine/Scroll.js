import * as THREE from "three";

/**
 * Unlike the original Codrops demo, this Scroll class does not hijack the
 * mouse wheel (no global `wheel` listener / preventDefault). It is driven
 * externally via setProgress(0..1), computed from the gallery section's own
 * position in the normal page scroll, so the rest of the page keeps
 * scrolling normally above and below this section.
 */
class Scroll {
  constructor(camera, gallery) {
    this.camera = camera
    this.gallery = gallery

    this.firstPlaneViewOffset = 5
    this.lastPlaneViewOffset = 5
    this.minCameraZ = -Infinity
    this.maxCameraZ = Infinity

    this.progressTarget = 0
    this.progressCurrent = 0
    this.progressSmoothing = 0.08
    this.previousProgressCurrent = 0

    // "Velocity" here is expressed in progress-units-per-frame (0..1 scale),
    // not world units — everything downstream only ever reads it as a ratio
    // against velocityMax, so the absolute scale doesn't matter.
    this.rawVelocity = 0
    this.velocity = 0
    this.velocityDamping = 0.12
    this.velocityMax = 0.015
    this.velocityStopThreshold = 0.00002
  }

  init() {
    this.updateCameraBounds()
    this.progressTarget = 0
    this.progressCurrent = 0
    this.previousProgressCurrent = 0
    this.rawVelocity = 0
    this.velocity = 0
    this.applyCameraZ(0)
  }

  updateCameraBounds() {
    const depthRange = this.gallery.getDepthRange()
    this.maxCameraZ = depthRange.nearestZ + this.firstPlaneViewOffset
    this.minCameraZ = depthRange.deepestZ + this.lastPlaneViewOffset

    if (this.minCameraZ > this.maxCameraZ) {
      this.minCameraZ = this.maxCameraZ
    }
  }

  setProgress(progress) {
    this.progressTarget = THREE.MathUtils.clamp(progress, 0, 1)
  }

  applyCameraZ(progress) {
    this.camera.position.z = THREE.MathUtils.lerp(this.maxCameraZ, this.minCameraZ, progress)
  }

  updateVelocity() {
    this.rawVelocity = this.progressCurrent - this.previousProgressCurrent
    this.velocity = THREE.MathUtils.lerp(this.velocity, this.rawVelocity, this.velocityDamping)
    this.velocity = THREE.MathUtils.clamp(this.velocity, -this.velocityMax, this.velocityMax)

    if (Math.abs(this.velocity) < this.velocityStopThreshold) {
      this.velocity = 0
    }

    this.previousProgressCurrent = this.progressCurrent
  }

  update() {
    this.updateCameraBounds()
    this.progressCurrent = THREE.MathUtils.lerp(
      this.progressCurrent,
      this.progressTarget,
      this.progressSmoothing
    )
    this.progressCurrent = THREE.MathUtils.clamp(this.progressCurrent, 0, 1)

    this.updateVelocity()
    this.applyCameraZ(this.progressCurrent)
  }

  dispose() {}
}

export { Scroll }
