import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 
            "Client-ID f219bf3e9421a81ac8ff87e68cff8ef8c395f968fae56efc7b86dc0eca214606"
    }
});