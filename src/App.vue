<template>
  <div>
    <!-- 안내창 -->
    <ModalPop />

    <div class="wrap">
      <!-- 상단 -->
      <HeaderView />
      <!-- 비주얼 -->
      <VisualView />
      <!-- 업무파트 -->
      <PartView />
      <!-- 새소식 -->
      <NewsView />
      <!-- 고객센터 -->
      <CsView />
      <!-- 소개 -->
      <AboutView />
      <!-- 하단  -->
      <FooterView />
    </div>
  </div>

</template>

<script>
  import ModalPop from '@/components/ModalPop.vue';
  import HeaderView from '@/components/HeaderView.vue';
  import VisualView from '@/components/VisualView.vue';
  import PartView from '@/components/PartView.vue';
  import NewsView from '@/components/NewsView.vue';
  import CsView from '@/components/CsView.vue';
  import AboutView from '@/components/AboutView.vue';
  import FooterView from '@/components/FooterView.vue';

  export default {
    name: 'App',
    components: {
      ModalPop,
      HeaderView,
      VisualView,
      PartView,
      NewsView,
      CsView,
      AboutView,
      FooterView,
    },

    setup() {
      return {
      }
    }
    
  }
</script>

<style>
  @charset "utf-8";

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.64px;
    color: #444;
  }

  /* 공통요소 */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    max-width: 1200px;
    margin: 0 auto;
  }


  .wrap {
    padding-top: 80px;
  }

  /* 내용별 Section */
</style>