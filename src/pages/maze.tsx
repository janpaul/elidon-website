import React, { useEffect, useRef } from 'react'
import styles from '../styles/maze.module.css'
import { setup, shutdown } from '../lib/maze/maze'
import { Layout } from '../components'

const MazePage = () => {
  const canvasRef = useRef()
  useEffect(() => {
    setup(canvasRef.current)
    return () => shutdown()
  }, [])

  return (
    <Layout url="https://elidon.net/maze" title="Maze generator">
      <section className={styles.wrapper}>
        <canvas id="canvas" ref={canvasRef} height={800} width={800} className={styles.maze} />
      </section>
    </Layout>
  )
}

export default MazePage
