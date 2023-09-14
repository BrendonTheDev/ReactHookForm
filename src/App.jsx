import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = (props) => {
  // const methods = useForm()
  const initialState = {
    fullName: '',
    profession: '',
    email: '',
    phone: '',
    title: '',
    company: '',
    duties: '',
    workDateStart: '',
    workDateEnd: '',
    college: '',
    degree: '',
    collegeDateStart: '',
    collegeDateEnd: '',
  }

  const [formData, setData] = useState(initialState)
  
  const onChange = (e) => {
    const { name, value } = e.target
    setData({ ...formData, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //connect backend api to send to database
    console.log(formData)
  }

  const { fullName, profession, email, phone, title, company, duties, workDateStart, workDateEnd, college, degree, collegeDateStart, collegeDateEnd } = formData
  return (
   <div className='container'>
    <div className='left layout'>
    <h3>Add Personal Information</h3>
     <form onSubmit={onSubmit}>
       <div>
        <input type="text" 
         name='fullName'
         placeholder='Enter Full Name'
         value={fullName}
         onChange={onChange}
        />
       </div>
       <div>
        <input type="text" 
         name='profession'
         placeholder='Enter Profession'
         value={profession}
         onChange={onChange}
        />
       </div>
       <div>
        <input type="email" 
         name='email'
         placeholder='Enter Email'
         value={email}
         onChange={onChange}
        />
       </div>
       <div>
        <input type="tel" 
         name='phone'
         placeholder='Enter Phone'
         value={phone}
         onChange={onChange}
        />
       </div>

       <h3>Add Experience Information</h3>
       <div>
        <input type="text" 
         name='title'
         placeholder='Enter Job Title'
         value={title}
         onChange={onChange}
        />
       </div>
       <div>
        <input type="text" 
         name='company'
         placeholder='Enter Company Name'
         value={company}
         onChange={onChange}
        />
       </div>
       <div>
        <input type="text" 
         name='duties'
         placeholder='Enter Duties'
         value={duties}
         onChange={onChange}
        />
       </div>
        <h4>Employment Start Date</h4>
       <div>
        <input type="date" 
         name='workDateStart'
         value={workDateStart}
         onChange={onChange}
        />
       </div>
       <h4>Employment End Date</h4>
       <div>
        <input type="date" 
         name='workDateEnd'
         value={workDateEnd}
         onChange={onChange}
        />
       </div>

       <h3>Add Education Information</h3>
       <div>
        <input type="text" 
         name='degree'
         placeholder='Degree Earned'
         value={degree}
         onChange={onChange}
        />
       </div>
       <div>
        <input type="text" 
         name='college'
         placeholder='Enter College Name'
         value={college}
         onChange={onChange}
        />
       </div>
    
        <h4>College Start Date</h4>
       <div>
        <input type="date" 
         name='collegeDateStart'
         value={collegeDateStart}
         onChange={onChange}
        />
       </div>
       <h4>College End Date</h4>
       <div>
        <input type="date" 
         name='collegedateend'
         value={collegeDateEnd}
         onChange={onChange}
        />
       </div>
       

      <button className='btn btn-success'>Submit</button>
     </form>
     </div>

     <div className='right layout'>
     <div className='personal-output'>
         <h3>Personal Information</h3>
         <h4>Name: {fullName}</h4>
         <h4>Profession: {profession}</h4>
         <h4>Email: {email}</h4>
         <h4>Phone: {phone}</h4>
     </div>
     <div className='employment-output'>
        <h3>Employment History</h3>
         <h4>Job Title: {title}</h4>
         <h4>Company: {company}</h4>
         <h4>Duties: {duties}</h4>
         <h4>Start Date: {workDateStart} End Date: {workDateEnd}</h4>
     </div>
     <div className='education-output'>
        <h3>Education History</h3>
         <h4>Degree: {title}</h4>
         <h4>College: {company}</h4>
         <h4>Start Date: {collegeDateStart} End Date: {collegeDateEnd}</h4>
     </div>
     </div>
     
   </div>
  )
}

export default App
