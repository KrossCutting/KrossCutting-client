const SERVER_URL = import.meta.env.VITE_SERVER_HOST;

const API = {
  URLS: `${SERVER_URL}/videos/contents/urls`,
  FILES: `${SERVER_URL}/videos/contents/files`,
  COMPILATIONS: `${SERVER_URL}/videos/compilations`,
};

export default API;
