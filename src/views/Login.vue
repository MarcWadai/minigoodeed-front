<template>
  <div class="login_container">
    <form class="pure-form pure-form-stacked">
      <fieldset>
        <!-- <legend>Welcome to Mini goodeed</legend> -->

        <input id="email" type="email" placeholder="Email" />
        <span class="pure-form-message">This is a required field.</span>

        <input id="password" type="password" placeholder="Password" />
        <span class="pure-form-message">This is a required field.</span>

        <div class="button_container">
          <button type="submit" class="pure-button pure-button-primary">Sign in</button>
          <span>Not register yet ?</span>
          <router-link to="/register">Sign up</router-link>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  props: {},
  data: () => ({}),
  components: {},
  methods: {},
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
