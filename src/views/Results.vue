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
export default {
  name: "Results",
  data(){
    return {
    }
  },
  methods: {
    back() {
      this.$router.push({
        name: 'Form'
      })
    }
  }
}
</script>

<style>

</style>