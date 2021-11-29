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
<<<<<<< HEAD
      this.$emit('submit', this.username)
    }
  }
}
=======
      this.$emit("submit", { username: this.username });
    },
  },
};
>>>>>>> blocks
</script>

<style lang="scss" scoped>
.input{
  color: black;
  width: 70%;
  margin: 0 auto;
}
</style>
