import Icon, { IconInterface } from "../Icon"

const MaskIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M25 14.4109C29.4 12.8036 33.15 12 36.25 12C39.8967 12 43.3941 13.3696 45.9727 15.8076C48.5513 18.2456 50 21.5522 50 25C50 28.4478 48.5513 31.7544 45.9727 34.1924C43.3941 36.6304 39.8967 38 36.25 38C33.15 38 29.4 37.168 25 35.5016C20.6 37.168 16.85 38 13.75 38C10.1033 38 6.60591 36.6304 4.02728 34.1924C1.44866 31.7544 0 28.4478 0 25C0 21.5522 1.44866 18.2456 4.02728 15.8076C6.60591 13.3696 10.1033 12 13.75 12C16.85 12 20.6 12.8036 25 14.4109ZM26.8025 18.8215L25 19.4785L23.1975 18.8215C19.3275 17.408 16.1575 16.7273 13.75 16.7273C11.4294 16.7273 9.20376 17.5989 7.56282 19.1503C5.92187 20.7017 5 22.8059 5 25C5 27.1941 5.92187 29.2983 7.56282 30.8497C9.20376 32.4011 11.4294 33.2727 13.75 33.2727C16.1325 33.2727 19.2875 32.5731 23.1425 31.1147L25 30.4104L26.8575 31.1147C30.7125 32.5731 33.8675 33.2727 36.25 33.2727C38.5706 33.2727 40.7962 32.4011 42.4372 30.8497C44.0781 29.2983 45 27.1941 45 25C45 22.8059 44.0781 20.7017 42.4372 19.1503C40.7962 17.5989 38.5706 16.7273 36.25 16.7273C33.8425 16.7273 30.6725 17.408 26.8025 18.8215ZM15 28.5455C12.2375 28.5455 10 26.9571 10 25C10 23.0429 12.2375 21.4545 15 21.4545C17.7625 21.4545 20 23.0429 20 25C20 26.9571 17.7625 28.5455 15 28.5455ZM35 28.5455C32.2375 28.5455 30 26.9571 30 25C30 23.0429 32.2375 21.4545 35 21.4545C37.7625 21.4545 40 23.0429 40 25C40 26.9571 37.7625 28.5455 35 28.5455Z" />
      </svg>
    </Icon>
  )
}

export default MaskIcon
