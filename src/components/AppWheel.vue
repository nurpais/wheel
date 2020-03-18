<template>
  <div class="wheel">
    <div class="wheel-wrapper">
      <!-- Wheel img -->
      <img src="../assets/images/wheel.png" alt="" class="wheel-img" />
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
    right: -55vw;
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
</style>
