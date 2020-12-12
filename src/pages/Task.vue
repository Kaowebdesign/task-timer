<template>
  <div class="flex flex-center">
    <task-section :task="task" />
  </div>
</template>

<script>
import TaskSection from 'src/components/TaskSection'

export default {
  name: 'Task',
  computed: {
    task () {
      return this.$store.getters['tasks/getTaskFromId'](this.$route.params.id)
    }
  },
  components: {
    TaskSection
  }
}
</script>
