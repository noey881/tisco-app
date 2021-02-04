<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="12">
        <b-card v-if="isAuthen" class="card-middle">
          <div class="text-center"><h4>View</h4></div>
          <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { db } from "~/plugins/firebaseConfig.js";
import firebase from "firebase/app";
import "firebase/auth";

import Constants from "~/plugins/constants.js";

export default {
  layout: "dataPage",
  name: "viewPage",

  data() {
    return {
        isAuthen:false,
      fields: [
        {
          key: "firstName",
          label: "First Name",
          sortable: true,
        },
        {
          key: "lastName",
          label: "Last Name",
          sortable: true,
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
        },
        {
          key: "phone",
          label: "Phone",
          sortable: true,
        },
        {
          key: "message",
          label: "Message",
          sortable: true,
        },
        {
          key: "createDate",
          label: "Create Date",
          formatter: "formatDateAssigned",
          sortable: true,
        },
      ],
      items: [],
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push(Constants.URL_SIGNIN)
      } else {
          this.isAuthen = true
      }
    });
  },

  created() {
    this.fetch()
  },

  methods: {
    async fetch() {
      db.collection("contactData")
        .get()
        .then((querySnapshot) => {
          const tempDoc = [];
          querySnapshot.forEach((doc) => {
            // console.log(doc.data())

            tempDoc.push({ id: doc.id, ...doc.data() })
          });
          this.items = tempDoc;
        });
    },
    formatDateAssigned(value) {
      let convert = "null"
      if (value) {
        let sec = value.seconds;
        convert = new Date(sec * 1000)
      }

      return convert
    },
  },
}
</script>

<style>
</style>