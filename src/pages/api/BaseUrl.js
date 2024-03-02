import React from 'react'
import axios from 'axios'

const BaseUrl = axios.create({
    baseURL:'https://aloinfotech.in/api/api',
    headers:{
        'Content-Type': 'application/json',
    }
});

export default BaseUrl;