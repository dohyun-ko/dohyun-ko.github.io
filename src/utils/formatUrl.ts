const formatUrl = (url: string) => {
  return url.replace("https://", "").replace("http://", "").replace(/\/$/, "");
};

export default formatUrl;
