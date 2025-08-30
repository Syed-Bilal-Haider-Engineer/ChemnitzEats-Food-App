import { persistore } from "../store/store";

export const onStoreReady = async() => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (persistore.getState().bootstrapped) {
        clearInterval(interval);
        resolve(null);
      }
    });
  });
};
