<template>
  <div>
    <!-- 안내창 -->
    <ModalPop />

    <div class="wrap">
      <!-- 상단 -->
      <HeaderView :gnbdata="gnbData" />
      <!-- 비주얼 -->
      <VisualView />
      <!-- 업무파트 -->
      <PartView />
      <!-- 새소식 -->
      <NewsView v-bind:ntdata="noticeData" v-bind:nsdata="newsData" />
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

      // gnb 메뉴데이터
      const gnbData = [{
          mainlink: '#',
          maintxt: '회사소개',
          subdata: [{
              sublink: '#',
              subtxt: '인사말'
            },
            {
              sublink: '#',
              subtxt: 'STX건설'
            },
            {
              sublink: '#',
              subtxt: '기업문화'
            },
            {
              sublink: '#',
              subtxt: 'STX건설연혁'
            },
            {
              sublink: '#',
              subtxt: '조직안내'
            },
            {
              sublink: '#',
              subtxt: '윤리경영'
            },
            {
              sublink: '#',
              subtxt: '인안전·환경·품질경영사말'
            },
            {
              sublink: '#',
              subtxt: '찾아오시는길'
            }
          ]
        },
        {
          mainlink: '#',
          maintxt: '사업분야',
          subdata: [{
              sublink: '#',
              subtxt: '건축사업'
            },
            {
              sublink: '#',
              subtxt: '주택사업'
            },
            {
              sublink: '#',
              subtxt: '토목사업'
            },
            {
              sublink: '#',
              subtxt: '플랜트/공작기계사업'
            }
          ]
        },
        {
          mainlink: '#',
          maintxt: '사회공헌',
          subdata: [{
              sublink: '#',
              subtxt: '나눔의생각'
            },
            {
              sublink: '#',
              subtxt: '주요활동분야'
            },
            {
              sublink: '#',
              subtxt: '활동현황'
            }
          ]
        },
        {
          mainlink: '#',
          maintxt: '홍보센터',
          subdata: [{
              sublink: '#',
              subtxt: '홍보동영상'
            },
            {
              sublink: '#',
              subtxt: '홍보브로슈어'
            },
            {
              sublink: '#',
              subtxt: 'STX건설뉴스'
            }
          ]
        },
        {
          mainlink: '#',
          maintxt: '고객지원',
          subdata: [{
              sublink: '#',
              subtxt: '자주묻는질문'
            },
            {
              sublink: '#',
              subtxt: '고객문의'
            }
          ]
        },
        {
          mainlink: '#',
          maintxt: '채용정보',
          subdata: [{
              sublink: '#',
              subtxt: '채용안내'
            },
            {
              sublink: '#',
              subtxt: '채용공고'
            },
            {
              sublink: '#',
              subtxt: '채용FAQ'
            }
          ]
        }
      ];


      const noticeData = [{
          url: 'a.html',
          title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'
        },
        {
          url: 'b.html',
          title: '에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'
        },
        {
          url: 'c.html',
          title: '2021년도 협력업체 모집공고'
        },
        {
          url: 'd.html',
          title: 'STX건설 상호 사용 관련 안내'
        }
      ];
      const newsData = [{
          url: 'k.html',
          title: 'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'
        },
        {
          url: 'i.html',
          title: 'STX건설, 2018년 성장 청신호'
        }
      ];



      return {
        noticeData,
        newsData,
        gnbData
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