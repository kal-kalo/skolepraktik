import Form from "../components/Form";

export default function Contact() {

  const fields = [
    { type: 'text', label: 'Name', value: 'name', placeholder:'Your name' },
    { type: 'email', label: 'Email', value: 'email', placeholder:'email' },
    { type: 'text', label: 'Your message', value: 'message', placeholder:'Your message' },
    { type: 'submit', value: 'Submit'},
  ];
  function handleSubmit(e){
    e.preventDefault()
    console.log('Submitted')
  }
    return (
      <div className="contact-os">
        <h1>Kontakt os</h1>
        <Form onSubmit={handleSubmit} inputs={fields}/>
      </div>
    )
  }