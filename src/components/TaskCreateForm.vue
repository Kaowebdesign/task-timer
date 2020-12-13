<template>
    <q-card class="task-section no-shadow">
      <q-card-section>
        <div class="column">
          <div class="col">
              <div class="row items-center q-mb-xl">
                <div class="col-2">
                  <q-btn flat round color="black" icon="keyboard_backspace" @click="$router.go(-1)"/>
                </div>
                <div class="col">
                  <h4 class="text-h6 q-ma-none">Create new task</h4>
                </div>
              </div>
              <q-form
                @submit.prevent="addTask"
                @reset="resetData"
                class="q-gutter-md">
                  <q-input
                  v-model="name"
                  label="Name *"
                  color="deep-purple-10"
                  class="q-mb-xl"
                  lazy-rules
                  :rules="[ val => val && val.length > 10 || 'Please type something ( > 10 characters).']"
                  />
                  <div style="min-width: 250px; max-width: 100%" class="q-mb-xl">
                    <q-select
                      v-model="selectedTags"
                      multiple
                      :options="tags"
                      use-chips
                      stack-label
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Please choose category or categories.']"
                      color="deep-purple-10"
                      label="Task category"
                    />
                  </div>
                  <q-input
                    v-model="time"
                    type="time"
                    color="deep-purple-10"
                    hint="Expected duration"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please choose duration of your task.']"
                    class="q-mb-xl"/>
                  <div class="row q-pb-xl">
                    <div class="col flex justify-end">
                      <q-btn label="Reset" type="reset" color="deep-purple-10" flat class="q-ml-sm" />
                      <q-btn outline rounded label="Create" type="submit" color="deep-purple-10"/>
                    </div>
                  </div>
              </q-form>
            </div>
          </div>
      </q-card-section>
    </q-card>
</template>
<script>
import { ADD_TASK } from 'src/store/tasks/actions'
export default {
  name: 'TaskCreateForm',
  data () {
    return {
      name: '',
      time: '00:00',
      selectedTags: [],
      tags: ['Working', 'Developing', 'Homework', 'Sport', 'Cooking']
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch(`tasks/${ADD_TASK}`, { name: this.name, tags: this.selectedTags, time: this.time })
        .then((id) => {
          this.$router.push({ path: `tasks/${id}` })
        })
    },
    resetData () {
      this.name = ''
      this.time = ''
      this.selectedTags = []
    }
  }
}
</script>
