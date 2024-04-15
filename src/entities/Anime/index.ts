export { AnimeCard } from "./ui/AnimeCard"
export { Season } from "./ui/Season"

export type { IAnimeModel } from "./types/IAnimeModel/IAnimeModel"
export type { IAnimeFullModel } from "./types/IAnimeModel/IAnimeFullModel"
export type { IAnimeSimpleModel } from "./types/IAnimeModel/IAnimeSimpleModel"

export { EKind } from "./enums/EKind"
export { ERating } from "./enums/ERating"
export { EStatus } from "./enums/EStatus"

export { getNormalKind } from "./functions/getNormalKind"
export { getNormalRating } from "./functions/getNormalRating"
export { getNormalStatus } from "./functions/getNormalStatus"

export { bestAnimesQuery } from "./graphQL/bestAnimesQuery"
export { newSeriesAnimesQuery } from "./graphQL/newSeriesAnimesQuery"
export { oneAnimeQuery } from "./graphQL/oneAnimeQuery"
export { seasonAnimesQuery } from "./graphQL/seasonAnimesQuery"
export { catalogAnimesQuery } from "./graphQL/catalogAnimesQuery/catalogAnimesQuery"
export type { ICatalogAnimesVariables } from "./graphQL/catalogAnimesQuery/ICatalogAnimesVariables"
