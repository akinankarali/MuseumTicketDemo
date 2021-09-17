<template>
  <div class="home">
    <Card title="AAA" description="BBB" price="130" />
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style lang="scss" scope>
.home {
  padding: 10px;
}
</style>
