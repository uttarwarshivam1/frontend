import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () =>
{
    return (
          <ListGroup>
            <Link className="list-group-item list-group-item-action " tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action " tag="a" to="/add-student" action>Add Student</Link>
            <Link className="list-group-item list-group-item-action " tag="a" to="/view-students " action>View Student List</Link>
            <Link className="list-group-item list-group-item-action " tag="a" to="/Aboutus" action>About Us</Link>
            <Link className="list-group-item list-group-item-action " tag="a" to="#!" action>Contact Us</Link>

          </ListGroup>
          
    );
};

export default Menus ;