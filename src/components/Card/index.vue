<template>
  <div class="product-item">
    <div class="card">
      <!-- image & header -->
      <div class="card-header">
        <figure class="card-image">
          <img :src="photo" alt="Rome" />
        </figure>
        <Favorite :id="id" />
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
        <button class="card-button in-cart" type="button" v-if="isInCart">
          IN CART
        </button>
        <button class="card-button" type="button" @click="addCart" v-else>
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CustomText from '@/components/CustomText'
import Favorite from '@/components/Favorite'
import { mapGetters } from 'vuex'

export default {
  name: 'Card',
  components: {
    CustomText,
    Favorite
  },
  data() {
    return {
      isDiscount: this.discounted > 0 ? true : false,
      quantity: 0,
      isInCart: false,
      dublicatedItem: []
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
    photo: {
      type: String,
      default: ''
    },
    id: {
      type: String
    }
  },
  methods: {
    ...mapGetters(['getProducts']),

    addCart() {
      this.id ? this.$store.state.basketBagList.push(this.id) : []
      this.$store.state.basketBagList.map((item) => {
        this.$store.state.products.map((product) => {
          item == product.uuid
            ? (this.isInCart = false)
            : (this.isInCart = true)
        })
      })
      console.log(
        '$store.state.basketBagList: ',
        this.$store.state.basketBagList
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.product-item {
  padding: 10px;
  flex: 1 0 30%;
  max-width: 33.3333%;
  min-width: 340px;
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 3px;
    background-color: #{'rgb(var(--w8))'};
    margin: 10px;

    .card-header {
      padding: 20px;
      position: relative;
      text-align: center;

      img {
        max-width: 100%;
        height: auto;
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
          white-space: break-spaces;
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
}
</style>
