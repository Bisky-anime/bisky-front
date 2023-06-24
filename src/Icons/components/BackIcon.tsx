import Icon, { IconInterface } from "../Icon"

const BackIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M45.3999 21.6H12.76L20.614 13.746C21.2838 13.0762 21.6 12.2772 21.6 11.4C21.6 9.7272 20.2178 8 18.2 8C17.2973 8 16.5101 8.3281 15.854 8.986L2.32535 22.5146C1.76775 23.0722 1.19995 23.7607 1.19995 25C1.19995 26.2393 1.67425 26.836 2.29815 27.4599L15.854 41.014C16.5101 41.6719 17.2973 42 18.2 42C20.2196 42 21.6 40.2728 21.6 38.6C21.6 37.7228 21.2838 36.9238 20.614 36.254L12.76 28.4H45.3999C47.2767 28.4 48.7999 26.8768 48.7999 25C48.7999 23.1232 47.2767 21.6 45.3999 21.6Z" />
      </svg>
    </Icon>
  )
}

export default BackIcon