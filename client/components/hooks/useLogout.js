// import { useHistory } from 'react-router-dom';
import { useRouter} from 'next/router'
// import { useHistory } from 'react-router-dom';
import Api from '../utils/Service.js'

export default function useLogout() {
    const router = useRouter()
    // let history = useHistory();

    const logoutUser = async () => {
      try {           
       await Api.get('/auth/logout')
         .then(res => {
             router.reload('/');
             // history.push('/');
         })
      } catch(err) {
          console.log(err);
      } 
    }

    return {
        logoutUser
    }

}
