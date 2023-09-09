<script lang="ts" setup>

</script>

<template>
    <div class="container">
        <!-- 顶部全局组件 -->
        <HospitalTop/>
        <!-- 展示路由组件区域 -->
        <div class="content">
            <router-view></router-view>
        </div>
        <HospitalBottom/>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        margin-top: 4.375rem;
        width: 75rem;
    }
    .bottom {
        width: 100%;
    }
}

</style>