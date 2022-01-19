<template>
  <div class="home">
    <p>you are logged in</p>
    <button @click="logout">log out</button>
    <button @click="apiCall">api call</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      this.$store.dispatch("handleLogOutUser")
    },
    async apiCall() {
      await this.$axios.get("accounts/");
    },
  },
  middleware : 'auth',
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    margin-bottom: 30px;
    font-size: 30px;
    margin-top: 10px;
    color: #c69e4e;
  }
  button {
    cursor: pointer;
    height: 60px;
    width: 200px;
    margin: 0 auto 20px;
    border-radius: 10px;
    font-size: 18px;
  }
}
</style>