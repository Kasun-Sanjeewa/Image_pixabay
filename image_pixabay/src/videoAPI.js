import axios from "axios";
const API_KEY = 'API';
const searchVideos = async (term) => {
    try {
        const response = await axios.get(`https://pixabay.com/api/videos/?key=${API_KEY}&q=`, {

            params: {
                q: term,
                per_page: 12
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

export default searchVideos;
