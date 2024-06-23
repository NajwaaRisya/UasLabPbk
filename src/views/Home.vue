<!-- src/views/Home.vue -->
<template>
    <q-page class="q-pa-md">
      <q-input filled v-model="city" label="City" @keyup.enter="getWeather"></q-input>
      <q-btn @click="getWeather">Search</q-btn>
      <div v-if="weather">
        <h3>Location: {{ weather.name }}</h3>
        <p>Temperature: {{ weather.main.temp }}°C</p>
        <p>Description: {{ weather.weather[0].description }}</p>
      </div>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Home',
    data() {
      return {
        city: 'Pekanbaru',
        weather: null,
      };
    },
    methods: {
      async getWeather() {
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
        this.weather = response.data;
      },
    },
    mounted() {
      this.getWeather();
    },
  };
  </script>
  