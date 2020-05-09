<template>
  <div class="loader">
    <h2>
      The 10 Highest-Grossing
      <br />Movies of All Time Worldwide
    </h2>
    <img class="loader-icon" src="../assets/images/filming.svg" alt="Loader" />
  </div>
</template>
<style lang="scss">
h2 {
  opacity: 0;
}
.loader {
  display: flex;
  flex-direction: column;
  &-icon {
    width: 60px;
    margin-top: 3rem;
    animation: 4s linear 0s infinite loader-rotate;
    opacity: 0;
  }

  @keyframes loader-rotate {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
<script>
export default {
  name: "app-laoder"
};
</script>
