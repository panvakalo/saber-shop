<template>
  <div class="full__width full__height">
    <app-header />
    <main>
      <div class="wrapper pt-xl pb-xl overflow-hidden bg__black">
        <slot></slot>
      </div>
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
