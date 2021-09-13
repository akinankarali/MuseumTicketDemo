<template>
  <div class="favorite">
    <button>
      <IconWishlist />
    </button>
  </div>
</template>

<script>
import IconWishlist from '@/assets/svg/wishlist.svg'
export default {
  name: 'Favorite',
  components: {
    IconWishlist
  }
}
</script>

<style lang="scss" scoped>
.favorite {
  button {
    border: 1px solid #{'rgb(var(--secondary))'};
    padding: 6px;
    border-radius: 999px;
    display: inline-flex;
    transition: border 0.5s;

    svg path {
      fill: #{'rgb(var(--secondary))'};
      transition: fill 0.5s;
    }
    &:hover {
      border: 1px solid #{'rgb(var(--primary))'};

      svg path {
        fill: #{'rgb(var(--primary))'} !important;
      }
    }
  }
}
</style>
