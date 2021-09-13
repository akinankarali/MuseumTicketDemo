<template>
  <div class="home">
    <CustomText>Home</CustomText>
    <IconBag />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import IconBag from '@/assets/svg/bag.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    IconBag
  }
}
</script>

<style lang="scss" scope>
span {
  color: #{'rgb(var(--secondary))'};
}
</style>
