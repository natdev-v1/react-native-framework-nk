export default (http) => {
  const login = async (url, param) => {
    return await http.get(url, param);
  };
  return {
    login,
  };
};
