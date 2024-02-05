const SERVER_URL = import.meta.env.VITE_SERVER_HOST;

const API = {
  CONTENTS: `${SERVER_URL}/videos/contents`,
  COMPILATIONS: `${SERVER_URL}/videos/compilations`,
};

export default API;
