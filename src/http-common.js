import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.COCKPIT_BASEURL,
  params: {
    token: process.env.COCKPIT_TOKEN
  }
})
