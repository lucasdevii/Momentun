import { asyncReqWrapper } from "../utils/wrappers";
import api from "./api";

export const createProject = asyncReqWrapper(async (name, description) => {
    return await api.post('/project/new', {name, description});
})