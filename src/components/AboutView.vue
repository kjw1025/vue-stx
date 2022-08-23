<template>
    <section class="about">
        <div class="inner">
            <div class="about-top">
                <h2>ABOUT US</h2>
                <p>
                    <strong>
                        고객의 믿음과 신뢰로 성장하는 <br>
                        STX건설이 되겠습니다.
                    </strong>
                    <span>
                        STX건설 이름으로 세계 어디에서, 세계 누구와 겨뤄도<br>
                        자신 있는 세계 최고를 향해 웅비합니다. STX건설이라는 날개를<br>
                        하나 더 피고 세계로, 미래로 나아가는 STX건설의 힘찬 비상을 주목해 <br>
                        주십시오.
                    </span>
                </p>
            </div>
            <div class="about-bottom">
                <a href="#" class="about-link-1">
                    경영이념
                </a>
                <a href="#" class="about-link-2">
                    공유가치
                </a>
                <a href="#" class="about-link-3">
                    중장기전략
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>
    /* 소개 */
    .about .inner {
        padding: 100px 0;
    }

    .about-top {
        background: url('../assets/images/img_about.png') no-repeat;
        background-position: right top;
        padding-bottom: 70px;
    }

    .about-top h2 {
        font-size: 44px;
        color: #111;
        margin-bottom: 55px;
    }

    .about-top p {
        position: relative;
        padding-left: 100px;
    }

    .about-top p::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 37px;
        height: 5px;
        background-color: #ed1c24;
    }

    .about-top p strong {
        display: block;
        font-size: 21px;
        color: #111;
        font-weight: 500;
        margin-bottom: 25px;
    }

    .about-top p span {
        display: block;
        font-size: 15px;
        font-weight: 300;
    }

    .about-bottom {
        text-align: center;
        margin-top: 70px;
    }

    .about-bottom a {
        display: inline-block;
        margin-right: 210px;

        font-size: 22px;
        font-weight: 500;
        color: #111;
    }

    .about-bottom a::before {
        content: '';
        position: relative;
        display: block;

        width: 100px;
        height: 108px;
        background: url('../assets/images/bg_icon.png') no-repeat;

        margin-bottom: 25px;
    }

    .about-bottom .about-link-1::before {
        background-position: 0 0;
    }

    .about-bottom .about-link-2::before {
        background-position: 50% 0;
    }

    .about-bottom .about-link-3 {
        margin-right: 0;
    }

    .about-bottom .about-link-3::before {
        background-position: 100% 0;
    }
</style>