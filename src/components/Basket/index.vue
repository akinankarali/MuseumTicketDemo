<template>
  <div class="basket">
    <div class="basket-bag">
      <div class="basket-price">
        <CustomText tag="p" size="large">$ {{ calculateTotal }}</CustomText>
      </div>
      <IconBag />
      <span class="basket-counter">{{ basketBagList.length }}</span>
      <BasketDropdown />
    </div>

    <div class="basket-wishlist">
      <IconWishlist />
      <span class="basket-counter">{{ basketWishList.length }}</span>
      <BasketWishlistDropdown />
    </div>
  </div>
</template>
<script>
import IconBag from '@/assets/svg/bag.svg'
import IconWishlist from '@/assets/svg/wishlist.svg'
import CustomText from '@/components/CustomText'
import BasketDropdown from '@/components/BasketDropdown'
import BasketWishlistDropdown from '@/components/BasketWishlistDropdown'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Basket',
  components: {
    IconBag,
    IconWishlist,
    CustomText,
    BasketDropdown,
    BasketWishlistDropdown
  },
  computed: {
    ...mapGetters(['getProducts']),
    ...mapState(['basketBagList', 'basketWishList']),
    calculateTotal() {
      let result = this.getProducts.filter((product) =>
        this.basketBagList.some((item) => product.uuid === item)
      )
      let total = 0
      result.map((item) => (total += item?.retail_price?.value))
      this.$emit('totalPrice', total)
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
.basket {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    margin-left: 20px;
  }

  .basket-bag,
  .basket-wishlist {
    display: flex;
    align-items: flex-end;
    height: 25px;
  }

  .basket-bag {
    float: right;
    text-align: right;
    position: relative;
    &:hover > .basket-dropdown {
      transform: scale(1);
    }
    svg {
      margin-left: 5px !important;
    }
  }
  .basket-counter {
    width: 13px;
    height: 13px;
    margin-left: -1px;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 8px;
    text-align: center;
    border-radius: 50%;
    color: #{'rgb(var(--w8))'};
    background-color: #{'rgb(var(--basket-counter))'};
  }
  .basket-wishlist {
    position: relative;

    &:hover > .basket-dropdown {
      transform: scale(1);
    }
  }
}
</style>
