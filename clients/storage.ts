export const setStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key: string) => {
  const val = window.localStorage.getItem(key);
  if (!val) return "";
  return JSON.parse(val);
};
