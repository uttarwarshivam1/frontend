import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

const AddStudent = () =>
{

      const [student , setStudent] = useState({});
      
      const handleForm = (e) =>
      {
         console.log(student);
          postData (student);

         e.preventDefault();
      };

               // function to add data on sts/ sql
               const postData= (data) =>
               {
                //console.log("In");
                    axios.post(`${base_url}/students`,data).then
                    (
                         (response)=>{
                             console.log(response);   
                             toast.success("Student data added successfully" ,{position:"bottom-center"});   
                         } , 
                         (error)=>
                         {
                               console.log(error);
                         }

                    );
               };


    return (
        <Fragment>
            <h2>Fill Student Details </h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Student ID</label>
                    <Input type="text" placeholder="Enter Here " name="userId" id="userId" style={{color : "blueviolet"}} 
                     onChange={ (e)=> 
                     {
                        setStudent({...student, id:e.target.value});
                     }} />
                </FormGroup>
                <FormGroup>
                    <label for="title">Student Name</label>
                    <Input type="text" placeholder="Enter Title here" name="title" id="title" 
                     onChange={ (e)=> 
                        {
                           setStudent({...student, name:e.target.value});
                        }} /> 
                </FormGroup>
                <FormGroup>
                    <label for="description">Student Description</label>
                    <Input type="textarea" placeholder="Enter Description here" id="description" 
                     onChange={ (e)=> 
                        {
                           setStudent({...student, description:e.target.value});
                        }}  />
                </FormGroup>
                <FormGroup>
                    <label for="city">Student city</label>
                    <Input type="textarea" placeholder="Enter city here" id="city" 
                     onChange={ (e)=> 
                        {
                           setStudent({...student, city:e.target.value});
                        }}  />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success ml-2">Add Student</Button>
                    <Button type="reset" color="warning mr-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddStudent;