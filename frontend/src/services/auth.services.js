import api from "./api"
import { asyncReqWrapper } from "../utils/wrappers";

export const register = asyncReqWrapper(async (userData) => {
    const res = await api.post('/auth/register', userData);
    return res
})

export const login = asyncReqWrapper(async (credentials) => {
    const res = await api.post('/auth/login', credentials);
    return res
})

