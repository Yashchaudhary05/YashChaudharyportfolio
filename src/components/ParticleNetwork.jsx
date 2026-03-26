import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 80
const CONNECTION_DISTANCE = 150
const MOUSE_RADIUS = 200

export default function ParticleNetwork() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 300

    // Particles
    const positions = []
    const velocities = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push({
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 200,
      })
      velocities.push({
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.2,
      })
    }

    // Point cloud
    const pointGeo = new THREE.BufferGeometry()
    const pointPositions = new Float32Array(PARTICLE_COUNT * 3)
    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3))

    const pointMat = new THREE.PointsMaterial({
      color: 0x64ffda,
      size: 3,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(pointGeo, pointMat)
    scene.add(points)

    // Lines for connections
    const lineGeo = new THREE.BufferGeometry()
    const maxLines = PARTICLE_COUNT * PARTICLE_COUNT
    const linePositions = new Float32Array(maxLines * 6)
    const lineColors = new Float32Array(maxLines * 6)
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // Mouse tracking
    const mouse = { x: 9999, y: 9999 }
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }
    canvas.addEventListener('mousemove', onMouseMove, { passive: true })
    canvas.addEventListener('mouseleave', () => { mouse.x = 9999; mouse.y = 9999 }, { passive: true })

    // Resize
    const resize = () => {
      const w = canvas.parentElement.offsetWidth
      const h = canvas.parentElement.offsetHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    // Animation loop
    let raf
    const animate = () => {
      raf = requestAnimationFrame(animate)

      // Update particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i].x += velocities[i].x
        positions[i].y += velocities[i].y
        positions[i].z += velocities[i].z

        // Bounce off boundaries
        if (Math.abs(positions[i].x) > 300) velocities[i].x *= -1
        if (Math.abs(positions[i].y) > 300) velocities[i].y *= -1
        if (Math.abs(positions[i].z) > 100) velocities[i].z *= -1

        // Mouse repulsion
        const mouseWorld = new THREE.Vector3(mouse.x * 300, mouse.y * 300, 0)
        const dx = positions[i].x - mouseWorld.x
        const dy = positions[i].y - mouseWorld.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 2
          velocities[i].x += (dx / dist) * force * 0.3
          velocities[i].y += (dy / dist) * force * 0.3
        }

        // Damping
        velocities[i].x *= 0.99
        velocities[i].y *= 0.99

        pointPositions[i * 3] = positions[i].x
        pointPositions[i * 3 + 1] = positions[i].y
        pointPositions[i * 3 + 2] = positions[i].z
      }
      pointGeo.attributes.position.needsUpdate = true

      // Update connections
      let lineIdx = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = positions[i].x - positions[j].x
          const dy = positions[i].y - positions[j].y
          const dz = positions[i].z - positions[j].z
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < CONNECTION_DISTANCE) {
            const alpha = 1 - dist / CONNECTION_DISTANCE
            const idx = lineIdx * 6

            linePositions[idx] = positions[i].x
            linePositions[idx + 1] = positions[i].y
            linePositions[idx + 2] = positions[i].z
            linePositions[idx + 3] = positions[j].x
            linePositions[idx + 4] = positions[j].y
            linePositions[idx + 5] = positions[j].z

            // Teal color (0x64ffda = r:0.39, g:1.0, b:0.85)
            lineColors[idx] = 0.39 * alpha
            lineColors[idx + 1] = 1.0 * alpha
            lineColors[idx + 2] = 0.85 * alpha
            lineColors[idx + 3] = 0.39 * alpha
            lineColors[idx + 4] = 1.0 * alpha
            lineColors[idx + 5] = 0.85 * alpha

            lineIdx++
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx * 2)
      lineGeo.attributes.position.needsUpdate = true
      lineGeo.attributes.color.needsUpdate = true

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      pointGeo.dispose()
      pointMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
    }
  }, [])

  return (
    <div className="particle-network" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
