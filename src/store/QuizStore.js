import { defineStore } from "pinia";

import api from "@/api";

import { useSessionStorage } from "@vueuse/core";

const defaultState = {
  _questionMap: {},
  _instanceID: "",
  _outcome: "",
  _majorsMap: {},
};
export const useQuizStore = defineStore("QuizStore", {
  state: () => {
    return {};
  },
  getters: {
    questionMap: (state) => state._questionMap,
    instanceID: (state) => state._instanceID,
    outcome: (state) => state._outcome,
    majorsMap: (state) => state._majorsMap,
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
      this._outcome = res.data;
    },
    async setInstance(answers) {
      let res = await api.setInstance(answers);
      this._instanceID = res.data;
    },
    async fetchMajors() {
      let res = await api.getMajors();
      this._majorsMap = res.data;
    },
  },
});
