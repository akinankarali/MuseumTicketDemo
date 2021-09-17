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
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  right: 5px;

  button {
    border: 1px solid #{'rgb(var(--secondary))'};
    background-color: #{'rgb(var(--w8))'};
    padding: 7px;
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
