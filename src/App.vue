<template>
  <div class="app">
    <Container>
      <MasterHeader />
      <main class="main">
        <router-view />
      </main>
      <footer>
        <CustomText tag="p">Footer</CustomText>
      </footer>
    </Container>
  </div>
</template>
<script>
import MasterHeader from '@/components/Header'
import Container from '@/components/Container'
import CustomText from '@/components/CustomText'
export default {
  name: 'App',
  components: {
    MasterHeader,
    Container,
    CustomText
  }
}
</script>
<style lang="scss" scoped>
footer {
  p {
    font-family: 'Lato-Bold', sans-serif;
    letter-spacing: 1.37px;
    padding: 0 40px;
  }
}
</style>
