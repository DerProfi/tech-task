<template>
  <div class="background box">
    <section class="container box">
      <!-- If there is a user  -->
      <user-information v-if="userData.avatar_url" :userData="userData" :username="username" ></user-information>
      <!-- If the user doesnt exist  -->
      <div v-else>
        <p>There is no user called "{{ username }}"</p>
      </div>
      <HdButton
      @click="back"
      modifier="primary"
      :isInDarkBackground="false"
      iconSrc=""
      :disabled="false"
      >
      New search
    </HdButton>
    </section>
  </div>
</template>

<script>
// import  api  from "../services/Fetch"
import userInformation from "../components/userInformation.vue"
import { api } from "../services/Fetch";
import { HdButton } from 'homeday-blocks';

export default {
  name: "Results",
  components: {
    userInformation,
    HdButton
  },
  data() {
    return {
      username: this.$route.query.search,
      userData: {},
    };
  },
  methods: {
    back: function () {
      this.$router.push({
        name: "Form",
      });
    },
    search: function(){
      api(this.username)
      .then (result => this.userData = result)
    },
  },
   mounted() {
    this.search();
  },
};
</script>

<style></style>
