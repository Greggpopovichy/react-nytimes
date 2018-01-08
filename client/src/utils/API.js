import axios from "axios";

export default {
    search: function(query) {
        return axios.get("/api/articles", {params: {q:query}});
    }
};
