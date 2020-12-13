<template>
  <q-list bordered separator class="task-list">
    <template v-if="tasks.length">
      <task-item v-for="(task, index) in tasks " :key="'task'+index" :task="task" />
    </template>
    <template v-else>
      <div class="row q-pa-xl">
        <div class="col column items-center">
          <q-icon name="speaker_notes_off" size="xl" color="grey-6"/>
          <span>No Tasks</span>
        </div>
      </div>
    </template>
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
