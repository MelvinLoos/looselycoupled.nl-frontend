import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_COCKPIT_BASEURL,
  params: {
    token: process.env.VUE_APP_COCKPIT_TOKEN
  }
})
