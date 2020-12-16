import config from '../config'

const AdoptionService = {
    fetchDogs = () => {
        fetch(`${config.API_BASE_URL}/pets/api/getalldogs`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                res.json();
            });
    },

    fetchCats = () => {
        fetch(`${config.API_BASE_URL}/pets/api/getallcats`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json()
            })
    }
}


export default AdoptionService;

