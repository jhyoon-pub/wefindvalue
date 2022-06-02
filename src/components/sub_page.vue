<template>
  <article>
    <div class="container"> 
      <h1 class="sr-only">위파인밸류 웹에이전시</h1>
      <div class="subTxt">{{ portfolio[$route.params.id].title }}</div>
      <h2>{{ portfolio[$route.params.id].mainTxt }}</h2>
      <p>{{ portfolio[$route.params.id].mainDscp }}</p>
      <img
        :src="`${portfolio[$route.params.id].portTop}`"
        alt="웹사이트디자인"
      />
    </div>

    <div class="portSection_02" :style="{ backgroundImage : `url(${portfolio[$route.params.id].subImage})`}">
      <a target="_blank" class="sr-only" :href="`${portfolio[$route.params.id].anchor}`">사이트로 이동</a>
      <img src="http://wefindvalue.com/images/vue_data/arrow.png" alt="arrow" />
    </div>
    <div class="portSection_03">
      <div class="content">
        <p>{{ portfolio[$route.params.id].subTxt }}</p>
        <img
          :src="`${portfolio[$route.params.id].portImage}`"
          alt="웹사이트디자인"
        />
        <div class="frame" >
          <span>{{ portfolio[$route.params.id].day }}</span>
          <p>{{ portfolio[$route.params.id].subDscp }}</p>  
        </div>
      </div>
    </div>

  </article>
</template>

<script>
export default {
  name: "portfolio_detail",
  props: {
    portfolio: Array,
  },
};
</script>

<style>
</style>