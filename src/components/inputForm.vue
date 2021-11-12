<template>
  <div>
    <form @submit.prevent="emitEvent">
      <input
        type="text"
        name="search"
        placeholder="username"
        v-model="username"
      />
      <HdButton
      type="submit"
      modifier="primary"
      :isInDarkBackground="false"
      iconSrc=""
      :disabled="false"
      >
      Search
    </HdButton>
    </form>
  </div>
</template> 

<script>
import { HdButton } from 'homeday-blocks';
import 'homeday-blocks/src/styles/main.scss';

export default {
  components: {
    HdButton
  },
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