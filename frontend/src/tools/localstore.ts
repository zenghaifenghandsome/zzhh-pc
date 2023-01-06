import store from 'storejs'
import { api_getUserInfo } from './ajax'

export const saveUser = (user:any) =>{
    store.set({user:user})
}
export const getUser = () => store.get("user")
export const removeUser = () => store.remove("user")

export const userUpdata = () =>{
    let newUser = store.get("user")
    api_getUserInfo(newUser.userid).then((req:any)=>{
        newUser.avator=req.data.userinfo.avater
        saveUser(newUser)
    }).catch((err:any)=>{console.log(err)})
    
    
}