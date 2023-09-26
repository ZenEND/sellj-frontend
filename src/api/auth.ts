import {axiosInstance} from "./index.ts";

interface SignInDto {
    email: string
    password: string
}
const signIn = (signInDto: SignInDto) => {
    return axiosInstance.post('auth/sign-in', signInDto)
}

const signUp = (signInDto: SignInDto) => {
    return axiosInstance.post('auth/sign-up', signInDto)
}

export {
    signIn,
    signUp
}