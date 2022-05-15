<template>
  <div class="swiper-wrapper" ref="swiperWrapper">
    <div
      class="swiper-list"
      :style="{ transform: `translate(${-state.left}px,0px)` }"
    >
      <div class="swiper-item" v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { imgList } from "../../const";
import { ref, onMounted, reactive } from "vue";
const swiperWrapper = ref<null | HTMLElementTagNameMap["div"]>(null);

const state = reactive({
  left: 0,
});

const computedSwiperWrapperWidth = () => {
  const input = swiperWrapper.value;
  const positionInfo = input?.getBoundingClientRect();
  return positionInfo?.width;
};
const initInterval = () => {
  setInterval(() => {
    const width = computedSwiperWrapperWidth();
    state.left = state.left + (width ? width : 0);
  }, 3000);
};
onMounted(() => {
  initInterval();
});
</script>

<style lang="less" scoped>
.swiper-wrapper {
  width: 100%;
  overflow: hidden;
  border: 1px solid #cccccc;
  .swiper-list {
    transition: all 0.3s;
    display: flex;
    align-items: stretch;
    .swiper-item {
      flex-shrink: 0;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      > img {
        width: 100%;
      }
    }
  }
}
</style>
