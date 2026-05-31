import api from "./api"

export const register = async (userData) => {
    const {data, status} = await api.post('/register', userData);
    return {data, status}
}