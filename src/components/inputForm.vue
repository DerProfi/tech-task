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
        class="button"
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
import { HdButton, HdInput } from "homeday-blocks";
import "homeday-blocks/src/styles/main.scss";

export default {
  components: {
    HdButton,
    HdInput,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    emitEvent() {
      this.$emit("submit", this.username);
    },
  },
};
</script>

<style lang="scss" scoped>
.button{
  display: block;
  margin: 0 auto;
}
</style>
