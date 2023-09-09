<script lang="ts" setup>
defineProps(['hospitalInfo']) // 接收父组件传递过来的props,即 已有的医院数据

// const { hosname, param, bookingRule  } = hospitalInfo

</script>

<template>
  <div>
    <el-card shadow="hover">
      <div class="content">
        <div class="left">
          <div class="hospital_name">{{ hospitalInfo.hosname }}</div>
          <div class="tip">
            <div class="level">
              <svg
                t="1690727441140"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2197"
                width="16"
                height="16"
              >
                <path
                  d="M829.2 380.8c-4.5 0-9.1 0.3-13.8 0.9l-134.3 16.8c-12.7 1.6-23.9 8.8-30.7 19.6-1 1.6-2 3.1-3 4.7-10.9 14.6-20.5 27.6-29.5 40-4.2 5.8-10.8 8.9-17.5 8.9-4.4 0-8.8-1.3-12.6-4.1-9.6-7-11.8-20.4-4.8-30.1 8-11 25.1-36.1 25.6-36.9 14.3-21.2 37.9-64.2 37.7-121.5V275c-2.2-94.5-83.5-168.2-178-168.2h-55.9c-29.5 0-50 29.1-40.2 56.9 10.8 30.3 19.2 69.7 15.7 115.4-4.1 53.9-23.1 95.2-37.4 119.8-3.8 6.5-5.7 13.8-5.7 21.2v422.5c0 22.3 17.2 40.8 39.4 42.5l415 31.9c2.8 0.2 5.5 0.3 8.2 0.3 54.8 0 101.2-42.2 105.5-97.8L937.6 498c4.8-64-46.1-117.2-108.4-117.2z"
                  fill="#F9DB88"
                  p-id="2198"
                ></path>
                <path
                  d="M256.8 410.4h-128c-23.6 0-42.7 19.1-42.7 42.7v384c0 23.6 19.1 42.7 42.7 42.7h128c23.6 0 42.7-19.1 42.7-42.7v-384c0-23.6-19.1-42.7-42.7-42.7z"
                  fill="#009F72"
                  p-id="2199"
                ></path>
              </svg>
              <span>{{ hospitalInfo.param.hostypeString }}</span>
            </div>
            <div class="time">
              <svg
                t="1690727551229"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3697"
                width="16"
                height="16"
              >
                <path
                  d="M512 972.8C276.48 972.8 85.333333 781.653333 85.333333 546.133333S276.48 119.466667 512 119.466667s426.666667 191.146667 426.666667 426.666666-191.146667 426.666667-426.666667 426.666667z m0-785.066667C314.026667 187.733333 153.6 348.16 153.6 546.133333s160.426667 358.4 358.4 358.4 358.4-160.426667 358.4-358.4-160.426667-358.4-358.4-358.4z"
                  fill="#3793DF"
                  p-id="3698"
                ></path>
                <path
                  d="M512 580.266667c-8.533333 0-17.066667-3.413333-23.893333-10.24L310.613333 392.533333c-13.653333-13.653333-13.653333-34.133333 0-47.786666 13.653333-13.653333 34.133333-13.653333 47.786667 0l153.6 153.6 182.613333-182.613334c13.653333-13.653333 34.133333-13.653333 47.786667 0 13.653333 13.653333 13.653333 34.133333 0 47.786667L535.893333 570.026667c-6.826667 6.826667-15.36 10.24-23.893333 10.24z"
                  fill="#EB4AF4"
                  p-id="3699"
                ></path>
              </svg>
              <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="`data:image/jpeg;base64,${ hospitalInfo.logoData }`" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  .right {
    img {
      width: 3.125rem;
      height: 3.125rem;
    }
  }
  .left {
    width: 60%;
    .tip {
      margin-top: 1.25rem;
      display: flex;
      justify-content: space-between;
      color: #7f7f7f;

      .level,.time {
        align-items: center;
        display: flex;
        span {
            margin-left: .3125rem;
        }
      }
    }
  }
}
</style>
