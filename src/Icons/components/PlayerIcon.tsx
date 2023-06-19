import Icon, { IconInterface } from "../Icon"

const PlayerIcon = (props: IconInterface) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M5 11.7646C5 10.79 4.20992 9.99991 3.2353 9.99991H1.7647C0.790082 9.99991 0 10.79 0 11.7646V44.9996C0 47.7496 2.25 49.9996 5 49.9996H38.2353C39.2099 49.9996 40 49.2095 40 48.2349V46.7643C40 45.7897 39.2099 44.9996 38.2353 44.9996H6.7647C5.79008 44.9996 5 44.2095 5 43.2349V11.7646ZM45 0H15C12.25 0 10 2.24998 10 4.99996V34.9997C10 37.7497 12.25 39.9997 15 39.9997H45C47.75 39.9997 50 37.7497 50 34.9997V4.99996C50 2.24998 47.75 0 45 0ZM45 33.235C45 34.2096 44.2099 34.9997 43.2353 34.9997H16.7647C15.7901 34.9997 15 34.2096 15 33.235V6.76465C15 5.79004 15.7901 4.99996 16.7647 4.99996H43.2353C44.2099 4.99996 45 5.79004 45 6.76466V33.235ZM27.8235 10.8675C26.6602 9.99503 25 10.8251 25 12.2793V27.7204C25 29.1745 26.6602 30.0046 27.8235 29.1321L38.1176 21.4116C39.0588 20.7057 39.0588 19.2939 38.1176 18.5881L27.8235 10.8675Z" />
      </svg>
    </Icon>
  )
}

export default PlayerIcon
