import {axiosInstance} from "./index.ts";
import {GoodInterface} from "../store/goods";

const getGoods = () => axiosInstance.get<GoodInterface[]>('/products')

export { getGoods }