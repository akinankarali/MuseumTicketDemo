<template>
  <div class="card">
    <!-- image -->
    <div class="card-header">
      <Favorite />
      <figure class="card-image">
        <img src="../../assets/images/activity_image.jpeg" alt="Rome" />
      </figure>
    </div>

    <!-- title -->
    <div class="card-title">
      <CustomText tag="p" size="xlarge">{{ title }}</CustomText>
    </div>
    <!-- description -->
    <div class="card-description">
      <CustomText tag="p">{{ description }}</CustomText>
    </div>
    <!-- price-->
    <div class="card-price">
      <CustomText>$ {{ price }}</CustomText>
    </div>
    <!-- add button-->
    <div class="card-button">
      <button type="submit">ADD TO CART</button>
    </div>
  </div>
</template>
<script>
import CustomText from '@/components/CustomText'
import Favorite from '@/components/Favorite'
export default {
  name: 'Card',
  components: {
    CustomText,
    Favorite
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  border-radius: 3px;
  background-color: #{'rgb(var(--w8))'};
  border: 1px solid #{'rgb(var(--border-color))'};
}
</style>
