import apiClient from "./axios";

export default {
  getQuestions() {
    return apiClient.get("/major_quiz/get_questions");
  },
  setInstance() {
    return apiClient.get("/major_quiz/set_instance");
  },
  setAnswer() {
    return apiClient.get("/major_quiz/set_answer");
  },
  
};
