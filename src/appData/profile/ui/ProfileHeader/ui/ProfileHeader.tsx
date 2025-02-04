import { PlaceholderImage, Text } from "@shared/ui/atoms"
import { Badge } from "@shared/ui/molecules"
import { Fancybox } from "@shared/utils/lib"

import { IProfileHeaderProps } from "../types/IProfileHeaderProps"
import { formatLastOnline } from "../functions/formatLastOnline"

import st from "./ProfileHeader.module.scss"
import { useProfileHeader } from "./useProfileHeader"

const ProfileHeader = (props: IProfileHeaderProps) => {
  const { userData } = useProfileHeader(props)

  return (
    <div className={st.root}>
      <PlaceholderImage
        width={1920}
        height={204}
        src={userData.userPersonalization.background ?? ""}
        alt=""
        className={st.background}
        imageClassName={st.backgroundImage}
      />
      <div className={st.main}>
        <div className={st.leftSide}>
          <div className={st.avatarWrapper}>
            <Fancybox options={{ Carousel: { infinite: false } }}>
              <a
                href={
                  userData.avatar
                    ? `${userData.avatar}?${Date.now().toString()}`
                    : ""
                }
                target="_blank"
                rel="noopener noreferrer"
                data-fancybox="gallery"
              >
                <PlaceholderImage
                  width={300}
                  height={300}
                  src={userData.avatar ?? ""}
                  alt=""
                  className={st.avatar}
                  imageClassName={st.avatarImage}
                  quality={100}
                />
              </a>
              <a
                href={userData.userPersonalization.background ?? ""}
                data-fancybox="gallery"
              />
            </Fancybox>
            {userData.userPersonalization.badge && (
              <Badge variant="medium" className={st.badge}>
                {userData.userPersonalization.badge}
              </Badge>
            )}
          </div>
          <div className={st.labelWrapper}>
            <div>
              <Text weight="700" size="32">
                {userData.username}
              </Text>
              <Text weight="700" className={st.date}>
                {formatLastOnline(userData.lastOnlineDate)}
              </Text>
            </div>
            <div style={{ height: "60px" }} />
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export { ProfileHeader }
