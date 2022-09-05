<template>
  <section class="news">
    <div class="inner clearfix">

      <div class="news-box">
        <h3>공지사항</h3>
        <ul class="news-list">
          <li v-for="(item, index) in ntdata" v-bind:key="index">

            <a v-bind:href="item.url"><span>{{item.title}}</span></a>
          </li>
        </ul>
      </div>

      <div class="news-box">
        <h3>보도자료</h3>
        <ul class="news-list">
          <li v-for="(item, index) in nsdata" v-bind:key="index">

            <a v-bind:href="item.url"><span>{{item.title}}</span></a>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
import {
    computed
  } from 'vue';
import { useStore } from 'vuex';

  export default {
    setup() {

      const store = useStore();

      const ntdata = computed( () => store.state.noticeData);
      const nsdata = computed( () => store.state.newsData);

      store.dispatch('fetchNews');
      store.dispatch('fetchNotice');

      return {
        ntdata,
        nsdata
      }

    }
  }
</script>

<style>
  /* 새소식 */
  .news {
    position: relative;
  }

  .news::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: #ed1c24;
  }

  .news::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: #58595b;
  }

  .news .inner {
    z-index: 9;
  }

  .news-box {
    width: 50%;
    float: left;
    padding: 55px 0;
  }

  .news-box:first-child {
    padding-right: 110px;
  }

  .news-box:last-child {
    padding-left: 110px;
  }


  .news-box h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 300;
    margin-bottom: 45px;
  }

  .news-list li {
    padding: 25px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }

  .news-list li:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .news-list li a {
    position: relative;
    display: block;
  }

  .news-list li a::after {
    content: '';
    position: absolute;
    right: 0;
    transform: translateX(-50%);
    top: 0;
    width: 48px;
    height: 23px;
    background: url('@/assets/images/bg_common.png') no-repeat;
    background-position: 0px -49px;
  }

  .news-list li a span {

    display: inline-block;
    width: 75%;

    color: #fff;
    font-weight: 300;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>