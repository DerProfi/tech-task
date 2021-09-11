<template>
  <div>
    <section>
      <div>
        <h1>Information about user</h1>
        <article>
          <img src="#" alt="avatar">
          <div>
            <p>Username</p>
            <p>City</p>
            <p>Company</p>
            <p>Bio</p>
          </div>
        </article>
      </div>
      <div>
        <p>There is no user called ...</p>
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