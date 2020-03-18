<template>
  <div class="section">
    <div class="section-bg" :style="{ backgroundImage: `url(${img})` }"></div>
    <div class="section-text">
      <div class="section-text-content">
        <div class="section-info">
          <span>{{ year }}</span> // <span>{{ budget }}</span> //
          <span>{{ time }}</span>
        </div>
        <div class="section-title">{{ title }}</div>
        <div class="section-movie-text">{{ text }}</div>

        <a href="#" class="read-more">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-section",
  props: ["year", "budget", "title", "time", "text", "img"],
  mounted() {}
};
</script>

<style lang="scss">
.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
}
.section-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-position: center;
  background-size: cover;
  filter: grayscale(100%);
}
.section-text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 977;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-text-content {
  width: 510px;
  text-align: center;
}
.section-title {
  font-size: 48px;
  font-weight: 700;
}

.section-movie-text {
  margin-bottom: 36px;
}

.read-more {
  color: #fff;
}
</style>
