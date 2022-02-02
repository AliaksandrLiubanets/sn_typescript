import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec259ea8-b888-43af-83e9-f75c638bfe8f"
    }
})



export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
}