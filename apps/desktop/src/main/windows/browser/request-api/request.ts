import { SERVER_API } from '@/enum/api';
import axios from 'axios';
export const request = axios.create({
  baseURL: SERVER_API
})
