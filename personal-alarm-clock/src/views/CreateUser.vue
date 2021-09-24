<template>
  <div>
    <h1 class="is-size-3">Create your account</h1>
    <div class="card-wrapper">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <b-field label="First name" class="field-label">
              <b-input v-model="firstName"></b-input>
            </b-field>
            <b-field label="Last name" class="field-label">
              <b-input v-model="lastName"></b-input>
            </b-field>
            <b-field label="Username" class="field-label">
              <b-input v-model="username"></b-input>
            </b-field>
            <b-field label="Email" class="field-label">
              <b-input type="email" v-model="email"></b-input>
            </b-field>
            <b-field label="Password" class="field-label">
              <b-input type="password" v-model="password" password-reveal>
              </b-input>
            </b-field>
            <b-button type="is-primary" @click="createUser">Register</b-button>
          </div>
        </div>
      </div>
    </div>
    <p class="create-account-link">
      Back to
      <router-link to="/">Login</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    createUser() {
      if (this.username != "Papa" || this.email == "papa@test.com") {
        this.$router.push("/alarm-clock");
      } else {
        this.$buefy.toast.open({
          duration: 4000,
          message: `Username or email is already being used`,
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
  margin-top: 2%;
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
