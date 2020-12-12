<template>
   <q-card class="task-section no-shadow">
      <q-card-section>
          <div class="row">
              <div class="col-2">
                <q-btn flat round color="black" icon="keyboard_backspace" @click="$router.go(-1)"/>
              </div>
              <div class="col">
                <div class="column items-start">
                    <div class="col">
                        <h4 class="text-h6 q-ma-none">{{ task.name }}</h4>
                    </div>
                    <div class="col flex items-end q-mt-sm">
                        <q-chip dense v-for="(tag, index) in task.tags" :key="index" :style="{'background':`${task.color}`}" class="task-item__tag" size="sm">
                            {{ tag }}
                        </q-chip>
                    </div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col flex justify-end q-pt-xl">
                  <q-chip outline square color="blue-grey-3" text-color="white" icon="alarm" :label="task.time" size="sm" />
              </div>
          </div>
          <div class="row items-center">
              <div class="col flex justify-center q-pb-xl">
                <q-knob
                    show-value
                    class="text-white q-ma-md"
                    v-model="timer"
                    size="150px"
                    :thickness="0.2"
                    color="deep-purple-10"
                    center-color="transparent"
                    track-color="indigo-2">
                        <!-- <q-icon name="play_arrow" color="deep-purple-10" /> -->
                        <h4 class="text-h6 color__black">00:00:00</h4>
                </q-knob>
              </div>
          </div>
          <div class="row q-pb-xl">
              <div class="col flex justify-center">
                <q-btn round color="deep-purple-10" icon="play_arrow" />
              </div>
              <div class="col flex justify-center">
                <q-btn round color="deep-purple-10" icon="stop" />
              </div>
          </div>
      </q-card-section>
    </q-card>
</template>
<script>
export default {
  name: 'TaskSection',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      timer: 0
    }
  }
}
</script>
