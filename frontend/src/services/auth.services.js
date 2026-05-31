import api from "./api"
import { asyncWrapper } from "../utils/wrappers";

export const register = asyncWrapper(async (userData) => {
    const res = await api.post('/auth/register', userData);
    return res
})