<template>
  <q-item clickable v-ripple
    @click="updateTask({ id: id, updates: { completed: !task.completed }})"
    class="taskCard"
    :class="!task.completed ? 'bg-white-1' : 'bg-grey-3'"
    >
    <q-item-section side>
      <q-checkbox
      :value="task.completed"
      class="no-pointer-events" />
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
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions(['updateTask']),
  }
};
</script>

<style lang="scss">

</style>
