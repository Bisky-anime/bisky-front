import { Metadata } from "next"
import { notFound } from "next/navigation"

import { IAnimeLayoutProps } from "@appData/animePage"
import { getOneAnimeQL } from "@entities/Anime/api"
import { APP_URL } from "@shared/constants"

export async function generateMetadata(
  props: IAnimeLayoutProps,
): Promise<Metadata> {
  const {
    params: { animeId },
  } = props

  const animeData = await getOneAnimeQL({ animeId })

  return {
    title: animeData.labels?.ru ?? "",
    description: animeData.description?.ru ?? "",
    openGraph: {
      title: (animeData.labels?.ru ?? "") + " | Bisky — Смотреть Аниме",
      description: animeData.description?.ru ?? "",
      url: `${APP_URL}/${animeData._id}`,
      images: animeData.screenshots,
    },
  }
}

const AnimeLayout = async (props: IAnimeLayoutProps) => {
  const {
    params: { animeId },
    children,
  } = props

  try {
    await getOneAnimeQL({ animeId })
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export default AnimeLayout
