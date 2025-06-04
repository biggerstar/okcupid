import { SERVER_API } from '@/config';
import axios from 'axios';
export const request = axios.create({
  baseURL: SERVER_API
})
