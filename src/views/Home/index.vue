<template>
  <div class="home">
    <div :key="index" v-for="(item, index) in list">
      <Card
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :discountedPrice="item.discountedPrice"
        :isPriceDiscounted="item.isPriceDiscounted"
        :isInCart="item.isInCart"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      list: [
        {
          title: 'PRODUCT TITLE-1',
          description: 'Torino',
          price: 80,
          discountedPrice: 50,
          isPriceDiscounted: true,
          isInCart: false
        },
        {
          title: 'PRODUCT TITLE-2',
          description: 'Milan',
          price: 130,
          discountedPrice: 0,
          isPriceDiscounted: false,
          isInCart: true
        },
        {
          title: 'PRODUCT TITLE-3',
          description: 'Cambridge',
          price: 250,
          discountedPrice: 200,
          isPriceDiscounted: true,
          isInCart: false
        },
        {
          title: 'PRODUCT TITLE-4',
          description: 'Amsterdam',
          price: 100,
          discountedPrice: 0,
          isPriceDiscounted: false,
          isInCart: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.home {
  padding: 10px;

  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
  margin: 0 -10px;
}
</style>
