<template>
  <div id="wrap">
    <div class="container">
      <header>
        <div class="head center">
          <h1 class="sr-only">위파인밸류 웹에이전시</h1>
          <div class="main">
            Create the <br />
            <span class="s-font">brand</span> more <br />valuable
            <p>
              우리는 <span class="f-font">Creative</span>와
              <span class="f-font">Technology</span>를 통해 <br />
              브랜드를 더 가치있게 변화시킵니다.
            </p>
          </div>
        </div>
      </header>
      <section>
        <div class="portfolio_list">
          <portfolio_list :portfolio="portfolio" @click="scrollTop()"/>
            <transition name ="fade">
              <router-view :portfolio="portfolio"> </router-view>
            </transition>
        </div>
        <div class="about">
          <div class="txt center">
            <span class="OUR-CULTURE"> OUR CULTURE </span>
            <h1 class="No-finishied-work">No finishied work</h1>
            <p class="fz18">
              위파인밸류는 완성이 없다고 이야기 합니다. <br />
              완성에 가깝게 노력할 뿐이죠. '왜?'라는 질문과 수정,보완을 끊임없이
              하는 사람들이 모인 조직입니다. <br />
              기획의도가 없는 예쁘기만 한 디자인은 지양합니다.
            </p>
            <div class="more">READ MORE</div>
          </div>
        </div>
      </section>
      <footer>
        <div class="contact center">
          <h2>Contact</h2>
          <ul class="s-font">
            <li><a mailto="" href="">WORK WITH US</a>wefindvalue@gmail.com</li>
            <li><a href="">ABOUT US</a>Who we are</li>
            <li><a href="">SERVICE</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import data from "./assets/data.js";
import portfolio_list from "./components/portfolio_list";  

export default {
  name: "App",
  components: {
    portfolio_list,
  },
  data() {
    return {
      portfolio: data,
    };
  },
  methods : {
    scrollTop(){
      var location = document.querySelector("article").offsetTop;
      console.log(location);
       window.scrollTo({top:location, left:0, behavior:'auto'});
    }
  }
};
</script>

<style lang="scss">
@import "./assets/style";
@import "./assets/reset.css";
</style>
