<template>
    <div>
        <v-skeleton-loader :isLoading="isLoading" type="card"></v-skeleton-loader>


        <p v-if="mode === 'certain'">
            <span v-if="loaderCount > 1">
                Here’s How to Make the Most of Knowing Your Major When Applying to College
                You told us your intended major is: MAJOR

                <MajorSummary :selectedMajor="selectedMajor"></MajorSummary>
            </span>

            <span v-if="loaderCount > 2">
                If you’re heading into the college search with a major already in mind—great! That kind of
                focus can help you streamline your choices and find programs that match your goals. But
                knowing what you want to study is just the beginning.
                Here are some key tips to help you apply to college with a declared major:
                <strong>1. Research Programs in Depth</strong>
                Not all majors are created equal at every college. Some schools have nationally ranked
                programs, cutting-edge research opportunities, or strong connections to industries and
                internships. Dig into the specifics.
            </span>

            <span v-if="loaderCount > 3">
                <strong> 2. Check for Admission Requirements</strong>

                Some majors—especially in areas like engineering, nursing, business, or performing arts—
                may have separate or more competitive admissions processes. These might include higher
                GPA thresholds, prerequisite courses, portfolios, or auditions.
            </span>

            <span v-if="loaderCount > 4">
                <strong> 3. Explore Related Opportunities Early</strong>


                If you know your major, you can already begin thinking about how to enrich that path.
                Xavier offers study abroad, internships opportunities, clubs, and can even help you make a
                plan for future grad school.
            </span>

            <span v-if="loaderCount > 5">
                <strong>4. Communicate Your Passion in Your Application</strong>

                Knowing your major gives you a strong foundation for your application essays. Use your
                essay to share:
                <ul>
                    <li>Why you chose your major</li>
                    <li>What experiences led you there</li>
                    <li>
                        What you hope to do with your degree
                    </li>

                </ul>
                Being sure of your major is a great advantage—but stay curious and adaptable. College
                may deepen your passion or shift your path slightly, and that’s okay. The more proactive
                and thoughtful you are now, the more you’ll get out of your academic journey later.
            </span>

        </p>

        <p v-if="mode === 'explore'">
            <span v-if="loaderCount > 1">
                Thinking About a Major, But Still Exploring? Here’s How to Apply to College with
                Confidence
                Having a major in mind, even if you're still exploring, is a smart move. It means you can
                begin looking at colleges with a purpose, while still leaving room to grow and discover new
                interests.
                You’ve shown interest in MAJOR, and that’s a great place to start.
                <MajorSummary :selectedMajor="selectedMajor"></MajorSummary>


            </span>


            <span v-if="loaderCount > 2"> We also think these would be great majors for you to explore as you continue
                your college
                search.
                <BucketSummary @restart="restartQuiz()" :title="outcome.name" :majors="outcomeMajors"></BucketSummary>

            </span>



            <span v-if="loaderCount > 3">
                Here are some additional tips to help you navigate the application process when you’ve
                mostly decided, but are still open to exploring:
                <strong>1. Start with What Interests You</strong>
                You’ve identified an area you’re curious or passionate about. That’s valuable! As you
                research colleges, look for programs that support your current interest and give you
                flexibility to pivot or branch out.
            </span>

            <span v-if="loaderCount > 4">
                <strong>2. Explore Schools, Like Xavier, That Support Exploratory Students</strong>
                It’s completely normal not to know what you want to major in when applying. Xavier offers
                an Exploratory major, for just that reason! Being undecided can actually be a strength—it
                shows you’re open to discovery and growth.
            </span>

            <span v-if="loaderCount > 5">
                <strong>3. Talk to People Who’ve Been There</strong>
                Reach out to current college students or alumni in your potential major. Ask how they
                chose their path and whether they changed their minds along the way. You might be
                surprised by how many people shift focus after their first year—and how valuable that
                flexibility was.
            </span>


            <span v-if="loaderCount > 6">
                <strong>4. Use Your Application to Show Curiosity and Openness</strong>
                You don’t have to pretend to be 100% certain in your essays. In fact, colleges appreciate
                students who are intellectually curious and reflective.
                Being interested in a major—without locking yourself in—is a great position to be in. You’ve
                got direction, but also the flexibility to discover even more about yourself in college. The
                key is to apply to schools that support both your current interests and your future
                exploration.
            </span>

        </p>

        <p v-if="mode === 'quiz'">
            <span v-if="loaderCount > 1">
                Selecting a College Major: What to Consider Before You Apply
                Choosing a college major can feel like a high-stakes decision—after all, it often shapes
                your academic journey and may influence your future career path. But while it’s important,
                it doesn’t have to be overwhelming.
                Based on your answers, we think these would be great majors for you to explore:

                <BucketSummary @restart="restartQuiz()" :title="outcome.name" :majors="outcomeMajors"></BucketSummary>

            </span>


            <span v-if="loaderCount > 2">
                Here are some additional tips as you consider your options:
                <strong>
                    1. Start with Your Interests and Strengths
                </strong>
                Think about the subjects you enjoy and excel in. Your natural interests and talents can be
                good indicators of where you might thrive academically and professionally.
                Ask yourself:
                <ul>
                    <li>What subjects do I look forward to?</li>
                    <li>What kinds of tasks make me lose track of time?</li>
                    <li> Have teachers or mentors praised me for certain skills? </li>
                </ul>
            </span>

            <span v-if="loaderCount > 3">
                <strong>
                    2. Explore Career Goals and Job Market Trends
                </strong>
                While you don’t need to have your entire future mapped out, it helps to consider where
                different majors might lead. Some fields—like nursing, computer science, or engineering—
                have more defined career paths, while others—like philosophy or history—offer broader
                options in fields like law, education, or business.
                Things to research:
                <ul>
                    <li> What kinds of jobs do graduates in this major typically get?</li>
                    <li>What is the job outlook and salary range in that field?</li>
                    <li>Does the major require advanced degrees to be competitive?</li>
                </ul>
            </span>

            <span v-if="loaderCount > 4">
                <strong>
                    3. Understand the Flexibility of Your Choice
                </strong>
                Many students change their major at least once during college. Xavier makes it easy to
                switch between majors and encourages exploration!
            </span>

            <span v-if="loaderCount > 5">
                <strong>
                    4. Don’t Panic if You’re Undecided
                </strong>
                It’s completely normal not to know what you want to major in when applying. Xavier offers
                an Exploratory major, for just that reason! Being undecided can actually be a strength—it
                shows you’re open to discovery and growth.
                Choosing a major is a big decision, but it’s not irreversible. Stay curious, ask questions,
                and give yourself permission to explore. College is not just about preparing for a job—it’s
                also about discovering who you are and what kind of life you want to build.
            </span>

        </p>

    </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue';

import BucketSummary from '@/components/BucketSummary.vue';
import MajorSummary from '@/components/MajorSummary.vue';

import { useQuizStore } from "@/store/QuizStore";

import { storeToRefs } from 'pinia';
import { useIntervalFn } from "@vueuse/core";

const loaderCount = ref(0);

const isLoading  = ref(false);




onMounted(() => {
    const { pause } = useIntervalFn(() => {


        if (mode == "quiz") {

        }
        loaderCount.value++;




    }, 100);


})


const quizStore = useQuizStore();

const { outcome, outcomeMajors, selectedMajor } = storeToRefs(quizStore);

const { mode } = defineProps({ mode: { type: String, required: true } });

</script>

<style lang="scss" scoped></style>