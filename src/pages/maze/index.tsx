import { useEffect, useRef } from 'react'
import styles from './maze.module.css'
import { setup, shutdown } from '../../lib/maze/maze'

const MazePage = () => {
  const canvasRef = useRef()
  useEffect(() => {
    setup(canvasRef.current)
    return () => shutdown()
  }, [])

  return (
    <section className={styles.wrapper}>
      <canvas id="canvas" ref={canvasRef} height={800} width={800} className={styles.maze} />
    </section>
  )
}

export default MazePage
