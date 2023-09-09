<script lang="ts" setup>
import { reqHospitalLevelAndRegion } from '@/api/home'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
import { ref, onMounted } from 'vue'
onMounted(() => {
  getRegion()
})

const getRegion = async() => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin')
  if(result.code === 200) {
    regionArr.value = result.data

  }
}

const regionArr = ref<HospitalLevelAndRegionArr>([]) // 获取地区的数据
const regionFlag = ref<string>('') // 地区高亮的响应式数据

const changeRegion = (region: string) => {
  regionFlag.value = region
  $emit('getRegion', region)
}



let $emit = defineEmits(['getRegion']) 

</script>

<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{active: regionFlag === ''}" @click="changeRegion('')">全部</li>
        <li :class="{active: regionFlag === item.value}"  @click="changeRegion(item.value)" v-for="item in regionArr" :key="item.value">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>






<style lang="scss" scoped>
.region {
  color: #7f7f7f;
  margin-top: .625rem;
  .content {
    display: flex;

    .left {
        margin-right: .625rem;
        white-space: nowrap;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            margin-right: .625rem;
            margin-bottom: .625rem;
            &.active {
                color: #55a6fe;
            }

        }
        li:hover {
            color: #55a6fe;
            cursor: pointer;
        }
    }
  }
}
</style>
