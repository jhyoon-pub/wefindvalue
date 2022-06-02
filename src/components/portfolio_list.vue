<template>
  <ul> 
    <router-link :to="`/sub/${nowIdx}`">
      <li v-for="(a, i) in portfolio" :key="i" @click="nowIdx = i;">
        <a href="#">
          <span>{{ portfolio[i].id }} </span>{{ portfolio[i].title }}
        </a>
        <img :src="portfolio[i].portImage" class="opacity"/>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Portfolio_list",
  data(){
    return{
      nowIdx : 0, 
    }
  },
  props: {
    portfolio: Array, 
  }
};
</script>

<style>
</style>