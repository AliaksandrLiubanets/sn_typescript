import axios from "axios";

type ItemUserType =  {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: false
}

type GetRequestUsers = {
    "items": [
        {
            "name": "lbadtripl",
            "id": 22240,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }
    ],
    "totalCount": 17248,
    "error": null
}

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