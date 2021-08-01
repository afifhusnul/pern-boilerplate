import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Api from '../utils/Service.js'

export default function useFindUser() {

    const router = useRouter()
    const [user, setUser] = useState(null);
    // const [isLoading, setLoading] = useState(true);

    const findUser = async () => {
       return Api.get('/auth').then(res =>{
          //console.log(res.data.response[0].username)
          setUser(res.data.response)
          // setUser(res.data.response[0]);
        })
       .catch(err => { 
          // router.push('/login')
          // setLoading(false);
          // console.log(err)
        });
    };
    
    return {
        findUser,
        user,
        setUser,
        // isLoading
    }
}