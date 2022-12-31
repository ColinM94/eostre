import * as React from "react"
import { Player } from ".."

import styles from "./styles.module.scss"

export const Canvas = () => {
  // const playerDirection = () => {
  //   if (player.direction === "up") {
  //     return "0deg"
  //   }
  //   if (player.direction === "down") {
  //     return "180deg"
  //   }
  //   if (player.direction === "left") {
  //     return "-90deg"
  //   }
  //   if (player.direction === "right") {
  //     return "90deg"
  //   }
  // }

  return (
    <div className={styles.container}>
      <Player />
    </div>
  )
}
