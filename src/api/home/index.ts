// 统一管理首页模块接口
import request from '@/utils/request.ts'
import { HospitalResponseData, HospitalLevelAndRegionResponseData } from './type'

enum API {
    // 获取已有的医院的数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    // 获取医院的等级与地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/'
}

export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?=hostype=${hostype}&districtCode=${districtCode}`)

export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)