import {createAction, createReducer} from 'redux-act';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

// export const page_request = createAction('PAGE_REQUEST',()=>({isFetching: true}));
// export const page_receive = createAction('PAGE_RECEIVE',(page)=>page);

export function fetchPage() {
    // return dispatch => {
        // dispatch(page_request());

        // console.log(param);
        return (
            fetch("http://localhost:3000/posts",{
               method:'get',
            //    mode:'nocors',
               headers:{
                   "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
               }
            }).then((res)=>{
                console.log("------res",res);
                return res.json();
            }).catch((e)=>{
                console.log(e.message);
            })

        )
    // }
}

//新增
export function addPage(param) {
    // return dispatch=> {
        return fetch("http://localhost:3000/posts",{
               method:'post',
            //    mode:'nocors',
               headers:{
                   "Content-Type":"application/json;charset=UTF-8"
               },
               body:JSON.stringify(param)
            })
    // }
}

//删除
export function deletePage(param) {
    // return diapatch => {
        return fetch("http://localhost:3000/posts?{id="+param.id+"}",{
            method:'delete',
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            body:JSON.stringify(param)
        })
    // }
}

//更新
export function updatePage(param) {
    return fetch("http://localhost:3000/posts?{id="+param.id+"}",{
        method: "put",
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify({
            title:"second",
            author:"lynn"
        })
    })
}

//搜索
export function searchPage(param) {
    return fetch("http://localhost:3000/posts?title="+param.title+"&author="+param.author,{
        method: "get",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
        }
    }).then((res)=>{
        console.log("^^^^^res",res)
        return res.json();
    })
}