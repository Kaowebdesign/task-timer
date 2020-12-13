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
                    v-model="timerFill"
                    size="150px"
                    :thickness="0.2"
                    color="deep-purple-10"
                    center-color="transparent"
                    track-color="indigo-2">
                        <!-- <q-icon name="play_arrow" color="deep-purple-10" /> -->
                        <h4 class="text-h6 color__black">{{ hour }}:{{ min }}:{{ sec }}</h4>
                </q-knob>
              </div>
          </div>
          <div class="row q-pb-xl" v-if="!finish">
              <div class="col flex justify-center">
                <q-btn v-if="stop" round color="deep-purple-10" icon="play_arrow" @click="start"/>
                <q-btn v-else round color="deep-purple-10" icon="pause" @click="startAndStop"/>
              </div>
              <div class="col flex justify-center">
                <q-btn round color="deep-purple-10" icon="stop" @click="stopTimer"/>
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
      hour: '00',
      min: '00',
      sec: '00',
      stop: true,
      intervalCounter: 0,
      currentTime: 0,
      finish: false,
      timer: null,
      timerFill: null
    }
  },
  methods: {
    start () {
      const self = this
      self.stop = false
      var interval = 10
      this.timer = setInterval(function () {
        self.intervalCounter += interval
        if (!self.stop) {
          if ((self.intervalCounter % 1000) === 0) {
            self.currentTime += 1000
            console.log(self.currentTime)
            let appendHour = self.currentTime / (1000 * 60 * 60) | 0
            let appendMinute = self.currentTime % (1000 * 60 * 60) / (1000 * 60) | 0
            let appendSecond = self.currentTime % (1000 * 60) / 1000 | 0
            appendHour = appendHour < 10 ? '0' + appendHour : appendHour
            appendMinute = appendMinute < 10 ? '0' + appendMinute : appendMinute
            appendSecond = appendSecond < 10 ? '0' + appendSecond : appendSecond
            self.hour = appendHour
            self.min = appendMinute
            self.sec = appendSecond
          }
        }
      }, 10)
    },
    startAndStop () {
      this.stop = !this.stop
      clearInterval(this.timer)
    },
    stopTimer () {
      this.stop = !this.stop
      this.finish = true
      clearInterval(this.timer)
    }
  }
}
</script>
