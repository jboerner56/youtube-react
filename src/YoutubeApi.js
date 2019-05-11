import axios from 'axios';
const apiKey = 'AIzaSyBucCifjcZm6dGx1Lt0nyF0X9t07X-w_S0';

export default axios.create({
    url: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: 3,
        key: apiKey
    }
})

