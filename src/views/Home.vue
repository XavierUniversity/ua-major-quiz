<template>
  <Question v-if="block.parentFolderPath == 'questions'" :question="block.metadata.title" :buttons="block.structuredData.structuredDataNodes" />
  <Majors v-if="block.parentFolderPath == 'majors'" :title="block.metadata.title" :description="block.metadata.metaDescription" :majors="block.structuredData.structuredDataNodes"  />
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import Majors from '@/components/Majors.vue'
import axios from 'axios'

export default {
  name: 'Home',
  prop: {
    id: String
  },
  data () {
    return {
      block: {},
      question: String,
      buttons: Array
    }
  },
  components: {
    Question, Majors
  },
  mounted: function () {
    this.getBlock("96ed3be50afd01583b0a17a4e0695fa4")
  },
  methods: {
    getBlock(id){
      axios.get("https://www.xavier.edu/major-quiz/api", {
        params: {
          id: id
        }
      }).then( response => { 
        this.block = response.data.asset.xhtmlDataDefinitionBlock
        console.log(this.block);
      })
    }
  }
}
</script>