<template>
  <div id="app">
    <app-loader />
    <div class="sections">
      <div class="bg-overlay"></div>
      <app-section
        v-for="(movie, index) in movies"
        :key="index"
        :year="movie.year"
        :budget="movie.budget"
        :time="movie.time"
        :title="movie.title"
        :img="movie.img"
        :text="movie.text"
        :url="movie.url"
      />
    </div>
    <app-wheel :movies="movies" />
    <div class="controls">
      <div class="btn-group">
        <img @click="control('prev')" src="./assets/images/back.svg" alt="" />
        <img @click="control('next')" src="./assets/images/next.svg" alt="" />
      </div>
      <div class="turn">
        <img src="./assets/images/turn.png" alt="" class="turn-img" />
        TURN THE REEL
      </div>
    </div>
  </div>
</template>

<script>
import AppWheel from "./components/AppWheel";
import AppSection from "./components/AppSection";
import AppLoader from "./components/AppLoader";

import Anime from "./anime";
let anime = new Anime();
import movies from "./movies";

export default {
  name: "app",
  components: {
    AppWheel,
    AppSection,
    AppLoader
  },
  data() {
    return {
      movies
    };
  },
  mounted() {
    anime.startLoader();
  },
  methods: {
    control(dir) {
      anime.control(dir);
    }
  }
};
</script>

<style lang="scss">
.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  color: #fff;
  font-size: 4vw;
  z-index: 9999;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Source Sans Pro";
    font-weight: 700;
  }
}
.sections {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.bg-overlay {
  background-image: url("./assets/images/bg.png"),
    url("./assets/images/rect.png");
  background-position: center;
  background-repeat: no-repeat, space;
  background-size: cover, 4px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
}

.controls {
  position: absolute;
  left: 10vw;
  bottom: 20px;
  z-index: 998;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48vw;
  @media (max-width: 820px) {
    width: 78vw;
  }
  .btn-group {
    width: 2vw;
    display: flex;
    img {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .turn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-bottom: 10px;
    }
  }
}
</style>
