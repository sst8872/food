import { useEffect, useState } from 'react';
import yelp from '../apis/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage("Something went wrong. Try again");
        }
    };

    useEffect(() => {
        searchApi("pasta");
    }, [])

    return [results, errorMessage, searchApi];
};