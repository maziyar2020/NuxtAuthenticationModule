<template>
  <form class="form" @submit.prevent="$emit('confirmCode', confirmCode)">
    <div class="form__field">
      <label for="confirm">کد تایید</label>
      <input type="text" id="confirm" v-model="confirmCode" />
    </div>
    <button type="submit" class="form__btn">
      <p v-if="!isLoading">ورود</p>
      <div v-else class="lds-dual-ring"></div>
    </button>
  </form>
</template>

<script>

export default {
  name: "ConfirmCode",
  props: ["isLoading"],
  data() {
    return {
      confirmCode: "",
    };
  },
};
</script>

<style scoped lang="scss">
.form {
  width: 600px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f6f5;
  .form__field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    label {
      color: #777;
    }
    input {
      width: 100%;
      height: 30px;
      padding: 5px 10px;
      border-radius: 5px;
      border: 1px dashed rgba(0, 0, 0, 0.07);
    }
  }
  .form__btn {
    width: 150px;
    height: 50px;
    margin: 0 auto;
    border-radius: 10px;
    color: #c69e4e;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
}
</style>