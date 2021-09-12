<template>
  <div class="background box">
    <section class="container box">
      <div v-if="userData.avatar_url">
        <h1>Information about user</h1>
        <article class="container__content">
          <img :src="userData.avatar_url" alt="avatar">
          <div>
            <p v-if="userData.name">{{userData.name}}</p>
            <p v-if="userData.location">{{userData.location}}</p>
            <p v-if="userData.company">{{userData.company}}</p>
            <p v-if="userData.bio">{{userData.bio}}</p>
          </div>
        </article>
      </div>
      <div v-else>
        <p>There is no user called "{{username}}"</p>
      </div>
      <button @click="back">Back</button>
    </section>
  </div>
</template>

<script>
import { api } from "../services/Fetch";
export default {
  name: "Results",
  data(){
    return {
      username: this.$route.query.search,
      userData: {}
    }
  },
  methods: {
    back: function() {
      this.$router.push({
        name: 'Form'
      })
    },
    search: function(){
      api(this.username)
      .then((data) => {this.userData = data})
    }
  },
  mounted() {
    this.search();
  }
}
</script>

<style>

</style>