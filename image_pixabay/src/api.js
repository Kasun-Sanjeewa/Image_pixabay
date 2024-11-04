import axios from "axios";
const API_KEY = '44183681-67a8eacac63dc1adef082c12f';
const searchImages = async (term) => {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=`, {

            params: {
                q: term,
                per_page: 30
            }
        });
        console.log(response.data.hits);
        console.log(term);
        return response.data.hits;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export default searchImages;