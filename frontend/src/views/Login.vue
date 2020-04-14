<template>
  <div class="hello">
    <h1>Login</h1>
    <form ref="login">
      <input v-model="inputs.email" placeholder="Email" />
      <input v-model="inputs.password" placeholder="Password" type="password" />
      <button type="submit" @click.prevent="login(inputs)">
        Login
      </button>
    </form>
    <p>{{ msgLogin }}</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      inputs: { email: "", password: "" },
      msgLogin: "Waiting to Login"
    };
  },
  methods: {
    login({ email, password }) {
      this.$store
        .dispatch("auth/login", { email, password })
        .then(() => this.$router.push("/home"))
        .catch(() => (this.msgLogin = "Login Failed"));
    }
  }
};
</script>

<style></style>
