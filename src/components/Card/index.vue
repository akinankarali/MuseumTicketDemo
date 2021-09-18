<template>
  <div class="card">
    <!-- image & header -->
    <div class="card-header">
      <figure class="card-image">
        <img :src="photo" alt="Rome" />
      </figure>
      <Favorite />
    </div>
    <div class="card-details">
      <!-- title -->
      <div class="card-title">
        <CustomText tag="h2" size="large">{{ title }}</CustomText>
      </div>
      <!-- description -->
      <div class="card-description">
        <CustomText tag="p">{{ description }}</CustomText>
      </div>
      <!-- price-->
      <div class="card-price">
        <CustomText
          size="large"
          :class="!isDiscount ? 'card-price' : 'card-price-striked'"
          >{{ price.formatted_value }}</CustomText
        >
        <CustomText
          size="large"
          class="card-price-discounted"
          v-if="isDiscount"
          >{{ retailPrice.formatted_value }}</CustomText
        >
      </div>
      <!-- add button-->
      <button class="card-button in-cart" type="submit" v-if="isInCart">
        IN CART
      </button>
      <button class="card-button" type="submit" v-else>ADD TO CART</button>
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
  data() {
    return {
      isDiscount: this.discounted > 0 ? true : false
    }
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
      type: Object
    },
    retailPrice: {
      type: Object
    },
    discounted: {
      type: Number,
      default: 0
    },
    isInCart: {
      type: Boolean
    },
    photo: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 500px;
  max-width: 370px;
  border-radius: 3px;
  background-color: #{'rgb(var(--w8))'};
  margin: 10px;

  .card-header {
    padding: 20px;
    position: relative;
    text-align: center;

    img {
      max-width: 340px;
      max-height: 500px;
    }
  }
  .card-details {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding: 10px 20px 20px;
    text-align: center;

    .card-title {
      padding-bottom: 10px;
      font-family: 'Lato-Bold', sans-serif;
      letter-spacing: 1.37px;
      text-transform: uppercase;
      h2 {
        overflow: hidden;
        white-space: break-spaces;
        text-overflow: ellipsis;
      }
    }
    .card-description {
      padding-bottom: 10px;

      line-height: 19px;
      letter-spacing: 0.43px;

      color: #{'rgb(var(--subtitle))'};
      p {
        overflow: hidden;
        white-space: break-spaces;
        text-overflow: ellipsis;
      }
    }
    .card-price {
      padding-bottom: 20px;

      font-family: 'Lato-Bold', sans-serif;
      font-size: 14px;
      letter-spacing: 2.33px;

      span {
        color: #{'rgb(var(--primary))'};
      }
      .card-price-discounted {
        color: #{'rgb(var(--discounted-color))'};
      }
      .card-price-striked {
        margin-right: 10px;
        text-decoration: line-through;
      }
    }
    .card-button {
      width: 100%;
      margin-top: auto;
      border: 1px solid #{'rgb(var(--secondary))'};
      border-radius: 100px;
      background-color: #{'rgb(var(--w8))'};
      padding: 13px;

      cursor: pointer;
      transition: 0.3s border, 0.3s color, 0.3s background-color;

      &:hover {
        border: 1px solid #{'rgb(var(--primary))'};
        color: #{'rgb(var(--w8))'};
        background-color: #{'rgb(var(--primary))'};
      }

      &.in-cart {
        pointer-events: none;
        background-color: #d9d9d9;
      }
    }
  }
}
</style>
