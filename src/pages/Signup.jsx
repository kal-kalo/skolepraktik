import Form from "../components/Form";

export default function Signup() {

  const fields = [
    { type: 'email', placeholder:'email' },
    { type: 'password', placeholder:'password' },
    { type: 'submit', value: 'Submit'},
  ];
  function handleSubmit(e){
    e.preventDefault()
    console.log('Submitted')
  }
    return (
      <div className="contact-os">
        <h1>Sign up</h1>
        <Form onSubmit={handleSubmit} inputs={fields}/>
      </div>
    )
  }