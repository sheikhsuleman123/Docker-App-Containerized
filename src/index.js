import React from 'react' ;
import ReactDOM from 'react-dom' ;  
import './index.css' ;
class Form extends React.Component{
    render(){
        return(
            <div>
                <center>
            <h1> Component 1 </h1>
            <form>
                <table>
                <tr> <th>UserName:</th>  <td><input type="text" id="name" /> </td></tr>
                <tr> <th>Email:</th> <td><input type="text" id="email" /></td></tr>
                <tr> <th>Password:</th> <td><input type="password" id="pass" /></td></tr>
                <tr> <th>City:</th> <td><input type="text" id="pass" /></td></tr>
                <tr> <th>Qualification:</th> <td><input type="text" id="pass" /></td></tr>
                <tr> <th>Fone #:</th> <td><input type="text" id="pass" /></td></tr>
                <tr> <th>Address:</th> <td><input type="text" id="pass" /></td></tr>
<br />
   <tr><td> </td> <td><button type="Submit"> <b> Submit </b></button></td></tr>
    </table>
    </form>
    </center>
            </div>
        )
    }
}
ReactDOM.render(<Form />,document.getElementById('root'))



class Hello extends React.Component{
    render(){
        return(
            <div>
                  <h1> Component 2 </h1>  
                  <p>This is the paragraph</p>
                  </div> 
        )
    }
}
ReactDOM.render(<Hello />,document.getElementById('heading'))


//Andrew Lecture 1 Prectise JSX expression

// create properties by variables
var fname = 'Suleman';
var fclass = '';
var fage = '27';
var fplace = '';

//create object
var s = {
    name : 'Sameer',
    class : 'BSSE',
    age : '22',
    place : 'GMDC' 
} 

function check(name){
if(name){
   return  fname ;
}else{
   return 'Anonymas';
}

}

  var template1 = (
<div>                                  
                            {/* Name check by function call */}
<h1> Name  : {check(fname)} </h1>
                             {/* Null Check by if else  */}
<p>  Class : {fclass ? fclass : 'Empty'  }</p>
<p>  Place : {fplace ? fplace :  'Empty' }</p>
                             {/* Check Null by logical operator */}
  {( fage && fage>=25 )  &&        <p>Age: {fage}</p>}

</div>
   );



var template2 = (
    <div>
        <h1>Name : {s.name}</h1>
        <p>Class : {s.class}</p>
        <p>Age  :  {s.age}</p>
        <p>Place : {s.place}</p>
    </div>
       );
    

       var appRoot = document.getElementById('suleman');
       ReactDOM.render(template1, appRoot);  
           
       var appRoot = document.getElementById('sameer');
    ReactDOM.render(template2, appRoot);  
    




