<template>
  <div class="flex flex-center">
    <task-list />
  </div>
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
