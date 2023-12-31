import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjNjZDNlOGJkODc2NGFjOTA1MWNkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjIyODk3OCwiZXhwIjoxNjgyNDg4MTc4fQ.PFu7-b2QRmKhCMT9FsJB9oj02LRAseylnhYJgQYvZcQ"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest= axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})