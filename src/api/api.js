import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ec259ea8-b888-43af-83e9-f75c638bfe8f"
    }
})



export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
}