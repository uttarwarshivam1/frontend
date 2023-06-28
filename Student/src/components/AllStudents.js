import React, { useState , useEffect} from "react";
import Student from "./Student" ;
import base_url from "./../Api/bootapi";
import axios from "axios";
import {  toast } from "react-toastify";


const AllStudents =()=>
{
        useEffect  (() =>
        {
            document.title= "All Students";
            getAllStudentFromServer();
        }, [] );

           
        //function to call server ......

        const getAllStudentFromServer = () =>
        {
            axios.get(`${base_url}/students`).then(
                (response) =>
                {
                      
                    //   toast.success("Student Data Loaded" , {
                    //     position:"bottom-center"
                    //   });
                      setStudents(response.data);
                      
                      
                },
                (error)=>
                {
                      console.log(error);
                }
            );
        } ;
          

    const [students,setStudents]=useState([]);


    const updateStudents =(id)=>{
        setStudents(students.filter((s)=>s.id != id)) ;

    }

    
    return (
               <div>
                <h1>All Students </h1>
                <p >List of Students are as follows </p>
                {
                    students.length>0
                    ? students.map((item)=>(
                        <Student key={item.id} student={item}  update={updateStudents} />
                    )):"No students" 
                }
               </div>
    );
};

export default AllStudents;