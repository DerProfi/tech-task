<template>
  <div class="background box">
    <div class="container box">
      <h1>Github user fetching</h1>
      <p v-if="errors.length">{{ errors.join(" ") }}</p>
      <!-- Submit prevent because the form is not connected, we just need the search method -->
      <input-form @submit="search"></input-form>
    </div>
  </div>
</template>

<script>
import inputForm from "../components/inputForm.vue"

export default {
  name: "Form",
  components: {
    inputForm,
  },
  data() {
    return {
      username: "",
      errors: [],
    };
  },
  methods: {
    search(payload) {
      this.username = payload.username;
      if (this.username) {
        this.$router.push({
          name: "Results",
          query: { search: this.username },
        });
      } else {
        this.errors.push("Please enter a username.");
      }
    },
  },
};
</script>
