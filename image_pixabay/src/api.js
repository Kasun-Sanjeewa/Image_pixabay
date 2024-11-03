import axios from "axios";
const API_KEY = '44183681-67a8eacac63dc1adef082c12f';
const searchImages = async () => {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=`, {

            params: {
                q: 'car',
                per_page: 10
            }
        });
        console.log(response.data.hits);
        return response;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export default searchImages;