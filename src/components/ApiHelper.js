import axios from 'axios';

export default function ApiHelper(httpObj, successHandler, errorHandlder) {
  axios.request(
    {
      url: httpObj.url,
      method: httpObj.method || 'get',
    },
  )
    .then((response) => { successHandler(response.data); })
    .catch(() => { errorHandlder(); });
}
