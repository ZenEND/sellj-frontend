import {axiosInstance} from "./index.ts";

interface SignInDto {
    email: string
    password: string
}
const singIn = (signInDto: SignInDto) => {
    return axiosInstance.post('auth/sign-in', signInDto)
}

export {
    singIn
}