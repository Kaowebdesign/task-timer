<template>
  <q-page class="flex flex-center">
    <task-list/>
  </q-page>
</template>

<script>
import TaskList from 'src/components/TaskList'

export default {
  name: 'PageIndex',
  components: {
    TaskList
  }
}
</script>
