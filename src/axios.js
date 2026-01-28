import axios from 'axios'
import { baseUrl } from './constants/constants';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmVkMmQ4MTAwYzI3ZTA4ZGU3OWNhMTQ4Zjc1YzJiZSIsIm5iZiI6MTc2ODgzMjU1NC43MDEsInN1YiI6IjY5NmUzZTJhZmIzODViMjRkYWRjYjllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W4SJKFXG6IGLiefjkcu0aQFPM2BfPEha88dOv2tOkls"
  }});
  
export  default instance;