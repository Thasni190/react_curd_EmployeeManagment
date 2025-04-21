import React, { useEffect, useState } from "react";

import {  IEmployee, PageEnum } from "./Employeetype";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

function Home() {
    const[employeeList,setEmployeeList]=useState([] as  IEmployee[]);
    const[showPage,setShowPage]=useState(PageEnum.list)
    const[dataEdit,setDataEdit]=useState({} as IEmployee )


    useEffect(() => {
      const listString = window.localStorage.getItem("EmployeeList");
      if (listString) {
        setEmployeeList(JSON.parse(listString));
      }
    }, []);
    

    const handleAddEmploee=()=>{
        setShowPage(PageEnum.add)
    } 
    const showlistPage=()=>{
        setShowPage(PageEnum.list)
    }
    const updateEmployeeListWithStorage = (list: IEmployee[]) => {
      setEmployeeList(list);
      window.localStorage.setItem("EmployeeList", JSON.stringify(list));
    };
    

const addEmployebtn=(data:IEmployee)=>{
    // setEmployeeList([...employeeList,data])
    updateEmployeeListWithStorage([...employeeList, data]);

}

const deleteEmploye=(data:IEmployee)=>{
  const indexToDelete= employeeList.indexOf(data);
  const tempList=[...employeeList]
  tempList.splice(indexToDelete,1)
  // setEmployeeList(tempList)
  updateEmployeeListWithStorage(tempList);

}
const editEmployee=(data:IEmployee)=>{
    setShowPage(PageEnum.edit)
    setDataEdit(data)

}
const updateData=(data:IEmployee)=>{
   const filterdata=employeeList.filter(x=>x.id ===data.id)[0];
   const indexOfRecord=employeeList.indexOf(filterdata);
   const tempData=[...employeeList]
   tempData[indexOfRecord]=data;
   setEmployeeList(tempData)

   
}

  return (

    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-gray-100 p-8">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg">
          🎓 Employee Management System
        </h1>
      </header>

      {/* Main Card */}
      <section className="bg-white max-w-6xl mx-auto rounded-2xl shadow-lg p-8">
     {
        showPage ===PageEnum.list &&(
            <>
             <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-semibold text-gray-800">Employee List</h2>
                <button 
                value="Add"
                onClick={handleAddEmploee}
                className="bg-green-600 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all">
                  ➕ Add Employee
                </button>
              </div>
        
       <EmployeeList list={employeeList} onDeleteBtn={deleteEmploye}  onEditEmploye={editEmployee}/>
            </>
        )
     }
     {
        showPage === PageEnum.add &&(
            <>
            <AddEmployee onBackbtn={showlistPage}  handleOnSubmit={addEmployebtn}/>
            </>
        )
     }

     {
        showPage === PageEnum.edit &&(
            <EditEmployee data={dataEdit } onBackbtn={showlistPage} onUpdateClick={updateData}/>
        )
     }
      </section>
    </div>
  );
}

export default Home;
