<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
    <div class="search">
        <el-autocomplete
        fetch-suggestions=""
        trigger-on-focus="false"
        clearable
        class="from"
        placeholder="请您输入医院名称"
        @select=""
      />
      <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<style lang="scss" scoped>
.search {
    width: 100%;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .625rem 0;
    :deep(.el-input__wrapper) {
        width: 37.5rem;
        margin-right: .625rem;
    }
}

</style>