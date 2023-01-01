import * as React from "react"
import { Player } from ".."

import styles from "./styles.module.scss"

export const Canvas = () => {
  return (
    <div className={styles.container}>
      <Player />
    </div>
  )
}
