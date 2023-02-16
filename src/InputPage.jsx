import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';


const InputPage = () => {
  const [data, setData] = useState([]);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  
  const handleSubmit = () => {
    setData([
      ...data,
      {
        input1: input1,
        input2: input2,
        input3: input3
      }
    ]);
  };

  return (
    <div>
       Input 1
      <input type="text" value={input1} onChange={(event) => setInput1(event.target.value)}/> 
      <br/>
      Input 2
      <input type="text" value={input2} onChange={(event) => setInput2(event.target.value)}/>
       <br/>
      Input 3
      <input type="text" value={input3} onChange={(event) => setInput3(event.target.value)}/>
       <br/>
       <nav>
       <Link to="/grid" data={data} >
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>  </Link>
      {/* <Route path="/example" render={(props) => <ExampleComponent myProp={myProp} {...props} />} /> */}
       <Grid data={data}/>
      </nav>
     
    </div>
  );
};

export default InputPage;
