<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="6">
        <b-card class="card-middle">
          <div class="text-center"><h4>Submit Success</h4></div>
            <b-button
              class="mt-5"
              block
              @click="gotoIndex"
              variant="primary"
              >Back</b-button
            >
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Constants from '~/plugins/constants.js'

export default {
 layout: 'default',
  name: 'submitSuccess',
  methods: {
    gotoIndex() {
      this.$router.push(Constants.URL_INDEX)
    },
  }
}
</script>

<style>

</style>