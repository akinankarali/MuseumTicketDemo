<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">
        <CustomText tag="h1" size="xlarge">TUI</CustomText>
      </router-link>

      <form class="search">
        <input
          type="text"
          v-model.trim="search"
          :input="setSearchInput()"
          placeholder="Search"
        />
      </form>

      <Basket />
    </Container>
  </header>
</template>
<script>
import Container from '@/components/Container'
import CustomText from '@/components/CustomText'
import Basket from '@/components/Basket'

export default {
  name: 'MainHeader',
  components: {
    Container,
    CustomText,
    Basket
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    setSearchInput() {
      this.$store.commit('setSearch', this.search)
    }
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

  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: var(--header-height);

    align-items: center;

    text-transform: uppercase;
    background-color: #{'rgb(var(--w8))'};
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
}
</style>
