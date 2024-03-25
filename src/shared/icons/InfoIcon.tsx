import { SVGProps } from "react"

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M25 39.7731C26.2552 39.7731 27.2727 38.7556 27.2727 37.5004V21.5913C27.2727 20.3361 26.2552 19.3186 25 19.3186C23.7448 19.3186 22.7273 20.3361 22.7273 21.5913V37.5004C22.7273 38.7556 23.7448 39.7731 25 39.7731Z" />
    <path d="M24.9999 17.046C26.8826 17.046 28.409 15.5197 28.409 13.6369C28.409 11.7541 26.8826 10.2278 24.9999 10.2278C23.1172 10.2278 21.5908 11.7541 21.5908 13.6369C21.5908 15.5197 23.1172 17.046 24.9999 17.046Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 25.0002C0 38.8073 11.1929 50.0002 25 50.0002C38.807 50.0002 50 38.8073 50 25.0002C50 11.1931 38.807 0.000244141 25 0.000244141C11.1929 0.000244141 0 11.1931 0 25.0002ZM25 45.4548C13.7033 45.4548 4.54545 36.2971 4.54545 25.0002C4.54545 13.7035 13.7033 4.5457 25 4.5457C36.2968 4.5457 45.4545 13.7035 45.4545 25.0002C45.4545 36.2971 36.2968 45.4548 25 45.4548Z"
    />
  </svg>
)

export { InfoIcon }
