import axios from 'axios';

export default {
    //get all the gigs 
    getGigs: function () {
        return axios.get('/api/gigs');
    },
    //get the gig with the given id
    getGig: function (id) {
        return axios.get('api/gigs/' + id);
    },
    //delete the gig with the given id
    deleteGig: function (id) {
        return axios.delete('api/gigs/' + id);
    },
    //saves a gig to the database
    saveGig: function (gigData) {
        return axios.post('api/gigs', gigData)
    }
};