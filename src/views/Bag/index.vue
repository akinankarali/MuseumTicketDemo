<template>
  <div class="bag">
    <CustomText tag="h1" size="xlarge">BAG</CustomText>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Bag',
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
