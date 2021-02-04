<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="6">
        <b-card class="card-middle">
          <div class="text-center"><h4>Sign In</h4></div>

          <b-form novalidate="">
            <!--username group-->
            <b-form-group
              id="input-email"
              label="Email"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                required
                placeholder="Enter Email"
              ></b-form-input>
            </b-form-group>
            <!--username group end-->
            <!--password group-->
            <b-form-group
              id="input-password"
              label="Password"
              label-for="input-password"
            >
              <b-form-input
                id="input-password"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <!--password end-->
            <AlertInformation
              class="error-information"
              ref="alertInformation"
            />
            <b-button class="mt-5" block @click="signIn" variant="primary"
              >Sign In</b-button
            >
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AlertInformation from "~/components/AlertInformation.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Constants from "~/plugins/constants.js";
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "~/plugins/firebaseConfig.js";

export default {
  layout: "default",
  name: "singIn",
  components: {
    ValidationProvider: ValidationProvider,
    ValidationObserver: ValidationObserver,
    AlertInformation: AlertInformation,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  created: function () {
    //clear token
  },
  methods: {
    async signIn() {
      this.$refs.alertInformation.hideAlert()
      let that = this;

      if (this.form.email == "" || this.form.password == "") {
        this.$refs.alertInformation.showAlert(
          Constants.EMAIL_OR_PASSWORD_WRONG
        );
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(
            (user) => {
              this.$router.push(Constants.URL_VIEW);
            },
            (err) => {
              this.$refs.alertInformation.showAlert(
              err
            )
            }
          )
      }
    },
  },
};
</script>

<style></style>
