<template>
  <div class="flex flex-center">
      {{ task.name }}
  </div>
</template>

<script>

export default {
  name: 'Task',
  computed: {
    task () {
      return this.$store.getters['tasks/getTaskFromId'](this.$route.params.id)
    }
  }
}
</script>
