<template>
  <div class="wishlist">
    <CustomText tag="h1" size="xlarge">Wishlist</CustomText>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Wishlist',
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
