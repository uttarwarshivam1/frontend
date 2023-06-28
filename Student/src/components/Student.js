import axios from "axios";
import React from "react";
import {Card , CardBody , CardTitle , CardSubtitle , CardText, CardFooter 
, Botton , Container, Button } from "reactstrap" ;
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

const Student = ({student , update }) =>
{

         const  deleteStudent=(id)=>{
            axios.delete(`${base_url}/students/${student.id}`).then
            (
                (response)=>{
                    toast.success("Data Deleted Successfully");
                    update(id);
                },
                (error)=>{
                          toast.success("Data NOT deleted !!");
                }
            );
         }; 

return (
    <Card className="text-center">
        <CardBody>
            <CardSubtitle tag="h5" >{student.id}</CardSubtitle>
            <CardText>{student.name}</CardText>
            <CardText>{student.description}</CardText>
            <CardText>{student.city}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteStudent(student.id);
                }}>Delete</Button>
                <Button color="warning" >Update</Button>
            </Container>
        </CardBody>
    </Card>
);
};

export default Student ;