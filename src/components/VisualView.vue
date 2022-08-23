<template>

    <section class="visual">
        <div class="inner">
            <h2 class="visual-title">
                BEST OF THE WORLD <br>
                STX Engineering & Construction
            </h2>
            <p class="visual-txt">
                세계최고를 향해 STX건설이 힘차게 질주합니다!
            </p>

            <button class="visual-bt">이동</button>
        </div>
    </section>

</template>

<script>
    import $ from 'jquery';
    import {
        onMounted
    } from 'vue';

    export default {
        setup() {
            onMounted(() => {
                // 컨텐츠 이동 버튼
                let visualBt = $('.visual-bt');
                // .part 영역이 
                // html 의 상단(top)으로 부터 
                // 어느만큼 떨어진 위치 px 값
                let partY = $('.part').offset().top;
                visualBt.click(function () {
                    $('html').stop().animate({
                        scrollTop: partY
                    }, 500);
                });
            });
        }
    }
</script>

<style>
    /* 비주얼 */
    .visual {
        background: url('../assets/images/img_visual01.png') no-repeat center;
        background-size: cover;
        background-attachment: fixed;
    }

    .visual .inner {
        height: 855px;
        border-top: 1px solid rgba(0, 0, 0, 0);
    }

    .visual-title {
        position: relative;
        font-size: 70px;
        color: #fff;
        font-weight: 500;
        margin-top: 235px;
        line-height: 1.15;
    }

    .visual-title::before {
        content: '';
        position: absolute;
        left: 0;
        top: -40px;
        width: 60px;
        height: 5px;
        background-color: #ed1c24;
    }

    .visual-txt {
        font-size: 21px;
        color: #fff;
        font-weight: 300;
        margin-top: 40px;
    }

    .visual-bt {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        width: 33px;
        height: 33px;
        background: url('../assets/images/bg_common.png') no-repeat;
        background-position: -122px 0px;
        border: 0;
        font-size: 0;
        cursor: pointer;
    }
</style>