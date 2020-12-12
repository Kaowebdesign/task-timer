<template>
  <div class="flex flex-center">
      <task-create-form />
  </div>
</template>

<script>
import TaskCreateForm from 'src/components/TaskCreateForm.vue'

export default {
  components: { TaskCreateForm },
  name: 'CreateTask'
}
</script>
