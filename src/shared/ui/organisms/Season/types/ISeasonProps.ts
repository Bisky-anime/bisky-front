import { HTMLAttributes } from "react"

interface ISeasonProps extends HTMLAttributes<HTMLDivElement> {
  poster: string | null
  title: string
  genres: string[]
  score: number
  screenshots: string[]
}

export type { ISeasonProps }
