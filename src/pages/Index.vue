<template>
  <q-page padding>
    <q-list>
      <q-item clickable v-ripple
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        class="taskCard"
        :class="!task.completed ? 'bg-white-1' : 'bg-grey-3'"
        >
        <q-item-section side>
          <q-checkbox v-model="task.completed"/>
        </q-item-section>
        <q-item-section>
          <q-item-label
            :class="{ 'text-strike' : task.completed }"
          >
          {{ task.name }}
        </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <div class="row">
          <q-icon class="q-mr-xs" name="event" size="18px" />
          <q-item-label caption class="q-mt-xs">
            {{ task.dueDate }}
          </q-item-label>
        </div>
        <q-item-label caption>
          <small>{{ task.dueTime }}</small>
        </q-item-label>
      </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          completed: false,
          dueDate: '01-05-2021',
          dueTime: '00:00'
        },
        {
          id: 2,
          name: 'Task 2',
          completed: false,
          dueDate: '02-05-2021',
          dueTime: '23:00'
        },
        {
          id: 3,
          name: 'Task 3',
          completed: false,
          dueDate: '03-05-2021',
          dueTime: '18:00'
        }
      ]
    }
  },
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
