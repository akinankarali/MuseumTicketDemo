<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">TUI</router-link>

      <form class="search">
        <input type="text" placeholder="Search" />
      </form>

      <nav class="navigation">
        <router-link to="/bag">
          <IconBag />
        </router-link>
        <router-link to="/wishlist">
          <IconWishlist />
        </router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import IconBag from '@/assets/svg/bag.svg'
import IconWishlist from '@/assets/svg/wishlist.svg'
import Container from '@/components/Container'
export default {
  name: 'MainHeader',
  components: {
    IconBag,
    IconWishlist,
    Container
  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  .header-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: var(--header-height);

    align-items: center;

    text-transform: uppercase;
    background-color: #ffffff;
    border-bottom: 1px solid #{'rgb(var(--border-color))'};
  }
  .logo {
    font-size: 1.6rem;
    font-weight: bold;
    margin-right: 20px;
  }
  .search {
    text-align: center;

    input {
      width: 180px;
      height: 28px;
      border: 1px solid #{'rgb(var(--border-color))'};
      background-color: #{'rgb(var(--bg-color))'};
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      margin-left: 20px;
    }
  }
}
</style>
