<template>
  <div class="example-item">
    <div class="lightsaber">
      <label for="yoda-example"></label>
      <input id="yoda-example" type="checkbox" checked="checked">
      <div class="switch"></div>
      <div class="plasma yoda"></div>
    </div>
    <h3>Yoda</h3>
  </div>
</template>

<script>
export default {
  name: 'saberItem',
  props: {
    saber: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      lscolor: 'ls' + this.saber.crystal.color
    }
  }
}
</script>

<style lang="scss">
  .example-item {
    float: left;
    width: 25%;
    padding-top: 325px;
  }
</style>
