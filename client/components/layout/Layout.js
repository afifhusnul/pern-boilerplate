import Head from 'next/head'
// import Meta from './Meta'
import Navbar from './Navbar'
// import { UserContext } from '../hooks/useContext.js';
import useLogout from './../hooks/useLogout';

export default function Layout(props) {
  // const { user } = useContext(UserContext);
  const { logoutUser } = useLogout(); 

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={props.keywords} />
        <meta name='description' content={props.description} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{props.title}</title>
      </Head>
      <Navbar />
      {props.children}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Training NextJS',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
}

