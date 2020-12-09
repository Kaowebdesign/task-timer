<template>
 <q-layout class="main q-pa-md bg-grey-2">
    <div class="column">
      <div class="col">
        <router-view />
      </div>
      <div class="col">
        <nav-bar></nav-bar>
      </div>
    </div>
 </q-layout>
</template>

<script>
import NavBar from 'src/components/NavBar.vue'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  components: {
    NavBar
  }
}
</script>
