/* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`http://wip-learn-redux-project-compiler-confizzed13.c9.io:8081/api/food?q=${query}`,
  {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
       }

    }
  ).then(checkStatus)
    .then(
      parseJSON,
      console.log(parseJSON))
    .then(cb);
}

function checkStatus(response) {
  console.log('check status : ', response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // const error = new Error(`HTTP Error ${response.statusText}`);
  // error.status = response.statusText;
  // error.response = response;
  // console.log(error); // eslint-disable-line no-console
  // throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
