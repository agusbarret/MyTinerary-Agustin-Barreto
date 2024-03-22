import axios from 'axios'

const register = async ( data ) => {
    try {
        const res = await axios.post( 'http://localhost:4000/api/auth/register', data )
        return res.data 
    } catch (error) {
        return error.res.data
    }
}

const login = async ( data ) => {
    try {
        const res = await axios.post( 'http://localhost:4000/api/auth/login', data )
        localStorage.setItem( "token", res.data.data.token )
        return res.data 
    } catch (error) {
        return error.res.data
    }
}
const loginWithToken = async ( ) => {
    try {
        const token = localStorage.getItem( 'token' )
        const res = await axios.post( 'http://localhost:4000/api/auth/token',{}, {
            headers: { Authorization: `Bearer ${token}` }
        } )
        return res.data 
    } catch (error) {
        return error.res.data
    }
}

export default {
    register,
    login,
    loginWithToken
}