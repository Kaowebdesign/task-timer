<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { LOAD_TASKS } from 'src/store/tasks/actions'
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch(`tasks/${LOAD_TASKS}`)
  }
}
</script>
