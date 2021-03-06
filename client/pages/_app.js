import { useMemo, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/Pagination.css'
import Layout from '../components/layout/Layout'
import { UserContext } from '../components/hooks/useContext.js';
import useFindUser from '../components/hooks/useFindUser.js'


function MyApp({ Component, pageProps }) {

  const { findUser, user, setUser, isLoading } = useFindUser();

  useEffect(() => {
    async function onPageLoad() {
      await findUser();
    }
    onPageLoad(); 
  }, []);

  const providerValue = useMemo(() => ({ user, setUser, isLoading }), [user, setUser, isLoading]);

  return( 
    <UserContext.Provider value={providerValue}>   
      <Component {...pageProps} />  
    </UserContext.Provider> 

  )
}

export default MyApp
