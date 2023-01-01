import * as React from "react"

import { classes } from "utils"

import styles from "./styles.module.scss"

type PlayerState = {
  x: number
  y: number
  direction: number
}

interface Props {
  style?: React.CSSProperties
  className?: string
}

export const Player = ({ style, className }: Props) => {
  const [player, setPlayer] = React.useState<PlayerState>({
    x: 5,
    y: 5,
    direction: 0,
  })

  const handleMove = (direction: "up" | "down" | "left" | "right") => {
    setPlayer((prev) => {
      if (direction === "up") {
        const result = prev.y - 1

        return {
          x: prev.x,
          y: result >= 0 ? result : 0,
          direction: prev.direction,
        }
      } else if (direction === "down") {
        const result = prev.y + 1
        return {
          x: prev.x,
          y: result >= 0 ? result : 0,
          direction: prev.direction,
        }
      } else if (direction === "left") {
        const result = prev.x - 1
        return {
          ...prev,
          // x: result >= 0 ? result : 0,
          // y: prev.y,
          direction: prev.direction - 1,
        }
      } else if (direction === "right") {
        const result = prev.x + 1
        return {
          ...prev,
          // x: result >= 0 ? result : 0,
          // y: prev.y,
          direction: prev.direction + 1,
        }
      }

      return {
        x: 0,
        y: 0,
        direction: 0,
      }
    })
  }

  console.log(player)

  React.useEffect(() => {
    const handleKeyClick = (event: KeyboardEvent) => {
      switch (event.key) {
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
        rotate: `${player.direction}deg`,
      }}
      className={styles.player}
    >
      <div className={styles.hull} />
      <div className={styles.leftNacelle} />
      <div className={styles.rightNacelle} />
      <div className={styles.cockpit}>
        <div className={styles.cockpitLeft} />
        <div className={styles.cockpitRight} />
      </div>
      {/* <div className={styles.leftWeapon} />
      <div className={styles.rightWeapon} /> */}
    </div>
  )
}
