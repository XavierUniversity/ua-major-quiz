import apiClient from "./axios";

export default {
  getQuestions() {
    return apiClient.get("/MajorQuiz/get_questions");
  },
  setInstance() {
    return apiClient.get("/MajorQuiz/set_instance");
  },
  setAnswer() {
    return apiClient.get("/MajorQuiz/set_answer");
  },
  
};
