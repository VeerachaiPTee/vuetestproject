<template>
  <div>
    <h3>{{ email }}</h3>
    <h3>{{ uid }}</h3>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      userData: "",
      email: "",
      uid: "",
    };
  },
  mounted() {
    this.CheckLogin();
  },
  methods: {
    CheckLogin() {
      // const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          // ...
          this.email = user.email;
          this.uid = user.uid;
        } else {
          // User is signed out
          // ...
          alert("Please login");
          this.$router.push("/register");
        }
      });
    },
  },
};
</script>

<style></style>
