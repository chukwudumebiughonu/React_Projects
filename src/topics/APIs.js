import axios from 'axios';

axios.get(`http://www.reddit.com/r/reactjs.json`)
  .then(response => {
    const posts = response.data.data.children.map(
      obj => obj.data
    );
    console.log(post);
  })
  .catch(error => {
    console.error(error);
  });



  // using the Fetch API

fetch('http://www.reddit.com/r/reactjs.json')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed');
  })
  .then(json => [
    const posts = res.data.data.children.map(
      obj => obj.data
    );
console.log(posts);
  ])
  .catch(error => {
  console.error.(error);
  })