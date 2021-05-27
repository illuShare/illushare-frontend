import api from "apis";

export const getMBTIQuestions = (type) => api.get(`/mbti?type=${type}`);

export const getMBTIResult = (id) => api.get(`/result?id=${id}`);
