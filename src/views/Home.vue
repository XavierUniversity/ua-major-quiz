<template>
  <div class="quiz__content" v-if="questionIndex > quiz.length">
    <h2 class="quiz__content">Major Decisions</h2>
    <p class="quiz__content">Additional content that will hopefully make things change place.</p>
    <button v-on:click="start" class="btn btn--secondary btn--inline">
      Take the Quiz
    </button>
  </div>
  <div class="quiz__q" v-else>
    <div class="progress" v-if="progress <= 100">
      <div class="progress" style="border-color: #0c2340; background-color: #0c2340; margin: 0; color: white;"
        :style="{ width: progress + '%' }">
      </div>
    </div>
    <div v-for="(question, index) in quiz" :key="index">
      <div v-if="index === questionIndex">
        <h2 class="question">{{ question.Question }}</h2>
        <ol>
          <li v-for="answer in question.Answers" :key="answer.Answer">
            <label>
              <input type="radio"
                v-bind:value="answer.Category"
                v-bind:name="index"
                v-model="userResponses[index]" /><span v-html="answer.Answer"></span>
            </label>
          </li>
        </ol>
        <hr />
        <!-- The navigation buttons! -->
        <button v-if="questionIndex > 0" v-on:click="prev" class="btn btn--inline btn--prev">
          &laquo; Previous
        </button>
        <button v-if="questionIndex <= quiz.length - 2" v-on:click="next" class="btn btn--next btn--inline">
          Next &raquo;
        </button>
        <button v-if="questionIndex == quiz.length - 1" v-on:click="score" class="btn btn--inline btn--final">
          Show my Major &raquo;
        </button>
      </div>
    </div>
  </div>
 </template>

 <script>
 const quiz = [
    {
      "Question" : "What core class sounds the most exciting to you?",
      "Answers"  : [
        {
          "Answer" : "History 103 (Immigration to America)",
          "Category" : 'people'
        },
        {
          "Answer" : "English 101 (Composition)",
          "Category" : 'communication'
        },
        {
          "Answer" : "Biology 102 (Human Biology)",
          "Category" : 'health,science',
        },
        {
          "Answer" : "Theatre 100 (Intro to Theatre)",
          "Category" : 'art',
        }
      ]
    },
    {
      "Question" : "What do you do the night before an exam?",
      "Answers"  : [
        {
          "Answer" : "Study with a friend",
          "Category" : 'people,communication,education'
        },
        {
          "Answer" : "Make flashcards and review notes",
          "Category" : 'technology,science,business'
        },
        {
          "Answer" : "Study a bit, but go to bed early",
          "Category" : 'health,science'
        },
        {
          "Answer" : "Check in with classmates to see how they're preparing",
          "Category" : 'communication',
        }
      ]
    },
    {
      "Question" : "What Xavier club or activity interests you most?",
      "Answers"  : [
        {
          "Answer" : "Running for a Student Governement Association position",
          "Category" : 'people,business'
        },
        {
          "Answer" : "Writing for the student newspaper, <em>Xavier Newswire</em>",
          "Category" : 'communication'
        },
        {
          "Answer" : "Playing intramural sports",
          "Category" : 'health'
        },
        {
          "Answer" : "Starting a new club Xavier doesn't currently have",
          "Category" : 'business,technology,art',
        }
      ]
    },
    {
      "Question" : "Your friends would most likely describe you as:",
      "Answers"  : [
        {
          "Answer" : "Creative",
          "Category" : 'communication,art'
        },
        {
          "Answer" : "Innovative",
          "Category" : 'business,technology'
        },
        {
          "Answer" : "Compassionate",
          "Category" : 'people,education,health'
        },
        {
          "Answer" : "Ambitious",
          "Category" : 'science',
        }
      ]
    },
    {
      "Question" : "When imagining your future job, which of these is most important to you?",
      "Answers"  : [
        {
          "Answer" : "Doing work that is helping others",
          "Category" : 'health,science,education,people'
        },
        {
          "Answer" : "Learning new things every day",
          "Category" : 'communication,science,art'
        },
        {
          "Answer" : "Being able to follow a daily routine",
          "Category" : 'business'
        },
        {
          "Answer" : "Having opportunities for career advancement",
          "Category" : 'business',
        }
      ]
    },
    {
      "Question" : "How do you like to unwind after a busy day?",
      "Answers"  : [
        {
          "Answer" : "Reading",
          "Category" : 'communication,art,people'
        },
        {
          "Answer" : "Netflix or video games",
          "Category" : 'technology'
        },
        {
          "Answer" : "Talking with friends and family",
          "Category" : 'communication,education,people'
        },
        {
          "Answer" : "Working out",
          "Category" : 'health',
        }
      ]
    },
    {
      "Question" : "Do you enjoy working with others?",
      "Answers"  : [
        {
          "Answer" : "Yes, I love working as a team",
          "Category" : 'business,communication,education,people'
        },
        {
          "Answer" : "I don't mind it, but think I am more successful working alone",
          "Category" : 'science,technology'
        },
        {
          "Answer" : "No, I prefer working alone",
          "Category" : 'art'
        },
        {
          "Answer" : "Depends on the project or job",
          "Category" : 'health,business,communication,art,people',
        }
      ]
    },
    {
      "Question" : "What do you think is your biggest strength?",
      "Answers"  : [
        {
          "Answer" : "I am quick on my feet and a good problem solver",
          "Category" : 'science,education,technology'
        },
        {
          "Answer" : "I am an excellent communicator",
          "Category" : 'communication,education,people'
        },
        {
          "Answer" : "I'm creative and think outside the box",
          "Category" : 'art'
        },
        {
          "Answer" : "I work well under pressure",
          "Category" : 'health,business,science,people',
        }
      ]
    }
  ];

  const buckets = [
    'Health',
    'Business',
    'Communication',
    'Science',
    'Education',
    'Technology',
    'Art',
    'People'
  ];

  export default {
    name: 'Quiz',
    components: {},
    data() {
      return {
        // The Major Buckets
        buckets: buckets,
        // The actual quiz questions
        quiz: quiz,
        // Store current question index
        questionIndex: quiz.length + 1,
        // An array initialized with "False" values for each question
        // It means: did the user answer the question correctly?
        userResponses: Array(quiz.length).fill(false),
        // Results array
        results: []
      }
    },
    // The view will trigger these methods on click
    methods: {
      // Start the quiz
      start: function () {
        this.questionIndex = 0;
      },
      // Go to next question
      next: function() {
        this.questionIndex++;
      },
      prev: function() {
        this.questionIndex--;
      },
      score: function() {
        this.next();
        for ( const bucket of buckets ){
          let obj = {}
          obj["bucket"] = bucket;
          obj["count"] = this.userResponses.filter( function(item) {
            if ( typeof item == 'string' ) {
             return item.includes(bucket.toLowerCase());
            }
          }).length

          this.results.push(obj);
        }
        var bucket = this.sorted()[0].bucket;
        return this.$router.push({name: bucket});
      },
      sorted: function () {
        let sortedBuckets = this.results;
        sortedBuckets.sort((a,b) => {
          return b.count - a.count;
        });
        return sortedBuckets.slice(0,1);
      }
    },
    computed: {
      progress() {
        return ( (this.questionIndex + 1) / this.quiz.length ) * 100;
      }
    }
  }
 </script>

 <style lang="scss" scoped>
  .quiz{
    &__content{
      color: white;
    }
  }
  .btn{
    &--secondary {
      background: #007DB3;
      color: white;
      &:hover, &:focus, &:active{
        background: darken(#007DB3, 10%);
      }
    }
    &--prev, &--next{
      width: 137px;
    }
    &--next, &--final{
      float: right;
    }
  }
  .progress {
    width: 100%;
    background-color: #e8e8e8;
    border-collapse: collapse;
    border: 0.25rem solid #f8f8f8;
    margin: 1rem auto 2rem;
    transition: width 500ms;
    border-radius: 1rem;
  }

  .quiz-container{
    background: #f3f3f3;
    padding: 2rem;
    border-radius: 1.5rem;
  }
  hr {
    height: 0.25rem;
    background: #bbb;
    margin: 2rem 0;
    display: block;
  }
  h2.question {
    font-size: 1.5rem;
    line-height: 1;
    @media (min-width:992px){
      text-align: center;
    }
  }

  ol{
    text-align: left;
    list-style-type: none;
    padding: 0; margin: 0;
    li {
      background: #fff;
      padding: 1.5rem 2rem;
      margin: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem rgba(black, 0.25);
    }
  }
  input[type='radio']{
    margin-right: 0.75rem;
  }
 </style>