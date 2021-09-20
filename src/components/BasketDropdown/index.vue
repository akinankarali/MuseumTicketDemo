<template>
  <div class="basket-dropdown" v-if="basketBagList.length > 0">
    <div class="item" v-for="(item, index) in basketBagList" :key="index">
      <div v-for="product in getProducts" :key="product.uuid">
        <div v-if="item === product.uuid" class="item-wrapper">
          <!-- image -->
          <div class="item-image">
            <figure class="image">
              <img :src="product.cover_image_url" alt="Rome" />
            </figure>
          </div>
          <!-- title & price -->
          <div class="item-detail">
            <div class="item-title">
              <CustomText tag="h3" size="large">{{ product.title }}</CustomText>
            </div>
            <div class="item-price">
              <CustomText tag="p"
                >{{ itemCount }} X
                {{ product.retail_price.formatted_value }}</CustomText
              >
            </div>

            <div class="item-add-subtract">
              <button class="item-subtract" type="submit">-</button>
              <button class="item-add" type="submit">+</button>
            </div>
          </div>
          <!-- remove button -->
          <button class="item-remove" type="button" @click="removeItem(index)">
            <IconCloseButton />
          </button>
        </div>
      </div>
    </div>
    <div class="basket-dropdown-subtotal">
      <div class="basket-dropdown-subtotal-title">
        <CustomText type="h4">Cart Subtotal: </CustomText>
      </div>
      <div class="basket-dropdown-subtotal-price">
        <CustomText>$ {{ calculateTotal }}</CustomText>
      </div>
    </div>
  </div>
</template>
<script>
import CustomText from '@/components/CustomText'
import IconCloseButton from '@/assets/svg/cancel.svg'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BasketDropdown',
  components: {
    CustomText,
    IconCloseButton
  },
  computed: {
    ...mapGetters(['getProducts']),
    ...mapState(['basketBagList', 'basketWishList', 'itemCount']),
    calculateTotal() {
      let result = this.getProducts.filter((product) =>
        this.basketBagList.some((item) => product.uuid === item)
      )
      let total = 0
      result.map((item) => (total += item?.retail_price?.value))
      this.$emit('totalPrice', total)
      return total
    }
  },
  methods: {
    removeItem(index) {
      this.basketBagList.splice(index, 1)
      if (this.$store.state.itemCount > 1) {
        this.$store.state.itemCount--
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basket-dropdown {
  background-color: #{'rgb(var(--w8))'};
  height: 300px;
  width: 250px;
  border: 1px solid #{'rgb(var(--secondary))'};
  position: absolute;
  transition: 0.5s all;
  transform: scale(0);
  transform-origin: 100% 0%;
  top: 2rem;
  right: 1rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #{'rgb(var(--border-color))'};
    &-image {
      height: 75px;
      width: 75px;
      padding-right: 4px;
    }
    .item-wrapper {
      display: flex;
    }
    &-detail {
      display: flex;
      align-items: baseline;
      flex-direction: column;
      justify-content: space-evenly;
      margin-right: 24px;
      .item-title {
        h3 {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 120px;
        }
      }
    }
    &-add-subtract {
      button {
        padding: 4px;
      }
    }
    &-remove {
      width: 10px;
      height: 10px;
      margin-top: 4px;
      margin-right: 4px;
    }
  }
  &-subtotal {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
    &-title {
      color: #{'rgb(var(--subtitle))'};
    }
    &-price {
      color: #{'rgb(var(--primary))'};
    }
  }
}
</style>
