<template>
    <q-card class="task-section no-shadow">
      <q-card-section>
        <div class="column">
          <div class="col">
              <q-form
                @submit.prevent="addTask"
                @reset="resetData"
                class="q-gutter-md">
                  <q-input rounded outlined v-model="name" label="Name" />
                  <div style="min-width: 250px; max-width: 100%">
                    <q-select
                      rounded
                      outlined
                      v-model="selectedTags"
                      multiple
                      :options="tags"
                      use-chips
                      stack-label
                      label="Multiple selection"
                    />
                  </div>
                  <q-btn label="Submit" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </q-form>
            </div>
          </div>
      </q-card-section>
    </q-card>
</template>
<script>
export default {
  name: 'TaskCreateForm',
  data () {
    return {
      name: '',
      selectedTags: [],
      tags: ['Working', 'Developing', 'Homework', 'Sport', 'Cooking']
    }
  },
  methods: {
    addTask () {
      this.$store.dispatch('tasks/ADD_TASK', { name: this.name, tags: this.selectedTags })
    },
    resetData () {
      console.log('reset')
    }
  }
}
</script>
