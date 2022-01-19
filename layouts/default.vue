<template>
    <div id="app">
      <Nuxt />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
  list-style: none;
}
i{
  color: purple;
}
body {
  direction: rtl;
}
/* loading */
.lds-dual-ring {
  display: inline-block;
  width: 25px;
  height: 25px;
}
.lds-dual-ring:after {
  content: " ";
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>