import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mHRG-nZhfapJ4Lb0-lyJkwBf3RN3quVEaqEfYHxtTljBZ-5Fu8v37oE0MM-4NHt-QBvOihZG54kU06wdaMaN3CQe5hHXEgOqPqJbwZVvJw_SoiG-eJ8d3UCpmIkMYHYx'
    }
});