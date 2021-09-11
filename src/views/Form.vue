<template>
  <div>
    <section>
      <h1>Github user fetching</h1>
      <form action="#" @submit="search">
        <input type="text" name="search" placeholder="username">
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
    }
  },
  methods: {
    search() {
      this.$router.push({
        name: 'Results'
      })
    }
  }
};
</script>
