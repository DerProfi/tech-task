<template>
  <div class="background box">
    <section class="container box">
      <!-- If there is a user  -->
      <user-information v-if="userData.avatar_url" v-bind:userData="userData"></user-information>
      <!-- If the user doesnt exist  -->
      <div v-else>
        <p>There is no user called "{{ username }}"</p>
      </div>
      <button @click="back">New search</button>
    </section>
  </div>
</template>

<script>
import { api } from "../services/Fetch"
import userInformation from "../components/userInformation.vue"

export default {
  name: "Results",
  components: {
    'user-information': userInformation,
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
    search: function () {
      api(this.username).then((data) => {
        this.userData = data;
      });
    },
  },
  mounted() {
    this.search();
  },
};
</script>

<style></style>
