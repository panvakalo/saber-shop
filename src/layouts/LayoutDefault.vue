<template>
  <div class="full__width full__height display-flex display-flex__column">
    <app-header />
    <main class="display-flex">
      <div class="wrapper pt-l pb-l overflow-hidden bg__black ">
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
