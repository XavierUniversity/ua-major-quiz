<template>
    <div>


        <div class="select-box cta-card__1x1">
            <div class="select-box__container">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 8 99"
                    preserveAspectRatio="xMidYMid slice" style="position:absolute;width:8px;height:100%;" version="1.1"
                    viewBox="0 0 8 99" x="0px" xml:space="preserve" y="0px">
                    <rect fill="#1a1aff" height="33" width="8" y="33"></rect>
                </svg>
                <div class="select-box__container--content">
                    <p v-if="selectedMajor.Description">{{ selectedMajor.Description }} </p>

                    <p><a class="select-box__link" :href="selectedMajor.URL">Learn More About {{
                        selectedMajor.Name
                            }}</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useQuizStore } from "@/store/QuizStore";
import { storeToRefs } from "pinia";



const quizStore = useQuizStore();

const { selectedMajor } = storeToRefs(quizStore);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
    text-align: left;
    margin-top: 0;

    @media screen and (min-width: 768px) {
        column-count: 2;
        vertical-align: top;
    }
}

p {
    color: #0C2340;
    font-size: 1.8rem;
    margin: 0;

    @media (min-width: 992px) {
        text-align: center;
    }
}
a {

&:hover,
&:focus,
&:active {
    color: #1a1aff;
}


}
</style>