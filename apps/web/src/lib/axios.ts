import { appConfig } from "@/utils/config";
import axios, { AxiosInstance } from "axios";



const { baseURL } = appConfig;

export const axiosInstance: AxiosInstance = axios.create({
    baseURL,
})