<script lang="ts" setup>

</script>

<template>
    <div>
        <el-carousel height="21.875rem">
          <el-carousel-item v-for="(item,index) in 5" :key="index">
            <img src="../../../assets/images/web-banner-1.png">
          </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 21.875rem;
}

</style>