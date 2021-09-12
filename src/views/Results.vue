<template>
  <div class="background box">
    <section class="container box">
      <!-- If there is a user  -->
      <div v-if="userData.avatar_url">
        <h1>Information about user</h1>
        <article class="container__content">
          <img :src="userData.avatar_url" alt="avatar">
          <div class="container__text">
            <p v-if="userData.name"><strong>Name: </strong>{{userData.name}}</p>
            <p v-if="userData.location"><strong>City: </strong>{{userData.location}}</p>
            <p v-if="userData.company"><strong>Company: </strong>{{userData.company}}</p>
            <p v-if="userData.bio"><strong>Bio: </strong>{{userData.bio}}</p>
          </div>
        </article>
      </div>
      <!-- If there user doesnt exist  -->
      <div v-else>
        <p>There is no user called "{{username}}"</p>
      </div>
      <button @click="back">New search</button>
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