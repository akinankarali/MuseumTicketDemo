<template>
  <div class="card">
    <!-- image & header -->
    <div class="card-header">
      <figure class="card-image">
        <img src="../../assets/images/activity_image.jpeg" alt="Rome" />
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
        <CustomText size="large" class="card-price-striked"
          >${{ price }}</CustomText
        >
        <CustomText size="large" class="card-price-discounted"
          >${{ price }}</CustomText
        >
      </div>
      <!-- add button-->
      <button class="card-button" type="submit">ADD TO CART</button>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 3px;
  background-color: #{'rgb(var(--w8))'};

  .card-header {
    padding: 20px 30px;
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
    }
    .card-description {
      padding-bottom: 10px;

      line-height: 19px;
      letter-spacing: 0.43px;

      color: #{'rgb(var(--subtitle))'};
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
    }
  }
}
</style>
