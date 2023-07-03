import $axios from './axios.api'
import { paramsSerializer } from '@/utils/paramsSerializer'

const path = {
  getProject: () => 'project',
  getProjectWithParams: (params:Record<string,string[]>) => `/project?${paramsSerializer(params)}`
}

export const $axiosInstance = {
  getProject: async (): Promise<DataAPI[]> => {
    return (await $axios.get(path.getProject())).data
  },
  getProjectWithParams: async (params:Record<string,string[]>): Promise<DataAPI[]> => {
    return (await $axios.get(path.getProjectWithParams(params))).data
  }
}
