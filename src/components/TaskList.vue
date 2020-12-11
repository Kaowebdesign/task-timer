<template>
  <q-list bordered separator class="task-list">
    <task-item v-for="(task, index) in tasks " :key="'task'+index" :task="task" />
  </q-list>
</template>

<script>
import TaskItem from './TaskItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks
    })
  }
}
</script>
