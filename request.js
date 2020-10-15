const axiosRetry = require('axios-retry');
const axios = require('axios')


//const client = axios.create({ baseURL: 'http://localhost:3000' });
const client = axios.create();
axiosRetry(client, { retries: 0 });

// Allows request-specific configuration
client
  .get('http://localhost:3000/echo', {
    'axios-retry': {
      retries: 5,
      retryDelay: axiosRetry.exponentialDelay
    }
  })
  .then(res => {
  	//console.log(res)
  	console.log("then")
  })
  .catch(error => { // The first request fails
    //console.log(error)
    console.log("error")
  });
