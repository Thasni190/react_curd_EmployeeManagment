import React from 'react';
import { IEmployee } from './Employeetype';


type props={
    onclose:()=>void;
    data:IEmployee
}
function EmployeView(props:props) {
    const{onclose,data}=props
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur">
<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Employee Details</h1>
        </div>

      <div>
        <div><label htmlFor="">FirstName : {data.firstName}</label></div>
        <div><label htmlFor="">Lastname : {data.lastName}</label></div>
        <div><label htmlFor="">Email : {data.email}</label></div>


      </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={onclose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeView;
