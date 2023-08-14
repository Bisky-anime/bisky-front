import { Icon, IconInterface } from "../ui/Icon"

const CrossIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M1.07143 48.9286C1.78571 49.6429 2.5 50 3.57143 50C4.64286 50 5.35714 49.6429 6.07143 48.9286L25 30L43.9286 48.9286C44.6429 49.6429 45.7143 50 46.4286 50C47.1429 50 48.2143 49.6429 48.9286 48.9286C50.3571 47.5 50.3571 45.3571 48.9286 43.9286L30 25L48.9286 6.07143C50.3571 4.64286 50.3571 2.5 48.9286 1.07143C47.5 -0.357143 45.3571 -0.357143 43.9286 1.07143L25 20L6.07143 1.07143C4.64286 -0.357143 2.5 -0.357143 1.07143 1.07143C-0.357143 2.5 -0.357143 4.64286 1.07143 6.07143L20 25L1.07143 43.9286C-0.357143 45.3571 -0.357143 47.5 1.07143 48.9286Z" />
      </svg>
    </Icon>
  )
}

export { CrossIcon }