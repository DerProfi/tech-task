<template>
  <div>
    <section>
      <h1>Github user fetching</h1>
      <!-- Submit prevent because the form is not connected, we just need the search method -->
      <form action="#" @submit="search" v-on:submit.prevent>
        <input type="text" name="search" placeholder="username" v-model="username">
        <button type="submit">Search</button>
      </form>  
    </section>
  </div>
</template>

<script>

export default {
  name: "Form",
  data(){
    return {
      username: '',
      errors: []
    }
  },
  methods: {
    search() {
      if (this.username) {
        this.$router.push({
        name: 'Results',
        query: {search: this.username}
        })
      }
      else {
        this.errors.push('Please enter a username.')
      }
    }
  },
};
</script>
