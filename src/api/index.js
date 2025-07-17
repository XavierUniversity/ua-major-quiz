import apiClient from "./axios";

export default {
  getQuestions() {
    return apiClient.get("/major_quiz/get_questions");
  },
  setInstance(sendData) {
    return apiClient.post("/major_quiz/set_instance",{
      ...sendData
    });
  },
  setAnswers() {
    return apiClient.get("/major_quiz/set_answer");
  },
  
};
