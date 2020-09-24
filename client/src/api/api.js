import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3001/api/",
    headers: {"API-KEY": ""},
    origin: "http://localhost:3000"
});

export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId){
        /*follow(userId);*/
    },
    unfollow(userId){
        /*unfollow(userId);*/
    }
}



