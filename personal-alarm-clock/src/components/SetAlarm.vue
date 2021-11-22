<template>
  <div>
    <h1 class="is-size-2">Alarm set to: {{ alarmTime }}</h1>
    <!-- <b-button
      type="is-primary"
      class="set-alarm-btn"
      label="Set Alarm"
      size="is-medium"
      @click="promptAlarm"
    /> -->
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <template #trigger>
        <b-button
          label="Set Alarm"
          class="set-alarm-btn"
          type="is-primary"
          aria-controls="contentIdForA11y1"
        />
      </template>
      <div class="notification">
        <div class="content">
          <b-field label="Hour">
            <b-numberinput
              v-model="hourInput"
              placeholder="12"
              :min="0"
              :max="23"
            ></b-numberinput>
          </b-field>
          <b-field label="Minute">
            <b-numberinput
              v-model="minuteInput"
              placeholder="30"
              :min="0"
              :max="59"
            ></b-numberinput>
          </b-field>
          <b-button type="is-primary">Save</b-button>
        </div>
      </div>
    </b-collapse>
    <!-- Wenn + und - immer noch nicht funktionieren dann einfach selber modul schreiben bei denen props für min und max übergeben werden -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      alarmTime: "-",
      hourInput: 12,
      minuteInput: 30,
      secondInput: 0,
    };
  },
  //   methods: {
  //     promptAlarm() {
  //       this.$buefy.dialog.prompt({
  //         message: `What's your age?`,
  //         inputAttrs: {
  //           [
  //               {
  //                   type: "number",
  //           placeholder: "Hour",
  //           value: "12",
  //           min: 0,
  //           max: 23,
  //               },
  //               {
  //                   type: "number",
  //           placeholder: "Hour",
  //           value: "12",
  //           min: 0,
  //           max: 23,
  //               }
  //           ]
  //         },
  //         trapFocus: true,
  //         onConfirm: (value) => this.$buefy.toast.open(`Your age is: ${value}`),
  //       });
  //     },
  //   },
};
</script>

<style scoped>
.set-alarm-btn {
  margin-top: 2%;
}
.notification {
  margin: 0 30%;
}
</style>
