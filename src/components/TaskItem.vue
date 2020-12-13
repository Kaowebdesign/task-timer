<template>
  <q-slide-item @right="removeTask" class="task-item" right-color="red-13">
    <template v-slot:right>
      <q-icon name="delete" />
    </template>
    <q-item class="q-pa-md">
      <q-item-section avatar>
        <q-avatar text-color="white" :style="{'background':`${task.color}`}">
          {{ task.name.slice(0,1) }}
        </q-avatar>
      </q-item-section>
      <div class="column items-start">
        <div class="col">
          <q-item-section class="task-item__title">
            <router-link :to="`/tasks/${task.id}`" class="no-default-link">
              {{ task.name }}
            </router-link>
            </q-item-section>
        </div>
        <div class="col flex items-end q-mt-sm">
          <q-chip dense v-for="(tag, index) in task.tags" :key="index" :style="{'background':`${task.color}`}" class="task-item__tag" size="sm">
            {{ tag }}
          </q-chip>
        </div>
      </div>
      <div class="column">
        <q-chip outline square color="blue-grey-3" class="task-item__time" text-color="white" icon="alarm" :label="task.time" size="sm" />
      </div>
    </q-item>
  </q-slide-item>
</template>

<script>
import { DELETE_TASK } from 'src/store/tasks/actions'
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeTask () {
      this.$store.dispatch(`tasks/${DELETE_TASK}`, { id: this.task.id })
    }
  }
}
</script>
