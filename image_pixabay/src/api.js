import axios from "axios";
const API_KEY = '44183681-67a8eacac63dc1adef082c12f';
const searchImages = async (term, page = 1) => {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=`, {
            params: {
                q: term,
                per_page: 30,
                page: page, // Add page parameter
            }
        });
        console.log(response.data.hits)
        return response.data.hits;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export default searchImages;