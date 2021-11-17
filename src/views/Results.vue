<template>
  <div class="background box">
    <section class="container box">
      <!-- If there is a user  -->
      <user-information
        v-if="userData.avatar_url"
        :userData="userData"
        :username="username"
      ></user-information>
      <!-- If the user doesnt exist  -->
      <div v-else>
        <p>There is no user called "{{ username }}"</p>
      </div>
      <button @click="back">New search</button>
    </section>
  </div>
</template>

<script>
// import  api  from "../services/Fetch"
import userInformation from "../components/userInformation.vue";
import { api } from "../services/Fetch";

export default {
  name: "Results",
  components: {
    "user-information": userInformation,
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
    async search() {
      console.log(this.userData);
      const response = await api(this.username);
      this.userData = response;
      this.$forceUpdate();
    },
  },
  async mounted() {
    await this.search();
  },
};
</script>

<style></style>
