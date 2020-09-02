import * as express from 'express';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
//import { API_BASE_URL } from '../configs/api.config';

const router = express.Router();

router.get('/', async (req, res) =>{
    res.render('main', {});
})

router.get('/account/signup', async (req, res) =>{
    res.render('signup', {});
})

router.get('/account/emailCheck', async (req, res) =>{
    res.render('emailCheck', {});
})

router.get('/account/login', async (req, res) =>{
    res.render('login', {});
})

router.get('/account/findIdChecked', async (req, res) =>{
    res.render('findIdChecked', {});
})

router.get('/account/findPw', async (req, res) =>{
    res.render('findPw', {});
})

//알림 기능은 추후 개발 예정
// router.get('/notice/List', async (req, res) =>{
//     res.render('noticeList', {});
// })

router.get('/auction/product_list', async (req, res) =>{
    res.render('auction/productList', {});
})

export default router;


