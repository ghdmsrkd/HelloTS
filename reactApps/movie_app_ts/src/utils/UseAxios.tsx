import { useState, useEffect } from 'react';
import defaultAxios from "axios";

const UseAxios = (opts: { url: string }, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: []
    });

    useEffect(() => {
        if (opts.url) {
            axiosInstance(`https://cors-anywhere.herokuapp.com/${opts.url.split('://')[1]}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
                }
            })
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data: data.data.data.movies
                })
            })
            .catch(error => {
                setState({ ...state, loading: false, error })
            })
        }
    }, []);

    return { ...state }
}

export default UseAxios;