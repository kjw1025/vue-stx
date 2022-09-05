import axios from 'axios';


const state = {

    // gnb 메뉴데이터
    gnbData: [{
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
    ],

    noticeData: [{
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
    ],

    newsData: [{
            url: 'k.html',
            title: 'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'
        },
        {
            url: 'i.html',
            title: 'STX건설, 2018년 성장 청신호'
        }
    ]

}

const actions = {

    fetchGnb() {
        axios.get('./data/gnb.json')
            .then(response => console.log("axios", response))
            .catch(err => console.log(err)) 
    },

    fetchNews() {
        axios.get('./data/news.json')
            .then(response => console.log(response))
            .catch(err => console.log(err))
    },

    fetchNotice() {
        axios.get('./data/notice.json')
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

};
const mutations = {

}
const getters = {
    getGnbData(state) {
        return state.gnbData;
    },
    getNewsData(state) {
        return state.newsData;
    },
    getNoticeData(state) {
        return state.noticeData;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}