export const updateLocal = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
};
