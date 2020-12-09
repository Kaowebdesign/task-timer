<template>
    <div>
        {{task.name}}
    </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object
    }
  }
}
</script>
