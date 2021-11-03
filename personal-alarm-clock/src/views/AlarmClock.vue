<template>
  <div>
    <h1 class="is-size-2">Hi {{ firstName }}</h1>
    <Clock class="clock-wrapper" />
  </div>
  <!-- 
    
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

<style scoped>
.clock-wrapper {
  margin-top: 7%;
}
</style>
