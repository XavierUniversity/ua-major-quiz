import { defineStore } from "pinia";

import api from "@/api";

import { useSessionStorage } from "@vueuse/core";

const defaultState = {
  _questionMap: {},
  _instanceID: "",
  _outcome: "",
};
export const useQuizStore = defineStore("QuizStore", {
  state: () => {
    return {};
  },
  getters: {
    questionMap: (state) => state._questionMap,
    instanceID: (state) => state._instanceID,
    outcome: (state) => state._outcome,
  },
  actions: {
    async fetchQuestions() {
      let res = await api.getQuestions();
      this._questionMap = res.data;
    },
    async postResults(answers) {
      let res = await api.setResults({
        Answers: answers,
        InstanceID: this.instanceID,
      });
      this.outcome = res.data;
    },
    async setInstance(answers) {
      let res = await api.setInstance(answers);
      this._instanceID = res.data;
    },
  },
});
