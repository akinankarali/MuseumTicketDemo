<template>
  <div class="home">
    <div class="product-items">
      <Card
        v-for="product in filteredProducts"
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
import { mapGetters, mapState } from 'vuex'

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
    ...mapState(['search']),
    filteredProducts() {
      return this.getProducts.filter((product) =>
        product?.title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    setProductList() {
      this.productsList = this.getProducts
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

  .product-items {
    justify-content: center;

    display: flex;
    flex: 0 1 auto;
    flex-flow: row wrap;
    margin: 0 -10px;
  }
}
</style>
