import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

const loginUrl = 'login';
const registUrl = 'regist';
const searchUrl = 'search';
const searchListUrl = 'searchList';
const searchProductUrl = 'searchProduct';

export const BaseURL = "http://3.34.97.97/api/";