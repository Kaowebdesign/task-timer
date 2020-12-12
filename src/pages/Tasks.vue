<template>
  <div>
    <div class="row items-center q-mt-md">
      <div class="col">
        <h4 class="text-h6 q-ma-none">All Tasks</h4>
      </div>
    </div>
    <task-list />
  </div>
</template>

<script>
import TaskList from 'src/components/TaskList.vue'

export default {
  name: 'Tasks',
  components: { TaskList }
}
</script>
