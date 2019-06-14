<template>
  <div class="full__width full__height">
    <app-header />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppHeader from '../components/common/header'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader
  }
}
</script>
