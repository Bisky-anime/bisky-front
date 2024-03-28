import { SVGProps } from "react"

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M15 25C15 23.3431 16.1193 22 17.5 22H32.5C33.8808 22 35 23.3431 35 25C35 26.6569 33.8808 28 32.5 28H17.5C16.1193 28 15 26.6569 15 25Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 0C2.23857 0 0 2.48731 0 5.55556V11.1111C0 14.1794 2.23857 16.6667 5 16.6667V41.6667C5 46.2692 8.35787 50 12.5 50H37.5C41.6423 50 45 46.2692 45 41.6667V16.6667C47.7615 16.6667 50 14.1794 50 11.1111V5.55556C50 2.48731 47.7615 0 45 0H5ZM40 19.1667C40 17.786 38.8807 16.6667 37.5 16.6667H12.5C11.1193 16.6667 10 17.786 10 19.1667V41.6667C10 43.2008 11.1193 44.4444 12.5 44.4444H37.5C38.8807 44.4444 40 43.2008 40 41.6667V19.1667ZM42.5 11.1111C43.8807 11.1111 45 9.99182 45 8.61111V8.05555C45 6.67484 43.8807 5.55556 42.5 5.55556H7.5C6.11929 5.55556 5 6.67484 5 8.05556V8.61111C5 9.99182 6.11929 11.1111 7.5 11.1111H42.5Z"
    />
  </svg>
)

export { ArrowIcon }
