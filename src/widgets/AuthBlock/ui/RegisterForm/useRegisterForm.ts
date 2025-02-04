import { signIn } from "next-auth/react"
import { useState } from "react"

import { createNewUser } from "@entities/Auth/api"

import { IRegisterFormProps } from "../../types/IRegisterFormProps"

const useRegisterForm = (props: IRegisterFormProps) => {
  const {
    changeAuthForm,
    login,
    setLogin,
    email,
    setEmail,
    password,
    setPassword,
    closeModal,
  } = props

  const isCanGoLogin = login.length >= 3 && password.length >= 6

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const callCreateNewUser = async () => {
    setIsError(false)
    setIsLoading(true)

    try {
      await createNewUser({ username: login, password, email })

      const result = await signIn("credentials", {
        redirect: false,
        username: login,
        password,
      })

      if (result?.status === 200) closeModal()
      else throw new Error(result?.error ?? "")
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsError(true)
    }

    setIsLoading(false)
  }

  return {
    isLoading,
    isError,
    isCanGoLogin,
    callCreateNewUser,
    changeAuthForm,
    setLogin,
    setEmail,
    setPassword,
    login,
    email,
    password,
  }
}

export { useRegisterForm }
