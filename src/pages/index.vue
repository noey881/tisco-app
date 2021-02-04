<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="6">
        <b-card class="card-middle">
          <div class="text-center"><h4>Contact Us</h4></div>
          <ValidationObserver ref="observer" v-slot="{ invalid }">
            <b-form novalidate="">
              <!--name group-->
              <b-row>
                <b-col cols="6">
                  <ValidationProvider
                    rules="required"
                    v-slot="{ classes, errors }"
                  >
                    <b-form-group
                      id="input-fname"
                      label="First name"
                      label-for="input-fname"
                    >
                      <b-form-input
                        id="input-fname"
                        v-model="form.firstName"
                        required
                        :class="classes"
                        placeholder="Enter First name"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        class="erorr-msg-feild"
                        :state="!errors.length"
                        >{{ errors[0] }}</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </ValidationProvider>
                </b-col>

                <b-col cols="6">
                  <ValidationProvider
                    rules="required"
                    v-slot="{ classes, errors }"
                  >
                    <b-form-group
                      id="input-lname"
                      label="Last name"
                      label-for="input-lname"
                    >
                      <b-form-input
                        id="input-lname"
                        v-model="form.lastName"
                        required
                        :class="classes"
                        placeholder="Enter Last Name"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        class="erorr-msg-feild"
                        :state="!errors.length"
                        >{{ errors[0] }}</b-form-invalid-feedback
                      >
                    </b-form-group>
                  </ValidationProvider>
                </b-col>
              </b-row>
              <!--name end-->

              <!--email group-->
              <ValidationProvider rules="email" v-slot="{ classes, errors }">
                <b-form-group
                  id="input-email"
                  label="Email"
                  label-for="input-email"
                >
                  <b-form-input
                    id="input-email"
                    v-model="form.email"
                    required
                    :class="classes"
                    placeholder="Enter Email"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="erorr-msg-feild"
                    :state="!errors.length"
                    >{{ errors[0] }}</b-form-invalid-feedback
                  >
                </b-form-group>
              </ValidationProvider>
              <!--email group end-->

              <!--phone group-->
              <ValidationProvider
                rules="phone|required"
                v-slot="{ classes, errors }"
              >
                <b-form-group
                  id="input-phone"
                  label="Phone"
                  label-for="input-phone"
                >
                  <b-form-input
                    id="input-phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    :class="classes"
                    placeholder="Enter phone number"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    class="erorr-msg-feild"
                    :state="!errors.length"
                    >{{ errors[0] }}</b-form-invalid-feedback
                  >
                </b-form-group>
              </ValidationProvider>
              <!--phone group end-->

              <!--message group-->
              <ValidationProvider rules="required" v-slot="{ classes, errors }">
                <b-form-group
                  id="input-msg"
                  label="Message"
                  label-for="input-msg"
                >
                  <b-form-textarea
                    id="input-msg"
                    v-model="form.message"
                    required
                    rows="3"
                    max-rows="6"
                    :class="classes"
                    placeholder="Enter message"
                  ></b-form-textarea>
                  <b-form-invalid-feedback
                    class="erorr-msg-feild"
                    :state="!errors.length"
                    >{{ errors[0] }}</b-form-invalid-feedback
                  >
                </b-form-group>
              </ValidationProvider>
              <!--message end-->

              <!--alert area-->
              <AlertInformation
                class="error-information"
                ref="alertInformation"
              />
              <!--alert area end-->
              <b-button
                class="mt-5"
                block
                @click="submit"
                variant="primary"
                :disabled="invalid"
                >Submit</b-button
              >
            </b-form>
          </ValidationObserver>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import AlertInformation from '~/components/AlertInformation.vue'
import Constants from '~/plugins/constants.js'

import { db } from "~/plugins/firebaseConfig.js";
import firebase from "firebase/app";
export default {
  layout: "default",
  name: "contact",
  components: {
    ValidationProvider: ValidationProvider,
    ValidationObserver: ValidationObserver,
    AlertInformation:AlertInformation,

  },
  data() {
    return {
      invalid: false,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        createDate: "" ,
      },
    };
  },
  methods: {
    submit() { 

     var that = this 
     this.form.createDate = firebase.firestore.FieldValue.serverTimestamp()
      // db.collection(Constants.COLLECTION_NAME).add(this.form)
      // .then(function() {
      //     that.$router.push(Constants.URL_SUBMIT_SUCCESS)
      // })
      // .catch(function(error) {
      //     that.$refs.alertInformation.showAlert(error)
      //     console.error("Error writing document: ", error)
      // });


      db.collection(Constants.COLLECTION_NAME).add(this.form)
      .then(() => {
          that.$router.push(Constants.URL_SUBMIT_SUCCESS)
      })
      .catch((error) =>  {
          that.$refs.alertInformation.showAlert(error)
          console.error("Error writing document: ", error)
      });

    },
  },
};
</script>

<style>
</style>
