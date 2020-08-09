import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import defaultAxios from "axios";

interface movies {

}

const UseAxios = (opts: { url: string }, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: Array
    });

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }

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
                    //console.log(state);
                })
                .catch(error => {
                    setState({ ...state, loading: false, error })
                })
        }
    }, [trigger]);

    return { ...state, refetch }
}

export default UseAxios;