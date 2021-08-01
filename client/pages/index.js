import React, { useContext, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'
import { UserContext } from '../components/hooks/useContext.js';
import useLogout from '../components/hooks/useLogout';

export default function Home() {  
  //if user exists, it should be set by now
  const { user } = useContext(UserContext);
  const { logoutUser } = useLogout();   

  let currentUser;
  (user ? currentUser = user.username :  currentUser = 'NextJS' )
  
  let welcomeUser;
  (user ? 
    welcomeUser = (      
      <>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome Back <a href="https://nextjs.org">{user.username.toUpperCase()}</a>          
          </h1>
          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </main>
      </>
    )
    :
      welcomeUser = (
        <>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">NextJS</a>          
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>
          </main>
        </>
      )
   )

  return (
    <Layout title="Home">
    <div className={styles.container}>
      {welcomeUser}
    </div>
    </Layout>
  )
}
