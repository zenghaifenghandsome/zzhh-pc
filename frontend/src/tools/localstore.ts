import store from 'storejs'

export const saveUser = (user:any) =>{
    store.set({user:user})
}

export const getUser = () => store.get("user")
export const removeUser = () => store.remove("user")