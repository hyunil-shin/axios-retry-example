const axiosRetry = require('axios-retry');
const axios = require('axios')

// axios-retry 라이브러리 활용
// status 500 에서만 retry 할 수 있다.

//const client = axios.create({ baseURL: 'http://localhost:3000' });
const client = axios.create();
axiosRetry(client, { retries: 0 });

// Allows request-specific configuration
client
  .get('http://localhost:3000/echo?status=500', {
    'axios-retry': {
      retries: 5,
      retryDelay: axiosRetry.exponentialDelay
    }
  })
  .then(res => {
  	//console.log(res)
  	console.log("ok, not retry")
  })
  .catch(error => { // The first request fails
    //console.log(error)
    console.log("error")
  });
