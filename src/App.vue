<template>
  <div class="app">
    <MasterHeader />
    <Container>
      <main class="main">
        <router-view />
      </main>
    </Container>
  </div>
</template>
<script>
import MasterHeader from '@/components/Header'
import Container from '@/components/Container'
export default {
  name: 'App',
  components: {
    MasterHeader,
    Container
  }
}
</script>
