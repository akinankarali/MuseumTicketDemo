<template>
  <div class="basket">
    <div class="basket-bag">
      <div class="basket-price">
        <CustomText tag="p" size="large">$210</CustomText>
      </div>
      <IconBag />
      <span class="basket-counter">10</span>
    </div>
    <div class="basket-wishlist">
      <IconWishlist />
      <span class="basket-counter">5</span>
    </div>
  </div>
</template>
<script>
import IconBag from '@/assets/svg/bag.svg'
import IconWishlist from '@/assets/svg/wishlist.svg'
import CustomText from '@/components/CustomText'

export default {
  name: 'Basket',
  components: {
    IconBag,
    IconWishlist,
    CustomText
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
    color: #ffffff;
    background-color: #358ed7;
  }
}
</style>
