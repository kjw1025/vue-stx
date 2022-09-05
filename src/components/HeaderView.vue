<template>
  <header class="header">
    <div class="inner">
      <a href="#" class="logo">stx건설</a>
      <nav class="gnb">

        
        <ul class="depth1">
          <li v-for="(item, index) in gnbData" :key="index">
            <a :href="item.mainlink">{{item.maintxt}}</a>
            <ul class="depth2">
              <li v-for="(subitem,subindex) in item.subdata" :key="subindex">
                <a :href="subitem.sublink">{{subitem.subtxt}}</a>
              </li>
            </ul>
          </li>
        </ul>

      </nav>
      <div class="lang">
        <a href="#">ENG</a>
        <i class="lang-bar"></i>
        <a href="#" class="lang-active">KOR</a>
      </div>
    </div>
  </header>
</template>

<script>
  import $ from 'jquery';
  import {
    onMounted, computed
  } from 'vue';

  import { useStore } from 'vuex';

  export default {
    setup() {

      const store = useStore();
      
      const gnbData = computed( () => store.state.gnbData);

      store.dispatch('fetchGnb');

      // vue 에서 화면에 htnml 등록시 실행
      onMounted(() => {
        // .header를 저장한다.
        let header = $('.header');
        let gnb = $('.gnb');
        // 펼쳐졌을 때의 높이값
        let gnbMaxHeight = gnb.outerHeight();
        // 닫혔을 때의 높이값
        let gnbMinHeight = header.outerHeight();
        // 기본 header 의 높이값 적용
        header.css('height', gnbMinHeight);
        gnb.mouseenter(function () {
          header.css('height', gnbMaxHeight);
        });
        gnb.mouseleave(function () {
          header.css('height', gnbMinHeight);
        });

        // 주메뉴 포커스 기능
        let depth_1_Li = $('.depth1 > li');
        $.each(depth_1_Li, function () {
          $(this).mouseenter(function () {
            // li 의 > a 를 찾는다.
            $(this).find('>a').addClass('depth1-focus');
          });
          $(this).mouseleave(function () {
            // li 의 > a 를 찾는다.
            $(this).find('>a').removeClass('depth1-focus');
          });
        });

      });

      return {
        gnbData
      }

    }
  }
</script>

<style>
  /* 상단 */
  .header {
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 80px;
    transition: height 0.5s;
    z-index: 9999;
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
  }

  .header-open {
    height: 400px;
  }

  .header::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 100vw;
    height: 80px;
    background: #fff;
    box-shadow: 0px 0px 7px 0px rgb(0 0 0 / 20%);
  }

  .logo {
    position: absolute;
    right: calc(100% + 100px);
    top: 20px;
    width: 150px;
    height: 39px;
    background: url('@/assets/images/logo.png') no-repeat center;
    background-size: cover;
    font-size: 0;
  }

  .gnb {
    position: relative;
  }

  .gnb::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 80px;
    display: block;
    width: 100vw;
    height: calc(100% - 80px);
    background-color: rgba(0, 0, 0, 0.5);
  }

  .depth1 {
    position: relative;
    display: table;
    table-layout: fixed;
    width: calc(180px * 6 - 70px);
    margin: 0 auto;
  }

  .depth1>li {
    display: table-cell;
    width: 180px;
  }

  .depth1>li:last-child {
    width: 70px;
  }

  .depth1>li>a {
    position: relative;
    font-size: 19px;
    color: #000;
    font-weight: 500;
    line-height: 80px;
  }

  .depth1-focus {
    color: #ed1c24 !important;
  }

  .depth2 {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .depth2 li a {
    display: inline-block;
    font-size: 15px;
    color: #fff;
    margin-bottom: 15px;
  }

  .lang {
    position: absolute;
    left: calc(100% + 100px);
    top: 26px;
    font-size: 0;
    white-space: nowrap;
  }

  .lang a {
    display: inline-block;
    font-size: 15px;
    color: #888;
    font-weight: 500;
    text-transform: uppercase;
  }

  .lang .lang-active {
    color: #000;
  }

  .lang-bar {
    display: inline-block;
    width: 1px;
    height: 9px;
    background-color: #999;
    margin: 0 10px;
  }
</style>