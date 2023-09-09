<script lang="ts" setup>
import { reqHospitalLevelAndRegion } from '@/api/home'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
import { ref, onMounted } from 'vue'
onMounted(() => {
  getLevel()
})

const getLevel = async() => {
  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Hostype')
  if(result.code === 200) {
    levelArr.value = result.data
  }
} 

const levelArr = ref<HospitalLevelAndRegionArr>([])

const active = ref('')

const changeLevel = (level: string) => {
  // 高亮响应式数据存储level数值
  active.value = level
  // 触发自定义事件,将医院等级传给父组件
  $emit('getLevel', level)
}

let $emit = defineEmits(['getLevel'])


</script>

<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{ active: active === '' }" @click="changeLevel('')">全部</li>
        <li :class="{ active: active === level.value }" v-for="level in levelArr" :key="level.value" @click="changeLevel(level.value)">{{ level.name }}</li>
      </ul>
    </div>
  </div>
</template>






<style lang="scss" scoped>

.level {
    color: #7f7f7f;
  h1 {
    font-weight: 900;
    margin: 0.625rem 0;
  }
  .content {
    display: flex;
    .left {
      margin-right: 0.625rem;
    }
    .hospital {
      display: flex;
      li {
        margin-right: .625rem;

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
