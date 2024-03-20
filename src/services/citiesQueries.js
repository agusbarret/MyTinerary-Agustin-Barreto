import axios from 'axios';

export const getCities = async () => {
    try {
        const res = await axios("http://localhost:4000/api/cities")
        return res.data
    } catch (err) {
        return []
    }
}

export const getCityById = async ( _id ) => {
    try {
        const res = await axios ("http://localhost:4000/api/cities/" + _id) 
        return res.data.data
    } catch (err) {
        return [ ]
    }
}