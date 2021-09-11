<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', // small:8, normal:12, medium:13, large:14, xlarge:20
      validator: function (value) {
        return (
          ['small', 'normal', 'medium', 'large', 'xlarge'].indexOf(value) !== -1
        )
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.small {
  font-size: 8px;
}
.normal {
  font-size: 12px;
}
.medium {
  font-size: 13px;
}
.large {
  font-size: 14px;
}
.xlarge {
  font-size: 20px;
}
</style>
