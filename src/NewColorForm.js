import React, { useState } from "react";
import { Link,  useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const history = useHistory();  
  const INITIAL_STATE = {
    color:'',
    code:'#f00000'
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.code);
    addColor({ ...formData });
    setFormData(INITIAL_STATE)
    history.push('/colors')
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>Add a Color</h1>
      <div>
        <label htmlFor="color">Name: </label>
        <input
            id="color"
            type="text"
            name="color"
            placeholder="name"
            value={formData.color}
            onChange={handleChange}
        />
      </div>
      <div>
      <label htmlFor="code">Color: </label>
        <input
            id="code"
            type="color"
            name="code"
            value={formData.code}
            onChange={handleChange}
        />
      
      </div>
      <div>
        <button>Add Color</button>
      </div>
    </form>
    <Link to={`/colors/`}>Go Back</Link>
    </div>
  )
}
export default NewColorForm;
