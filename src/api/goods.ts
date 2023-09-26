import {axiosInstance} from "./index.ts";
import {GoodInterface} from "../store/goods";

const getGoods = () => {
    return axiosInstance.get<GoodInterface[]>('/goods')
}

export { getGoods }