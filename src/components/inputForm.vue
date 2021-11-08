<template>
  <div>
    <form action="#" @submit="emitEvent" v-on:submit.prevent>
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
      this.$emit('submit', {username: this.username})
    }
  }
}
</script>

<style>

</style>