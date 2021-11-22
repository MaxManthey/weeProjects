<template>
  <div>
    <h1 class="is-size-2">Hi {{ firstName }}</h1>
    <Clock class="clock-wrapper" />
    <SetAlarm />
  </div>
  <!-- 
    
  -->
</template>

<script>
import Clock from "@/components/Clock.vue";
import SetAlarm from "@/components/SetAlarm.vue";
export default {
  components: {
    Clock,
    SetAlarm,
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
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
