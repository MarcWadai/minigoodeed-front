<template>
  <div class="login_container">
    <form class="pure-form pure-form-stacked" @submit="checkForm">
      <fieldset>
        <!-- <legend>Welcome to Mini goodeed</legend> -->

        <input id="email" type="email" placeholder="Email" v-model="emailValue" />
        <span v-if="!emailValue" class="pure-form-message">This is a required field.</span>

        <input id="password" type="password" placeholder="Password" v-model="passwordValue" />
        <span v-if="!passwordValue" class="pure-form-message">This is a required field.</span>

        <input id="passwordConfirm" type="password" placeholder="Confirm Password" v-model="passwordValueConfirm" />
        <span v-if="!passwordValueConfirm" class="pure-form-message">This is a required field.</span>

        <div class="button_container">
          <button
            :disabled="!emailValue || !passwordValue || passwordValueConfirm !== passwordValue"
            type="submit"
            class="pure-button pure-button-primary"> Sign up</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Register",
  props: {},
  data: () => ({
    passwordValueConfirm: "",
    passwordValue: "",
    emailValue: ""
  }),
  components: {},
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.$store
        .dispatch("REGISTER", {
          email: this.$data.emailValue,
          password: this.$data.passwordValue
        })
        .then(data => {
          this.$router.push({ name: "home" });
          location.reload();
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
legend {
  margin-bottom: 50px;
}
form {
  margin: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button_container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
</style>
