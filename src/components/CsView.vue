<template>
    <section class="cs">
        <div class="inner clearfix">

            <a href="#" class="cs-faq">
                <h3>FAQ</h3>
                <p>
                    STX건설 고객님들을 위해 <br>
                    자주하시는 질문과 답변을 정리하였습니다.
                </p>
            </a>

            <a href="#" class="cs-qa">
                <h3>고객문의</h3>
                <p>
                    STX건설 고객상담은 고객만족 <br>
                    서비스를 위하여 최선을 다하고 있습니다.
                </p>
            </a>

        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>
    /* 고객센터 */
    .cs {
        background: #f8f8f8;
    }

    .cs .inner {
        padding: 60px 0;
    }

    .cs .inner a {
        display: block;
        float: left;
        width: calc(50% - 1px);
        padding: 50px 55px;
    }

    .cs-faq {
        margin-right: 2px;
        background: #fff url('../assets/images/bg_faq.png') no-repeat;
        background-position: calc(100% - 50px) center;
    }

    .cs-qa {
        background: #fff url('../assets/images/bg_custom.png') no-repeat;
        background-position: calc(100% - 50px) center;
    }

    .cs h3 {
        font-size: 30px;
        color: #000;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .cs p {
        font-weight: 300;
    }
</style>