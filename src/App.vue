<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Weather</q-toolbar-title>
        <q-btn flat round icon="menu" @click="toggleDrawer"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above>
      <q-list>
        <q-item to="/">Home</q-item>
        <q-item to="/tugas1">Tugas 1</q-item>
        <q-item to="/tugas2">Tugas 2</q-item>
        <!-- add other navigation items... -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const drawer = ref(false);
    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };

    return {
      drawer,
      toggleDrawer,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
