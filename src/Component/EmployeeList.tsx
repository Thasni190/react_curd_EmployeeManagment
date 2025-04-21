import React, { useState } from 'react';
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IEmployee } from './Employeetype';
import EmployeView from './EmployeView';

type Props = {
    list: IEmployee[];
    onDeleteBtn: (data: IEmployee) => void;
    onEditEmploye: (data: IEmployee) => void;
}

function EmployeeList(props: Props) {
    const { list, onDeleteBtn, onEditEmploye } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data);
        setShowModal(true);
    }

    const onCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800">Employee Directory</h2>
                    <p className="text-gray-500 mt-1">Manage your organization's employees</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Employee
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {list.map((employee) => (
                                <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                                <span className="text-indigo-600 font-medium">
                                                    {employee.firstName.charAt(0)}{employee.lastName.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {`${employee.firstName} ${employee.lastName}`}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {employee.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                        <button
                                            onClick={() => viewEmployee(employee)}
                                            className="text-indigo-600 hover:text-indigo-900 p-2 rounded-full hover:bg-indigo-50 transition-colors"
                                            title="View"
                                        >
                                            <FaEye className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => onEditEmploye(employee)}
                                            className="text-yellow-600 hover:text-yellow-900 p-2 rounded-full hover:bg-yellow-50 transition-colors"
                                            title="Edit"
                                        >
                                            <FaEdit className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => onDeleteBtn(employee)}
                                            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors"
                                            title="Delete"
                                        >
                                            <MdDelete className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {list.length === 0 && (
                    <div className="px-6 py-12 text-center">
                        <div className="text-gray-400 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-700">No employees found</h3>
                        <p className="text-gray-500 mt-1">Add your first employee to get started</p>
                    </div>
                )}
            </div>

            {showModal && dataToShow !== null && (
                <EmployeView onclose={onCloseModal} data={dataToShow} />
            )}
        </div>
    );
}

export default EmployeeList;