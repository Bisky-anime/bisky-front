import { LinkProps } from "next/link"

interface IGenreBlock extends LinkProps {
  title: string
  description: string
  posters: (string | null)[]
}

export type { IGenreBlock }
