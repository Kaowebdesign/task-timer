<template>
  <div>
    <div class="row items-center q-mt-md">
      <div class="col">
        <h4 class="text-h6 q-ma-none">Tasks</h4>
      </div>
      <div class="col flex justify-end">
        <router-link to="/tasks" class="color__grey null-link">See all</router-link>
      </div>
    </div>
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
