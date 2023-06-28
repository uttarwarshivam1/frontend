import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name, title})
{
    return (
        <div>
           <Card style={{margin : "10px", backgroundColor:"orange"}}>
            <CardBody>
            <h1 style={{color:"black" , margin :"20px"}}>Welcome to Student Management System by Shivam  Uttarwar</h1>
            </CardBody>
           </Card>
        </div>
    );
}

export default Header ;