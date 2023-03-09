import React, { useState } from "react";
import axios from 'axios';


function Case_Form() {
  let url= "http://localhost:5000/" 
  const [state, setState] = useState({
    Date: "",
    County: "",
    State: "",
    Cases:"",
    Deaths: "",
  });

  
 
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    alert('A name was submitted: ' + e.target.value);
    e.preventDefault();
  };
  const OnSubmit=(e) =>
  {
  
    
   e.preventDefault();
   const casedata={
           Date:state.Date,
           County:state.County,
           State:state.State,
           Cases:state.Cases,
           Deaths:state.Deaths

   }
   
   axios.post(url+"addcases", casedata)
   .then(res => console.log(res.data));
   alert('A New Case Submited Succesfully');
   e.preventDefault();
   }

   
  return (
    <div style={{marginTop: 10}}>
      <h3>Add Case</h3>
      <form onSubmit={OnSubmit} method="Post">
        <div className="form-group"> 
          <label className="label">Case Date: </label>
          <input  className="form-control"
            type="text" name="Date"
            value={state.Date}
            onChange={handleChange}
            placeholder="Date Format DD/MM/YYYY"/>
        </div>
        <div className="form-group"> 
          <label>County: </label>
          <input  className="form-control"
            type="text" name="County"
            value={state.County}
            onChange={handleChange}
            placeholder="County Name"/>
        </div>
        <div className="form-group"> 
          <label>State: </label>
          <input  className="form-control"
            type="text" name="State"
            value={state.State}
            onChange={handleChange}
            placeholder="State Name"/>
        </div>
        <div className="form-group"> 
          <label>Cases: </label>
          <input  className="form-control"
            type="text" name="Cases"
            value={state.Cases}
            onChange={handleChange}
            placeholder="Number of Cases Registered"/>
        </div>
        <div className="form-group"> 
          <label>Deaths: </label>
          <input  className="form-control"
            type="text" name="Deaths"
            value={state.Deaths}
            onChange={handleChange}
            placeholder="Number Of Deaths Registered"/>
        </div>
        
        <div className="form-group">
        <center>
            <input type="submit" value="Add this case" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>COUNTY</th>
                            <th>STATE</th>
                            <th>CASES</th>
                            <th>DEATHS</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
      
    </div>
  );
 
}

export default Case_Form;
