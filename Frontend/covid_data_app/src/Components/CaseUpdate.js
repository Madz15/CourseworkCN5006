import React, {useEffect, useState } from "react";
import axios from 'axios';

function Case_UpDateForm(props) {
  const [state, setState] = useState({
    Date: "",
    County: "",
    State: "",
    Cases:"",
    Deaths: "",
  });
  const [StatedLoaded, Set_StatedLoaded]=useState(false)
  let url= "http://localhost:5000/"
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
// this is on compunt Did Mount Event analogy
useEffect(() => {
    axios.get('http://localhost:5000/getcase/'+props.match.params.id)
        .then(res => {
            // set the state variable from the data received from the axios api
            setState(res.data)
        }) //
       
        .catch(err => {
          console.log("error has occured")
        })
}, [20]);

useEffect(() => {
    if (state.length>0)
    Set_StatedLoaded(true)
 }, [state]);

 
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
    
    axios.post(url+"updatecase/"+props.match.params.id, casedata)
    .then(res => console.log(res.data));
    alert('Case Updated Succesfully!')
    

   }
  return (
    <div style={{marginTop: 10}}>
      <h3> Update Case Id: {props.match.params.id}</h3>
      <form onSubmit={OnSubmit} method="Post">
      <div className="form-group"> 
          <label>Date: </label>
          <input  className="form-control" type="text" name="Date"
            value={state.Date}
            onChange={handleChange}
          />
      </div>
        
       <div className="form-group"> 
          <label>County: </label>
          <input  className="form-control" type="text" name="County"
            value={state.County}
            onChange={handleChange}
          />
      </div>
	<div className="form-group"> 
          <label>State: </label>
          <input  className="form-control" type="text" name="State"
            value={state.State}
            onChange={handleChange}
          />
      </div>
	<div className="form-group"> 
          <label>Cases: </label>
          <input  className="form-control" type="text" name="Cases"
            value={state.Cases}
            onChange={handleChange}
          />
      </div>
	<div className="form-group"> 
          <label>Deaths: </label>
          <input  className="form-control" type="text" name="Deaths"
            value={state.Deaths}
            onChange={handleChange}
          />
      </div>
        <center>
        <div className="form-group">
                        <input type="submit" value="UpDate" className="btn btn-primary" />
                    </div>
        </center>            
      </form>
      
    </div>
  );
}

export default Case_UpDateForm;
