import axios from "axios";

export default axios.create({  
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  responseType: "json",
  headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
});


