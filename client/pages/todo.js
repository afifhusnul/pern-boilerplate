import React, { useState,useEffect,useContext } from "react"
import * as IconBS from "react-icons/fc";
import { NextPageContext } from "next";
import { useRouter } from 'next/router'
import Api from '../components/utils/Service.js'
import Layout from '../components/layout/Layout'
import Paginations from '../components/utils/Paginations';
import { UserContext } from '../components/hooks/useContext.js';
import useLogout from '../components/hooks/useLogout';
import Modal from '../components/forms/Modal'

import {Form, Button, Toast, Table} from "react-bootstrap";
import useCustomForm from '../components/hooks/useCustomForm';
import InputField from "../components/hooks/InputField";


export default function todo({todos}) {
  
  const router = useRouter()
  const { user } = useContext(UserContext);
  const { logoutUser } = useLogout(); 
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [show, setShow] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(data.length/postsPerPage)

  const initialValues = {
      todo_title: "",
      todo_desc: ""      
    };

  const {
      values,
      errors,      
      handleChange,      
    } = useCustomForm({ initialValues });    


  useEffect(() => {    
    const fetchData = async () => {
      try {                
        const result = await Api.get('/todo') //get All Todos current user
        setData(result.data.response)
      } catch(e) {        
        // Not authorized force to login
        await router.push('/login');
      }
    }
    fetchData();
  },[refreshKey])

  const AddUpdateTodo = async(event) => {
    event.preventDefault()    

      await Api.post('/todo', values )
        .then(res=>{
          setShow(true)
          setRefreshKey(oldKey => oldKey +1)
          router.push('/todo') //Once create data success push to the same page
          setShowModal(false)
        })  
        .catch(error=>{          
            setError('Error : '+ error.response.data.meta.errorDescription.messages)
            // console.log('Error' +error.response.data.meta.errorDescription.messages)
            // setError('Error : '+error.response)
        }); 
  }

  let alertSuccess;
  if (show) {
    alertSuccess = (
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>        
        <Toast.Body>Add Data success!</Toast.Body>
      </Toast>
      )
  }


  let msgError;
  if (error) {
    msgError = (
      <div className="row mt-2">
        <div className="col">
          <label style={{color: 'red'}}>{error}</label>
        </div>                   
      </div>
    )
  }
  
  

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
              <div className="card" style={{ width: '40rem' }} >
                <div className="card-header">Todo Input</div>
                  <div className="card-body">
                    <form onSubmit={AddUpdateTodo}>
                      <InputField
                        type="text"
                        value={values.todo_title}
                        placeholder="Title"
                        label="Title"
                        name="todo_title"
                        onChange={handleChange}
                        />
                      <InputField
                        type="text"
                        value={values.todo_desc}
                        placeholder="Desc"
                        label="Description"
                        name="todo_desc"
                        onChange={handleChange}
                        />                      
                        <Button type="submit" className="btn btn-sm pl-2" >Add</Button>
                        {msgError}
                    </form>
                  </div>
                </div>
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