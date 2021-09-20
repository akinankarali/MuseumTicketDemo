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
        :id="product.uuid"
      />
    </div>

    <VueJsPaginate
      :page-count="getPaginateCount"
      :prev-text="'<'"
      :next-text="'>'"
      :click-handler="paginateClickCallback"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :first-last-button="true"
      :first-button-text="'<<'"
      :last-button-text="'>>'"
    ></VueJsPaginate>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters, mapState, mapMutations } from 'vuex'
import VueJsPaginate from 'vuejs-paginate'

export default {
  name: 'Home',
  components: {
    Card,
    VueJsPaginate
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapGetters(['getProducts']),
    ...mapState(['search'], ['basketBagList']),
    ...mapMutations(['setProducts']),
    filteredProducts() {
      return this.getItems.filter((product) =>
        product?.title.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    getItems() {
      let start = (this.currentPage - 1) * this.perPage
      let end = this.currentPage * this.perPage
      return this.getProducts.slice(start, end)
    },
    getPaginateCount() {
      return Math.ceil(this.getProducts.length / this.perPage)
    }
  },
  methods: {
    paginateClickCallback(pageNum) {
      this.currentPage = Number(pageNum)
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
  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 0 auto;
    border-radius: 4px;
    padding-top: 20px;
  }
  .pagination > li {
    display: inline;
  }
  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .pagination > li > a:hover,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 3;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .pagination > .disabled > span,
  .pagination > .disabled > span:hover,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > a,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
  }
  .pagination-lg > li > a,
  .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
  }
  .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .pagination-sm > li > a,
  .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
  }
  .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}
</style>
