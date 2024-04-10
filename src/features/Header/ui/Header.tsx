"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { useContext } from "react"

import { Text } from "@shared/ui/atoms/Text"
import { LogoIcon, SearchIcon } from "@shared/icons"
import { cn } from "@shared/utils/functions"
import { LinkTabs } from "@shared/ui/molecules/LinkTabs"
import { Button } from "@shared/ui/molecules/Button"
import { Skeleton } from "@shared/ui/atoms/Skeleton"
import { ModalContext } from "@appData/mainLayout/ui/ModalProvider"

import { IHeaderProps } from "../types/IHeaderProps"

import st from "./Header.module.scss"
import { AuthBlock } from "./AuthBlock/AuthBlock"
import { ProfileMenu } from "./ProfileMenu"

const Header = (props: IHeaderProps) => {
  const { className, ...otherProps } = props

  const { data: session, status } = useSession()

  const { setModal } = useContext(ModalContext)

  return (
    <>
      <div {...otherProps} className={cn(st.root, className)}>
        <div className={st.leftSide}>
          <Link href="/" className={st.logoWrapper}>
            <LogoIcon className={st.logoIcon} />
            <Text
              size="44"
              weight="700"
              className={st.logoText}
              isDefaultColor={false}
            >
              Bisky
            </Text>
          </Link>
          <LinkTabs items={[{ name: "Каталог", href: "#" }]} />
        </div>
        <div className={st.rightSide}>
          <Button
            rightIcon={<SearchIcon className={st.searchIcon} />}
            className={st.searchButton}
            onClick={() => setModal(<></>)}
            textProps={{ weight: "400", size: "20", className: st.searchText }}
          >
            Поиск
          </Button>
          {status === "loading" ? (
            <Skeleton className={st.avatar} />
          ) : session ? (
            <ProfileMenu user={session} />
          ) : (
            <Button onClick={() => setModal(<AuthBlock />)}>Войти</Button>
          )}
        </div>
      </div>
    </>
  )
}

export { Header }
