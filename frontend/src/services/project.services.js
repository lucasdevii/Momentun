import { asyncReqWrapper } from "../utils/wrappers";
import api from "./api";

export const createProject = asyncReqWrapper(async (projectInfos) => {
    return await api.post('/project/new', projectInfos);
})

export const getProjectById = asyncReqWrapper(async (projectId) => {
    return await api.get(`/project/${projectId}`);
})