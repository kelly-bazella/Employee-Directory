import React from 'react';

function Header (){
    return (
        <div className="container">
            <div className="jumbotron">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Please enter the first of last name of an employee you would like to know more about.</p>
            <hr className="my-4" />
            <input placeholder="Name"></input>
        </div>
        </div>  

    )
}

export default Header;