import React from 'react'
import axios from 'axios'

const BaseUrl = axios.create({

    // baseURL:'https://aloinfotech.in/api/api',
    baseURL:'http://ec2-15-206-174-128.ap-south-1.compute.amazonaws.com:3000/api', //devurl
    headers:{
        'Content-Type': 'application/json',
    }
});

export default BaseUrl;