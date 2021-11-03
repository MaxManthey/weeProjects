<template>
  <div>
    <h1 class="is-size-1">{{ displayTime }}</h1>
    <h1 class="is-size-4">{{ displayDate }}</h1>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      displayTime: null,
      displayDate: null,
      polling: null,
    };
  },
  methods: {
    setDateTime() {
      this.polling = setInterval(() => {
        this.displayTime = this.currentTime();
        this.displayDate = this.currentDate();
      }, 500);
    },
    currentTime() {
      return moment().format("h:mm:ss");
    },
    currentDate() {
      return moment().format("DD MMMM YYYY");
    },
  },
  created() {
    this.setDateTime();
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
};
</script>

<style lang="scss" scoped></style>
