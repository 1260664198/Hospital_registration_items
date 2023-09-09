<script lang="ts" setup>
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import type { Content, HospitalResponseData } from "@/api/home/type"

import { ref, onMounted } from 'vue'
import { reqHospital } from '@/api/home'

onMounted(() => {
  getHospitalInfo()
})

// 发请求获取已有的医院数据
const getHospitalInfo = async() => {
  let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value)
  if (result.code === 200) {
    // @ts-ignore
    const { content, totalElements } = result.data
    hasHospitalArr.value = content
    total.value = totalElements
  }
}

// 分页器页码发生变化时的回调
const currentChange = () => {
  getHospitalInfo()
}

// 分页器下拉菜单变化的回调
const sizeChange = () => {
  pageNo.value = 1
  getHospitalInfo()
}

// 子组件自定义事件:获取子组件给父组件传递过来的等级参数
const getLevel = (level: string) => {
  // 收集等级参数
  console.log(level)
  hostype.value = level
  getHospitalInfo()
}
// 获取子组件地区参数
const getRegion = (region: string) => {
  districtCode.value = region
  getHospitalInfo()

}

const hasHospitalArr = ref<Content>([]) // 存储已有的医院的数据
const total = ref<number>(0) // 存储医院总个数
const hostype = ref<string>('') // 医院等级相关的数据
const districtCode = ref<string>('')

const pageNo = ref<number>(1) // 分页器页码
const pageSize = ref<number>(10) // 一页展示几条数据
</script>
<template>
  <div>
    <!-- 首页轮播图 -->
    <Carousel />
    <!-- 搜索组件 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <Level @getLevel="getLevel"/>
        <!-- 等级子组件 -->
        <Region @getRegion="getRegion"/>
        <!-- 医院卡片结构 -->
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card class="item" v-for="item in hasHospitalArr" :key="item.id" :hospitalInfo="item"/>
        </div>
        <el-empty description="没有医院的信息" />
           <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 20, 30, 40]"
            :background="true"
            layout="prev, pager, next, jumper, ->, total, sizes"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
            />
      </el-col>
      <!-- 地区 -->
      <el-col :span="4"> </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 0.625rem 0;
  }
}
</style>
