import { defineStore } from "pinia";

import api from "@/api";

const defaultState = {
  _questionMap: {},
  _instanceID: "",
  _outcome: "",
  _majorsMap: {},
  _outcomeMajors: [],
  _selectedMajorID: 0,
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
    outcomeMajors: (state) => state._outcomeMajors,
    selectedMajor: (state) => state._majorsMap[state._selectedMajorID],
  },
  actions: {
    setSelectedMajorID(id){
      this._selectedMajorID =  id;
    },
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
    async updateInstance(answers) {
      let res = await api.getMajors();
      this._majorsMap = res.data;
    },
    async getOutcomeDetails(outcomeID) {
      let res = await api.getOutcomeDetails(outcomeID);
      this._outcomeMajors = res.data["majors"];
    },
  },
});
