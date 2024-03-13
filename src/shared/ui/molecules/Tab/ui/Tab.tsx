import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"

import { ITabProps } from "../types/ITabProps"

import st from "./Tab.module.scss"

const Tab = (props: ITabProps) => {
  const { text, href, active = false } = props

  return (
    <div className={cn(st.tab, active && st.active)}>
      <a {...props} href={href}>
        <Text as="span" size="24" weight="700">
          {text}
        </Text>
      </a>
    </div>
  )
}

export { Tab }
