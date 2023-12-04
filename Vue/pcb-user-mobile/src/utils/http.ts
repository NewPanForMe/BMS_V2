//通讯组件
import axios from "axios";
import router from '../router/index'
import cookie from "./cookies";
import { Message } from 'tdesign-mobile-vue';


const showMessage = (theme: string, content: string) => {
    if (Message['error']) {
        Message[theme]({
            offset: [10, 16],
            content,
            duration: 5000,
            icon: true,
            zIndex: 20000,
            context: document.querySelector('.button-demo'),
        });
    }
};

const showSuccess = (content: string) => showMessage('success', content);
const showError = (content: string) => showMessage('error', content);
const showWarning = (content: string) => showMessage('warning', content);
const showInfo = (content: string) => showMessage('info', content);


const instance = axios.create({
    baseURL: "http://127.0.0.1:20000/BMSV2Service/",
    timeout: 10000
});
//统一设置post请求头
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers.get["Content-Type"] = "application/json";

//添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        //判断cookie是否存在
        var token = cookie.getToken();
        if (token) {
            //存在,放入请求头
            config.headers.Authorization = "Bearer " + token.tokenName;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
//添加resp拦截器
instance.interceptors.response.use(
    (resp) => {
        //如果返回的结果为true
        if (resp.data != null) {
            return resp.data;
        }
    },
    (error) => {
        showError(error.message)
        if(error.response.status==401){
            cookie.removeToken();
            router.push("/");
        }
    }
);
export default { instance };
