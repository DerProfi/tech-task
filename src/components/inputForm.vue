<template>
  <div>
    <form @submit.prevent="emitEvent">
      <HdInput
        class="input"
        v-model="username"
        :required="true"
        type="text"
        name="search"
        label="Username"
        placeholder="Please enter a username."
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
import { HdButton, HdInput } from 'homeday-blocks';
import 'homeday-blocks/src/styles/main.scss';

export default {
  components: {
    HdButton,
    HdInput
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
form ::v-deep .input{
  width: 80%;
  margin: 0 auto;
  color: black;
}

</style>