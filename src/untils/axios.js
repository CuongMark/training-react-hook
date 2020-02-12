import axios from 'axios';

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgzNTA5Yi0yYjliLTRmMDUtYTFlYS02ZWRmNmEwZmNmNGEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1ODA4OTQxMDcsImV4cCI6MTU4MTc1ODEwN30.V_i0z4wNN-gOGI5MmqtzFwq0ObsLi__F8gANTeLOKCFK7x_yNlRSEroiDGUmosuDpz3eh0VFbLFC1WahgokUMw';
// TODO get token from browser index database
// config here so you don't have to set it in other place and easy to update if you change the end point
export default axios.create({
    baseURL: 'http://3.0.94.193:4000//', // TODO get the api server end point from .env
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
});