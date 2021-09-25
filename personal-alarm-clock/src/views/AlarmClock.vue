<template>
  <div>
    <h1 class="is-size-2">Hi {{ firstName }}</h1>
    <Clock />
  </div>
  <!-- 
    - display current time
    - set alarm clock
    - play sound when clock strikes
    - checkbox to make alarm clock daily
    - Add Logout
    - Add localStorage
    - Work on darkmode
    - Add Acounts page
      - change name
      - change password
      - change email
      - delete account
  -->
</template>

<script>
import Clock from "@/components/Clock.vue";
export default {
  components: {
    Clock,
  },
  data() {
    return {
      firstName: "",
    };
  },
  mounted() {
    this.firstName = this.$store.state.user.firstName;
  },
};
</script>

<style lang="scss" scoped></style>
