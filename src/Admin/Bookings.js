import React, { useEffect, useState } from 'react';
import axios from './components/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Bookings() {
  const [users,setUsers]=useState([]);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [selectedfile, setSelectedFile] = useState([]);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            name:'',
            email:'',
            special_request:'',
           
            //password:''
        });
    setShow(true);
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`bookings/list.php`)
    setUsers(res.data);
  }

  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        name:e.target.name.value,
        name:e.target.email.value,
        email:e.target.special_request.value,
        //contact_no:e.target.contact_no.value,
        service_name:e.target.service_name.value,
        service_name:e.target.service_date.value
        //password:e.target.password.value
    }
    
    datas ={...inputs, ...datas} // marge two object
   
    const formData = new FormData();
    for (let i = 0; i < selectedfile.length; i++) {
      formData.append('files[]', selectedfile[i])
    }
    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url='';
      if(datas.id!=''){
        url=`bookings/update.php`;
      }else{
        url=`bookings/add.php`;
      }
     
      let response= await axios.post(url,formData);
     
      if(response.data.error == 1){
        alert(response.data.message)
      }else{
        getDatas();
        handleClose()
      }
    } 
    catch(e){
      console.log(e);
    }
  }
  /* function for edit */
  const showEdit=(e) => {
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`bookings/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Bookings</h1>
        
        {/* <Button variant="primary" onClick={handleShow}>
          Add New
        </Button> */}
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Name</th>
            {/* <th>Contact</th> */}
            <th>Email</th>
            {/* <th>Image</th> */}
            <th>Service Name</th>
            <th>Service Date</th>
            <th>Special Request</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {users && users.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.name}</td>
              {/* <td>{d.contact_no}</td> */}
              
              <td>{d.email}</td>
              <td>{d.service_name}</td>
              
              <td>{d.special_request}</td>
              <td><img src={`${process.env.REACT_APP_API_URL}${d.image}`} width="100px"/></td>
              <td>
                  <Button variant="primary" onClick={()=>{showEdit(d)}}>Edit</Button>
                  <Button variant="danger" onClick={()=>{deleteUser(d.id)}}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </table>


      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' defaultValue={inputs.name} className='form-control' name="name" id='name'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' defaultValue={inputs.email} className='form-control' name="email" id='email'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='contact_no'>Service Name</label>
                  <input type='text' defaultValue={inputs.service_name} className='form-control' name="service_name" id='service_name'/>
              </div>
              {/* <div className='form-group'>
                  <label htmlFor='image'>Photo</label>
                  <input type='file' onChange={handelFile} className='form-control' name='image' id='image'/>
              </div> */}
              <div className='form-group'>
                  <label htmlFor='password'>Service Date</label>
                  <input type='text' className='form-control' name='service_date' id='service_date'/>
              </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type='submit'>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      </div>
    </Adminlayout>
    
  );
}


export default Bookings;
