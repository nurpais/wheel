<template>
  <div class="wheel">
    <div class="wheel-wrapper">
      <!-- Wheel img -->
      <img src="../assets/images/wheel.png" alt="" class="wheel-img" />

      <div class="wheel-items">
        <div class="wheel-item" v-for="(movie, index) in movies" :key="index">
          <div class="bg"></div>
          <img :src="movie.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wheel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 999;
  right: -45vw;
  @media (max-width: 820px) {
    right: -70vw;
  }
}
.wheel-wrapper {
  width: 90vw;
  height: 90vw;
  position: relative;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}

.wheel-img {
  width: 100%;
}

.wheel-items {
  .wheel-item {
    position: absolute;
    width: 25vw;
    z-index: -1;
    &:nth-child(1) {
      top: 38vw;
      left: 1vw;
    }
    &:nth-child(2) {
      top: 55vw;
      left: 9vw;
      transform: rotate(-36deg);
    }
    &:nth-child(3) {
      transform: rotate(-72deg);
      bottom: 8vw;
      left: 23vw;
    }
    &:nth-child(4) {
      transform: rotate(-108deg);
      bottom: 8vw;
      right: 22vw;
    }
    &:nth-child(5) {
      transform: rotate(-144deg);
      bottom: 20vw;
      right: 7vw;
    }
    &:nth-child(6) {
      transform: rotate(-180deg);
      bottom: 38vw;
      right: 1vw;
    }
    &:nth-child(7) {
      transform: rotate(145deg);
      top: 20vw;
      right: 8vw;
    }
    &:nth-child(8) {
      transform: rotate(108deg);
      top: 9vw;
      right: 23vw;
    }
    &:nth-child(9) {
      transform: rotate(72deg);
      bottom: 67vw;
      right: 42vw;
    }
    &:nth-child(10) {
      transform: rotate(36deg);
      bottom: 55vw;
      right: 57vw;
    }
  }
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  name: "app-wheel",
  props: ["movies"]
};
</script>
