import axios from "axios";

const baseURL = "";
const retryQueue = []; // 401 응답을 받은 request들을 저장할 큐
const requestCnt = 0; // api 콜 개수

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * 401을 응답으로 받은 request들을 retryQueue에 보관
 * @param {*} cb request를 재 요청을 위한 콜백 함수
 */
const subscribe = (cb) => {
  retryQueue.push(cb);
};

/**
 * 요청한 모든 api 콜의 응답을 받을 때까지 100ms 동안 requestCnt를 체크
 * requestCnt가 0(모든 요청에 대한 응답을 받은 상태)일 때 retryQueue의 콜백 함수(api 재 요청) 실행
 */

const publish = () => {
  if (requestCnt > 0) {
    setTimeout(publish(), 100);
    return;
  }
  retryQueue.forEach((cb) => cb());
};

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status, config } = (error && error.response) || {};
    if (status === 401) {
      const originalRequest = config;

      if (!originalRequest) throw error;

      return new Promise((resolve) => {
        subscribe(() => {
          resolve(api(originalRequest));
        });
      });
    }
    throw error;
  },
);

export default api;
