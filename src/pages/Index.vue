<template>
  <q-page padding>
    <q-list>
      <Task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

import Task from '../components/Tasks/Task.vue'

export default defineComponent({
  name: 'PageIndex',
  computed: {
  ...mapState(["tasks"])
  },
  components: {
    Task
  }
});
</script>

<style>
  .taskCard {
    border: 0.5px solid #e7e7e7;
    border-radius: 5px;
    margin: 10px 0px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.15);
  }
</style>
