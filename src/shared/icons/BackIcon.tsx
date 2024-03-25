import { SVGProps } from "react"

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M46.4286 21.6002H12.1429L20.3929 13.7462C21.0964 13.0764 21.4286 12.2774 21.4286 11.4002C21.4286 9.72744 19.9768 8.00024 17.8571 8.00024C16.9089 8.00024 16.0821 8.32834 15.3929 8.98624L1.18214 22.5148C0.596428 23.0724 0 23.7609 0 25.0002C0 26.2395 0.498214 26.8362 1.15357 27.4601L15.3929 41.0142C16.0821 41.6721 16.9089 42.0002 17.8571 42.0002C19.9786 42.0002 21.4286 40.273 21.4286 38.6002C21.4286 37.723 21.0964 36.924 20.3929 36.2542L12.1429 28.4002H46.4286C48.4 28.4002 50 26.877 50 25.0002C50 23.1234 48.4 21.6002 46.4286 21.6002Z" />
  </svg>
)

export { BackIcon }
