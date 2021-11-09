<template>
  <div>
    <form @submit.prevent="emitEvent">
      <input
        type="text"
        name="search"
        placeholder="username"
        v-model="username"
      />
      <button type="submit">Search</button>
    </form>
  </div>
</template> 

<script>
export default {
  data(){
    return{
      username: "",
    }
  },
  methods: {
    emitEvent() {
      this.$emit('submit', this.username)
    }
  }
}
</script>

<style>

</style>