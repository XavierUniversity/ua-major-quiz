import apiClient from "./axios";

export default {
  getQuestions() {
    return apiClient.get("/major_quiz/get_questions");
  },
  setInstance(sendData) {
    return apiClient.post("/major_quiz/set_instance", {
      ...sendData,
    });
  },
  setResults(sendData) {
    return apiClient.post("/major_quiz/set_results", {
      ...sendData,
    });
  },
  postInstanceMajor(sendData) {
    return apiClient.post("/major_quiz/set_instance_major", {
      ...sendData,
    });
  },
  getMajors() {
    return apiClient.get("/major_quiz/get_major_list");
  },
  getOutcomeDetails(outcomeID) {
    console.log(outcomeID)
    return apiClient.post("/major_quiz/get_outcome_details", {
      outcomeID
    });
  },
};
