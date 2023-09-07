import { useState } from 'react';

// Input component to render different input types
function Input( props ) {
  return (
    <div>
      <label>{props.label} </label>
      <input className='border' type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
    </div>
  );
}

// Form component that takes an array of input objects
function Form(props) {

  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={props.onSubmit}>
      {props.inputs.map((input, index) => (
        <Input
          key={index}
          type={input.type}
          label={input.label}
          value={formData[input.value]?formData[input.value]:input.type =='submit'? input.value: ''}
          placeholder={input.placeholder}
          onChange={(e) => handleInputChange(input.value, e.target.value)}

        />))}
    </form>
  );
}

export default Form;
