<template>
  <div class="home">
    <div class="product-item">
      <Card
        v-for="product in showProducts"
        :key="product.uuid"
        :title="product.title"
        :description="product.description"
        :photo="product.cover_image_url"
        :price="product.original_retail_price"
        :discounted="product.discount"
        :retailPrice="product.retail_price"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Card
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapGetters(['getProducts']),
    showProducts() {
      return this.getProducts.data
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

  .product-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
