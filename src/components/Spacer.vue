<template>
  <div :class="['spacer', size ? 'spacer--' + size : 'hero--64']"></div>
</template>

<script>
export default {
  name: 'Spacer',
  props: {
    size: String
  }
}
</script>
