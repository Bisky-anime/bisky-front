import { Icon, IconInterface } from "../ui/Icon"

const ReloadIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M4.32671 15.8213C5.43729 14.395 7.65903 14.0266 9.28911 14.9984C10.9192 15.97 11.3404 17.9141 10.2298 19.3403C8.22836 21.9109 7.14286 24.9428 7.14286 28.125C7.14286 36.7544 15.1378 43.75 25 43.75C34.8621 43.75 42.8571 36.7544 42.8571 28.125C42.8571 19.4956 34.8621 12.5 25 12.5C23.0276 12.5 21.4286 11.1009 21.4286 9.375C21.4286 7.64906 23.0276 6.25 25 6.25C38.8071 6.25 50 16.0438 50 28.125C50 40.2062 38.8071 50 25 50C11.1929 50 0 40.2062 0 28.125C0 23.6775 1.52379 19.4213 4.32671 15.8213Z" />
        <path d="M33.9507 17.0675C35.0136 18.5216 34.5282 20.4541 32.8664 21.3841C31.2047 22.3141 28.9961 21.8894 27.9336 20.4353L19.9795 9.5547C18.9167 8.10063 19.4021 6.16813 21.0637 5.23813C22.7253 4.30813 24.9339 4.73313 25.9968 6.18688L33.9507 17.0675Z" />
        <path d="M33.6085 0.301604C35.4096 -0.401521 37.5213 0.306293 38.3249 1.88223C39.1285 3.45848 38.3196 5.30629 36.5185 6.00942L24.4441 10.7222C22.6427 11.4254 20.531 10.7179 19.7275 9.14161C18.9239 7.56536 19.7327 5.71754 21.5341 5.01442L33.6085 0.301604Z" />
      </svg>
    </Icon>
  )
}

export { ReloadIcon }