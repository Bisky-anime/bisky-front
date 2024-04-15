import animePageStyles from "./styles/animePage.module.scss"
import animePageLoadingStyles from "./styles/animePageLoading.module.scss"

export type { IAnimeLayoutProps } from "./types/IAnimeLayoutProps"
export type { IAnimePageProps } from "./types/IAnimePageProps"

export { AnimeHeader } from "./ui/AnimeHeader"
export { AdditionalInfo } from "./ui/AdditionalInfo"
export { ScreenshotSlider } from "./ui/ScreenshotSlider"
export { VideoSlider } from "./ui/VideoSlider"

export { animePageLoadingStyles, animePageStyles }