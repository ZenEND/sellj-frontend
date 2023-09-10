import {axiosInstance} from "./index.ts";

const getMe = () => {
    return axiosInstance.get('users/me')
}

export {
    getMe
}