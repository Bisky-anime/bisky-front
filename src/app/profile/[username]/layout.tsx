import { Metadata } from "next"
import { notFound } from "next/navigation"

import { APP_URL } from "@shared/constants"
import { IProfileLayoutProps } from "@appData/profile"
import { getCurrentUserData } from "@appData/profile/api"

export async function generateMetadata(
  props: IProfileLayoutProps,
): Promise<Metadata> {
  const { username } = await props.params

  const userData = await getCurrentUserData({ username })

  return {
    title: userData.username ?? "",
    openGraph: {
      title: (userData.username ?? "") + " | Bisky — Смотреть Аниме",
      url: `${APP_URL}/profile/${userData.username}`,
      images: userData.avatar ?? `${APP_URL}/images/openGraph.png`,
    },
  }
}

const ProfileLayout = async (props: IProfileLayoutProps) => {
  const { children } = props
  const { username } = await props.params

  try {
    await getCurrentUserData({ username })
  } catch (error) {
    console.error(error)

    notFound()
  }

  return <>{children}</>
}

export default ProfileLayout
