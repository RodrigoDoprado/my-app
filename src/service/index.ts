import axios from "axios"

export const Api = axios.create({
    // baseURL: "https://reqres.in/api/",
   // baseURL: "http://localhost:5000/",
baseURL: "https://apiback-end.herokuapp.com/",
}) 
