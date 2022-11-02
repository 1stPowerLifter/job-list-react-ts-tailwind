import axios from 'axios'
import { IJob } from 'type/IJob';

axios.defaults.baseURL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
axios.defaults.headers.common.Authorization = `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

const  fetchJobs =async () => {
    const res = await axios.get<IJob[]>('')
    return res.data
}

export {fetchJobs}