import { Text } from "@shared/ui/atoms/Text"
import Image from "next/image"
import { IFactBlockProps } from "../types/IFactBlockProps"
import { cn } from "@shared/utils/functions"
import st from "./FactBlock.module.scss"

const FactBlock = (props: IFactBlockProps) => {
  const { fact, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(className, st.root)}>
      <Image
        width={200}
        height={168}
        src="/images/biskyTips.png"
        alt=""
        className={st.image}
      />
      <Text size="20">{fact.ru}</Text>
    </div>
  )
}

export { FactBlock }