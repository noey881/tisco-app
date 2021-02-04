<template>
  <b-alert :show="isAlertShow" variant="danger" dismissible class="mt-1">
    {{ wording }}
  </b-alert>
</template>

<script>
export default {
  name: 'alertInformation',
  data() {
    return {
      isAlertShow: false,
      wording: ''
    }
  },
  methods: {
    showAlert(errorMSG) {
      this.wording = errorMSG
      this.isAlertShow = true
    },
    hideAlert() {
      this.wording = ''
      this.isAlertShow = false
    }
  }
}
</script>

<style></style>
