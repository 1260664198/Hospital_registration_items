<script lang="ts" setup></script>
<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left">
        <img src="../../assets/images/logo.png" />
        <h2>大兴区中西医结合医院 预约挂号统一平台</h2>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册中心</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: center;
  background: #fff;
  .content {
    width: 75rem;
    height: 4.375rem;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 3.125rem;
        height: 3.125rem;
        margin-right: 0.625rem;
      }
      h2 {
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      .help {
        margin-right: .625rem;
      }
   
    }
  }
}
</style>
