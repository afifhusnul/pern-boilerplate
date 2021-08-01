import { useContext } from 'react';
import Api from '../utils/Service.js'
import { UserContext } from './useContext.js';
import { useRouter } from 'next/router'

export default function useAuth() {
    const { setUser } = useContext(UserContext); 
    const router = useRouter()

    const handleAuth = async () => {
        return await Api.get('/auth').then(res =>{
            // setUser(res.data.response);
            setUser(res.data.response);
            // console.log(res.data.response[0]);
           }
        ).catch(err => { 
          router.push('/login')
            // console.log(err)}
        });
    }

    return {
        handleAuth
    }
}
