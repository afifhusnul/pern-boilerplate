import React, { useState,useEffect,useContext } from "react"
import * as IconBS from "react-icons/fc";
import { NextPageContext } from "next";
import { useRouter } from 'next/router'
import Api from '../components/utils/Service.js'
import Layout from '../components/layout/Layout'
import Paginations from '../components/utils/Paginations';
import { UserContext } from '../components/hooks/useContext.js';
import Modal from '../components/forms/Modal'


export default function todo({todos}) {

  const [showModal, setShowModal] = useState(false);

  const router = useRouter()
  const { user } = useContext(UserContext);
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(data.length/postsPerPage)


  useEffect(() => {    
    const fetchData = async () => {
      try {        
        //const result = await Api.post('/todo', {userId : user._id}) //get All Todos current user
        const result = await Api.get('/todo') //get All Todos current user
        setData(result.data.response)
      } catch(e) {        
        // Not authorized force to login
        await router.push('/login');
      }
    }
    fetchData();
  },[])
  
  

  const rows = currentData.map((single) => (     
    <tr key={single.idtodo}>
      <td>{single.todo_title}</td>
      <td>{single.todo_desc}</td>
      <td>{single.created_at.substring(0,10)}</td>
      <td className="btn">Edit <IconBS.FcReading/>   Delete <IconBS.FcEmptyTrash /></td>
    </tr>
    )
  );

  return (
    <Layout title="Todo List">
      <div className="container-fluid mt-4" >  
        <div className="row justify-content-center">
          <div className="col-4">
            <button className="btn" onClick={() => setShowModal(true)}>Add Data</button>
            <Modal
              onClose={() => setShowModal(false)}
              show={showModal}
            >
              Form ok
            </Modal>
          </div>
          <div className="col-4">
            <Paginations pages ={howManyPages} setCurrentPage={setCurrentPage}/>
          </div>
        </div>    
        <div className="d-flex justify-content-center mt-2">
          <table className="table-striped table-bordered table-hover table-sm rounded mt-2">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Desc</th>
                <th>CreatedAt</th>              
                <th>Operation</th>            
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
          
      </div>
    </Layout>
  )
}