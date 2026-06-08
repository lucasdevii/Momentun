import { asyncReqWrapper } from "../utils/wrappers";
import api from "./api";

export const createProject = asyncReqWrapper(async (projectInfos) => {
    return await api.post('/project/new', projectInfos);
})