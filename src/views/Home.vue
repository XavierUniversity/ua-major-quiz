<template>
  <div v-if="questionIndex > quiz.length">
    <h1>Major Decisions</h1>
    <p>Find the major that could be your match! Take our Major Quiz to discover what you could be called to study as a Musketeer. </p>
    <button v-on:click="start" class="nav">
      Take the Quiz
    </button>
  </div>
   <div v-for="(question, index) in quiz" :key="index">
    <div v-if="index === questionIndex">
      <h2>{{ question.Question }}</h2>
      <ol>
        <li v-for="answer in question.Answers" :key="answer.Answer">
          <label>
            <input type="radio"
              v-bind:value="answer.Category"
              v-bind:name="index"
              v-model="userResponses[index]" />{{ answer.Answer }}
          </label>
        </li>
      </ol>
      <!-- The navigation buttons! -->
      <button v-if="questionIndex > 0" v-on:click="prev" class="nav">
        &laquo; Previous 
      </button>
      <button v-if="questionIndex <= quiz.length - 2" v-on:click="next" class="nav">
        Next &raquo;
      </button>
      <button v-if="questionIndex == quiz.length - 1" v-on:click="score" class="nav">
        Show my Major
      </button>
    </div>
  </div>
  <div v-if="questionIndex === quiz.length">
    <h2>That's it...</h2>
    <p>Based on your answers, we recommend checking out the following majors:</p>
    <div v-for="item in sorted()" :key="item.bucket" class="majors">
      <router-link :to="{ name: item.bucket }" class="nav">{{ item.bucket }}</router-link>
    </div>
  </div>
 </template>

 <script>
 const quiz = [
    {
      "Question" : "What core class sounds the most exciting to you?",
      "Answers"  : [
        {
          "Answer" : "History", 
          "Category" : 'people'
        },
        {
          "Answer" : "English",
          "Category" : 'communication'
        },
        {
          "Answer" : "Biology",
          "Category" : 'health,science',
        },
        {
          "Answer" : "Theatre", 
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
          "Category" : 'communication,technology,science,business'
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
          "Category" : ''
        },
        {
          "Answer" : "Writing for the student newspaper, Newswire",
          "Category" : 'communication'
        },
        {
          "Answer" : "Playing intramural sports",
          "Category" : ''
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
          "Category" : 'business,'
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
      "Question" : "What was your favorite subject in high school?",
      "Answers"  : [
        {
          "Answer" : "Math",
          "Category" : 'technology'
        },
        {
          "Answer" : "Science",
          "Category" : 'science,health'
        },
        {
          "Answer" : "English",
          "Category" : 'communication'
        },
        {
          "Answer" : "History",
          "Category" : '',
        }
      ]
    },
    {
      "Question" : "When imagining your future job, which of these is most important to you?",
      "Answers"  : [
        {
          "Answer" : "Doing work that is helping others",
          "Category" : 'health'
        },
        {
          "Answer" : "Learning new things every day",
          "Category" : 'communication'
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
          "Category" : 'communication'
        },
        {
          "Answer" : "Netflix or Video Games",
          "Category" : ''
        },
        {
          "Answer" : "Talking with friends and family",
          "Category" : ''
        },
        {
          "Answer" : "Working out",
          "Category" : 'health',
        }
      ]
    },
    {
      "Question" : "How do you approach a problem?",
      "Answers"  : [
        {
          "Answer" : "Consider all possible solutions before choosing one",
          "Category" : 'health,business,communication'
        },
        {
          "Answer" : "Ask for advice from people who have been in a similar situation",
          "Category" : ''
        },
        {
          "Answer" : "Think about how you've handled other problems in the past",
          "Category" : 'health,communication'
        },
        {
          "Answer" : "Come up with something that's never been done before",
          "Category" : 'business',
        }
      ]
    },
    {
      "Question" : "Where on Xavier's campus will you most likely hang out between classes?",
      "Answers"  : [
        {
          "Answer" : "Gallagher Student Center",
          "Category" : ''
        },
        {
          "Answer" : "In your dorm or apartment",
          "Category" : 'communication'
        },
        {
          "Answer" : "O'Connor Sports Center",
          "Category" : 'health'
        },
        {
          "Answer" : "McDonald Memorial Library",
          "Category" : 'communication',
        }
      ]
    },
    {
      "Question" : "Do you enjoy working with others?",
      "Answers"  : [
        {
          "Answer" : "Yes, I love working as a team",
          "Category" : 'business,communication'
        },
        {
          "Answer" : "I don't mind it, but think I am more successful working alone",
          "Category" : ''
        },
        {
          "Answer" : "No, I prefer working alone",
          "Category" : ''
        },
        {
          "Answer" : "Depends on the project or job",
          "Category" : 'health,business',
        }
      ]
    },
    {
      "Question" : "What do you think is your biggest strength?",
      "Answers"  : [
        {
          "Answer" : "I am quick on my feet and a good problem solver",
          "Category" : ''
        },
        {
          "Answer" : "I am an excellent communicator",
          "Category" : ''
        },
        {
          "Answer" : "I'm creative and think outside the box",
          "Category" : ''
        },
        {
          "Answer" : "I work well under pressure",
          "Category" : 'health,business',
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
        return this.results;
      },
      sorted: function () {
        let sortedBuckets = this.results;
        sortedBuckets.sort((a,b) => {
          return b.count - a.count;
        });
        return sortedBuckets.slice(0,1);
      }
    }
  }
 </script>
 
 <style lang="scss" scoped>
 .majors{
   padding: 1.5rem 0;
 }
 </style>