import { cl } from "@/utils"

import styles from "./index.module.scss"

interface IScoreBadge {
  score: number

  className?: string
}

const ScoreBadge = ({ score, className }: IScoreBadge) => {
  const SELECT_SCORE =
    score >= 0 && score <= 4.9
      ? styles.scoreBadge_red
      : score >= 5 && score <= 6.9
      ? styles.scoreBadge_gray
      : styles.scoreBadge_lime

  return (
    <span className={cl(styles.scoreBadge, className, SELECT_SCORE)}>
      {score.toFixed(1)}
    </span>
  )
}

export default ScoreBadge
