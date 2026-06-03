import { asyncReqWrapper } from "../utils/wrappers";
import api from "./api";

export const getOwnInfo = asyncReqWrapper(async () => {
    const res = await api.get('/user/me');
    return res
})

// export const getUserInfos = asyncReqWrapper(async (username) => {
//     const res = await api.post(`/user/${username}`, credentials);
//     return res
// })