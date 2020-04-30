import React from 'react';

function Employee(props){
    console.log(props)
    return (
       <div>
           <div className="container">
               <div className="row">
               <div className="col-md-2">
                    <img src={props.image} alt="employee" />
                </div>  
                 <div className="col-md-2">
                    <p>{props.first} {props.last}</p>
                </div>  
                <div className="col-md-2">
                    <p>{props.email}</p>
                </div>  
                <div className="col-md-2">
                    <p>{props.id}</p>
                </div>  
                <div className="col-md-2">
                    <p>{props.phone}</p>
                </div>  
                <div className="col-md-2">
                    <p>{props.username}</p>
                </div>  
               </div>
           </div>
       </div> 
    )
}

export default Employee;