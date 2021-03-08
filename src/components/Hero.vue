<template>
  <section
    :class="['hero', video ? 'hero--video' : 'hero--content']"
    :style="{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.20), transparent 2px, rgba(0,0,0,0.20) 4px, transparent 4px ), url(' + image + ')' }"
  >
    <video
      v-if="video && image"
      autoplay=""
      :data-bgvideo="image"
      loop=""
      muted=""
      style="width:100%;"
    >
      <source :src="image" type="video/mp4" />
    </video>
    <div class="hero--video__wrapper">
      <div>
        <h1 class="hero__title hero--large__title">{{ title }}</h1>
      </div>
    </div>
    <button
      v-if="video"
      class="o-btn"
      style="position: absolute; bottom: 3rem; right: 5rem; z-index: 1; padding: 1rem;"
    >
      <span class="sr-only">
        Pause Video
      </span>
      <svg height="32" width="32" fill="white">
        <use xlink:href="#xu-play"></use>
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    image: String,
    video: String
  }
}
</script>

<style scoped lang="scss">
.hero {
  background-image: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.2),
      transparent 2px,
      rgba(0, 0, 0, 0.2) 4px,
      transparent 4px
    ),
    var(--hero-background);
}
</style>
