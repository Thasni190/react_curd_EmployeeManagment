import React, { useState } from 'react'
import { IEmployee } from './Employeetype'

type Props = {
  onBackbtn: () => void
  handleOnSubmit: (data: IEmployee) => void
}

function AddEmployee({ onBackbtn, handleOnSubmit }: Props) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

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

    const newEmployee: IEmployee = {
      id: new Date().toISOString(),
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    handleOnSubmit(newEmployee)
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
            Add Employee
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEmployee
