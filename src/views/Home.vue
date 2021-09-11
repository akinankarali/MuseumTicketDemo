<template>
  <div class="home">
    <CustomText>Home</CustomText>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<style lang="scss" scope>
span {
  color: #{'rgb(var(--discounted-color))'};
}
</style>
