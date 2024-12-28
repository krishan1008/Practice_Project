import { API_PATH } from '../constant/path';


const handleFetch = (url, method) => {

    return new Promise((resolve, reject) => {
        fetch(API_PATH + url, {
            method: method,
        })

            .then((e) => e.json())
            .then((e) => {
                if (e.status === 200) {
                    resolve(e.data);
                }
                else {
                    reject(e.message);
                }
            })
            .catch((err) => console.log(err));
    });
};



export const LOGIN_SERVICE = (phone) => {
    return handleFetch(`logincheck&username=${phone}`, 'GET');

};

export const VERIFY_LOGIN = (phone,otp)=>{
    return handleFetch(`verifylogin&username=${phone}&passwd=${otp}`,'GET')
}