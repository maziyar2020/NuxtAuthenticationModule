<template>
  <div class="login">
    <component
      :is="currentComponent"
      @formSub="formSubmit"
      @confirmCode="formConfirm"
      :loading="isLoading"
    />
  </div>
</template>

<script>
import LoginConfirm from "../components/LoginConfirm.vue";
import { mapGetters } from "vuex";
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "LoginWrapper",
  data() {
    return {
      isLoading: false,
      username: "",
    };
  },
  components: {
    LoginConfirm,
    LoginForm,
  },
  computed: {
    ...mapGetters(["currentComponent"]),
  },
  methods: {
    async formSubmit(formDetail) {
      this.username = formDetail;
      this.isLoading = true;
      const formData = new FormData();
      formData.append("username", formDetail);

      try {
        await this.$axios.post("accounts/login/", formData, {
          "Content-Type": "multipart/form-data",
        });
        this.$store.dispatch("handleChangeLoginForm", "LoginConfirm");
      } catch (error) {
        console.log(error);
        console.log(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async formConfirm(formDetail) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append("code", formDetail);
      formData.append("username", this.username);

      try {
        await this.$axios
          .post("accounts/verify/", formData, {
            "Content-Type": "multipart/form-data",
          })
          .then((res) => {
            this.$cookies.set("userAccessToken", res.data.access);
            this.$cookies.set("userRefreshToken", res.data.refresh);

            this.$store.dispatch("handleLogInUser");
            this.$store.dispatch("handleChangeLoginForm", "LoginForm");
            this.$router.push("/");
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  middleware : 'loggedIn'
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>