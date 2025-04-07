export const getOrFetchData = async (
  key: string,
  fetchFn: () => Promise<any>
) => {
  const localValue = localStorage.getItem(key);
  if (localValue) {
    return JSON.parse(localValue);
  }
  const data = await fetchFn();
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};
