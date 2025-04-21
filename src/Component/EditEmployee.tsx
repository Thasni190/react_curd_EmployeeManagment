import React, { useState } from 'react'
import { IEmployee } from './Employeetype'

type props={
    data:IEmployee;
    onBackbtn: () => void;
    onUpdateClick:(data:IEmployee)=>void;
}

function EditEmployee(props:props) {
    const {data,onBackbtn,onUpdateClick}=props;
     const [firstName, setFirstName] = useState(data.firstName)
      const [lastName, setLastName] = useState(data.lastName)
      const [email, setEmail] = useState(data.email);
       const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setFirstName(e.target.value)
        }
      
        const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setLastName(e.target.value)
        }
      
        const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value)
        }
          const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
        
            const updateEmp: IEmployee = {
              id: data.id,
              firstName: firstName,
              lastName: lastName,
              email: email
            }
        
            onUpdateClick(updateEmp)
            onBackbtn()
          }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
    <div className="text-center mb-4">
      <h1 className="text-2xl font-bold">Add Employee Details</h1>
    </div>

    <form onSubmit={onSubmitForm} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={onFirstNameChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={onLastNameChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBackbtn}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Employee
        </button>
      </div>
    </form>
  </div>
  )
}

export default EditEmployee
