<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          TooDoo App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-primary">
      <q-tabs>
        <q-route-tab
          v-for="(nav, idx) in navs"
          :key="idx" clickable
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
        </q-tabs>
    </q-footer>

    <q-drawer
      breakpoint="767"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>

        <q-item clickable
          class="text-grey-5"
          exact
          v-for="(nav, idx) in navs"
          :key="idx"
          :to="nav.to"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label >{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      navs: [
        {
          label: "ToDo",
          icon: 'list',
          to: '/'
        },
        {
          label: "Settings",
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-router-link--exact-active {
  color: #fff !important;
}
</style>
