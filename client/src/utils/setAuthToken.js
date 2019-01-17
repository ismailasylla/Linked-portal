import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common['Authorisation'] = token;
  } else {
    // Delete auth Header
    delete axios.defaults.headers.common['Authorisation'];
  }
};

export default setAuthToken;
