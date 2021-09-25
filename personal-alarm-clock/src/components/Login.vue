<template>
  <div>
    <h1 class="is-size-3">Welcome to your personal alarm clock</h1>
    <div class="card-wrapper">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <b-field label="Username" class="field-label">
              <b-input v-model="username"></b-input>
            </b-field>
            <b-field label="Password" class="field-label">
              <b-input type="password" v-model="password" password-reveal>
              </b-input>
            </b-field>
            <b-button type="is-primary" @click="checkLogin">Login</b-button>
          </div>
        </div>
      </div>
    </div>
    <p class="create-account-link">
      Don't have an account yet?
      <router-link to="/create-user">Create Account</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      setUser: "setUser", // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    checkLogin() {
      if (this.username == "Papa" && this.password == "123") {
        const papaUser = {
          firstName: "Andreas",
          lastName: "Manthey",
          username: "Papa",
          email: "papa@test.com",
          password: "123",
        };
        this.setUser(papaUser);
        this.$router.push("/alarm-clock");
      } else {
        this.$buefy.toast.open({
          duration: 4000,
          message: `Wrong credentials`,
          type: "is-danger",
        });
      }
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
}
.card-wrapper > * {
  grid-column: 2;
}
.card {
  margin-top: 5%;
}
.is-primary {
  margin-top: 2%;
}
.field-label {
  text-align: left;
}
.create-account-link {
  margin-top: 2%;
}
</style>
