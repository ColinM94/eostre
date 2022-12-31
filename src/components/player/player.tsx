import * as React from "react"

import { classes } from "utils"

import styles from "./styles.module.scss"

type PlayerState = {
  x: number
  y: number
  direction: "up" | "down" | "left" | "right"
}

interface Props {
  style?: React.CSSProperties
  className?: string
}

export const Player = ({ style, className }: Props) => {
  const [player, setPlayer] = React.useState<PlayerState>({
    x: 5,
    y: 5,
    direction: "right",
  })

  const handleMove = (direction: "up" | "down" | "left" | "right") => {
    setPlayer((prev) => {
      if (direction === "up") {
        const result = prev.y - 1

        return {
          x: prev.x,
          y: result >= 0 ? result : 0,
          direction: "up",
        }
      } else if (direction === "down") {
        const result = prev.y + 1
        return {
          x: prev.x,
          y: result >= 0 ? result : 0,
          direction: "down",
        }
      } else if (direction === "left") {
        const result = prev.x - 1
        return {
          x: result >= 0 ? result : 0,
          y: prev.y,
          direction: "left",
        }
      } else if (direction === "right") {
        const result = prev.x + 1
        return {
          x: result >= 0 ? result : 0,
          y: prev.y,
          direction: "right",
        }
      }

      return {
        x: 0,
        y: 0,
        direction: "up",
      }
    })
  }

  React.useEffect(() => {
    const handleKeyClick = (event: KeyboardEvent) => {
      switch (event.key) {
        case "w":
          handleMove("up")
          return
        case "ArrowUp":
        case "w":
          handleMove("up")
          return
        case "ArrowDown":
        case "s":
          handleMove("down")
          return
        case "ArrowLeft":
        case "a":
          handleMove("left")
          return
        case "ArrowRight":
        case "d":
          handleMove("right")
          return
      }
    }

    document.addEventListener("keydown", handleKeyClick)

    return () => {
      document.removeEventListener("keydown", handleKeyClick)
    }
  }, [])

  return (
    <div
      style={{
        gridColumn: player.x,
        gridRow: player.y,
      }}
      className={classes(styles.player)}
    >
      <div className={styles.weapon} />
      <div className={styles.head}>
        <div className={styles.leftEye} />
        <div className={styles.rightEye} />
        <div className={styles.mouth} />
      </div>

      <div className={styles.leftArm} />
      <div className={styles.rightArm} />
      <div className={styles.legs}>
        <div className={styles.leftLeg} />
        <div className={styles.rightLeg} />
      </div>
    </div>
  )
}
