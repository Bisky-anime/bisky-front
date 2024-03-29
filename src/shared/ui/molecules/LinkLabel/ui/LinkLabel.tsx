import Link from "next/link"

import { Text } from "@shared/ui/atoms/Text"
import { cn } from "@shared/utils/functions"
import { ArrowIcon } from "@shared/icons"

import { ILinkLabelProps } from "../types/ILinkLabelProps"

import st from "./LinkLabel.module.scss"

const LinkLabel = (props: ILinkLabelProps) => {
  const { label, linkText, href, className, ...otherProps } = props

  return (
    <div {...otherProps} className={cn(className, st.root)}>
      <Text size="28" weight="700">
        {label}
      </Text>
      <Link href={href} className={st.link}>
        <Text size="20" className={st.linkText}>
          {linkText}
        </Text>
        <ArrowIcon className={st.icon} />
      </Link>
    </div>
  )
}

export { LinkLabel }