<template>
  <div>
    <h1>login</h1>
    <p>name<input type="text" required v-model="email" /></p>
    <p>password<input type="password" required v-model="password" /></p>
    <button @click="login()">Login</button>
    <button @click="googlelogin()">google</button>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../plugins/firebaseInit";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      //const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user" + user);
          this.$router.replace("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    },
    googlelogin() {
      const provider = new GoogleAuthProvider();
      // const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("Google token" + token);
          console.log(user);
          this.$router.replace("/");
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // The email of the user's account used.
          // const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    logout() {
      // const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
