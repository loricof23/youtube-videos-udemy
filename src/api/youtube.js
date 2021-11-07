import axios from 'axios';

const API_KEY = 'AIzaSyD9ZLxKpVk8H0qiY5hZ0-zuqwmF2LwnPZc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY
  }
});