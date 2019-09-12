import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer VHkKlcWa2MpVytAemGOnbPxBfjvOsBZlkbE2DrFRczRyHrHTGIxaOoGThXXgDrwKjd74N3-ltucVlKBGfG83jwnu3xIyDXwQNtQM4snLq6NgvYw1Dd6KMbDh7yVxXXYx"
    }
})