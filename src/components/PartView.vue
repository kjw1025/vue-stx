<template>
    <section class="part">
        <div class="inner">

            <h2 class="part-title">
                STX Engineering & Construction Business
            </h2>

            <p class="part-txt">
                STX건설은 건문 역량 강화를 통해 건축, 주택, 토목, 플랜트 사업 영역에서 <br>
                탁월한 성과를 인정받은 기업으로 자연과 기술의 공간에 인류의 가치를 추구합니다.
            </p>

            <ul class="part-list clearfix">
                <li>
                    <a href="#">
                        <h3>건축사업</h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>주택사업</h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>토목사업</h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>플랜트/공작기계사업</h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h3>해외사업</h3>
                    </a>
                </li>
            </ul>

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
                // part 배경 배치
                let partListLi = $('.part-list li');
                let partListW = 1200 / partListLi.length;
                $.each(partListLi, function (index) {
                    let tgX = partListW * index;
                    tgX = -1 * tgX;
                    $(this).css('background-position-x', tgX);
                });
            });
        }
    }
</script>

<style>
    /* 업무파트 */
    .part-title {
        position: relative;
        font-size: 44px;
        color: #111;
        font-weight: 600;
        text-align: center;
        padding-top: 110px;
        padding-bottom: 25px;
    }

    .part-title::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 37px;
        height: 4px;
        background-color: #ed1c24;
    }

    .part-txt {
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        margin-top: 25px;
        margin-bottom: 75px;
    }

    .part-list {
        margin-bottom: 130px;
    }

    .part-list li {
        width: 20%;
        height: 420px;
        float: left;
        background: url('../assets/images/img_business.png') no-repeat;
    }

    .part-list li a {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: rgba(244, 128, 37, 0);
        transition: background-color 0.5s;
    }

    .part-list li a:hover {
        background-color: rgba(244, 128, 37, 1.0);
    }

    .part-list li a:hover::after {
        opacity: 1.0;
    }

    .part-list li a::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        background: url('../assets/images/bg_common.png') no-repeat;

        opacity: 0;
        transition: opacity 0.5s;
    }

    .part-list li:nth-child(1) a::after {
        width: 113px;
        height: 112px;
        background-position: -173px 0px;
    }

    .part-list li:nth-child(2) a::after {
        width: 123px;
        height: 111px;
        background-position: -301px 0px;
    }

    .part-list li:nth-child(3) a::after {
        width: 130px;
        height: 106px;
        background-position: 0px -122px;
    }

    .part-list li:nth-child(4) a::after {
        width: 130px;
        height: 111px;
        background-position: -140px -122px;
    }

    .part-list li:nth-child(5) a::after {
        width: 102px;
        height: 105px;
        background-position: -280px -121px;
    }

    .part-list li a h3 {
        font-size: 24px;
        color: #fff;
        text-align: center;
        font-weight: 300;
        padding-top: 80px;
    }
</style>