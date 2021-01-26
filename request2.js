const rax = require('retry-axios');
const axios = require('axios')

// retry-axios 라이브러리 사용
// 다양한 옵션이 있다.

const interceptorId = rax.attach();

// Call start
(async() => {
  console.log('before start');

  const res = await axios({
    url: 'http://localhost:3000/echo?status=400',

    'raxConfig': {
      retries: 5,
      noResponseRetries: 2,
      // The response status codes to retry.  Supports a double
      // array with a list of ranges.  Defaults to:
      // [[100, 199], [429, 429], [500, 599]]
      statusCodesToRetry: [[100, 199], [400, 429], [500, 599]],
      // You can set the backoff type.
      // options are 'exponential' (default), 'static' or 'linear'
      backoffType: 'exponential'

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


  console.log('after start');
})();