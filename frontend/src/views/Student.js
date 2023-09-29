import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';


export default function Student() {

    const[students, setStudents] = useState([])


    useEffect(()=>{
        loadStudents();
    },[]);

    const loadStudents=async()=>{
        const result = await axios.get("http://localhost:8080/students/all");
        setStudents(result.data);
    }

    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8080/students/delete/${id}`)
        loadStudents()
    }

    return (
        <div className='py-20 '>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                <div div className="mb-4">
                <Link type="button"
                      style={{ padding: "8px 12px" }}
                      className="text-blue-400 border border-blue-400 hover:text-white-300 hover:bg-blue-700 focus:ring-4 focus:outline-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 mx-5"
                      to={`/studentform/`}>
                    Add student
                </Link>
                </div>
                {!students && students.length === 0 ? (
                    <div>
                        <b>No students to display.</b>
                    </div>
                ):(
                <div className="py-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ime
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Prezime
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                E-mail
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Broj mobitela
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Fakultet
                            </th>
                            <th scope="col" className=" px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                Action
                            </th>



                        </tr>
                        </thead>
                        <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index+1}
                                </th>
                                <td className="px-6 py-4">
                                    {student.firstName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.email}
                                </td>
                                <td className="px-6 py-4">
                                    {student.phoneNumber}
                                </td>
                                <td className="px-6 py-4">
                                    {student.universityName}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Link
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
                                        to={`/viewstudent/${student.id}`}
                                    >
                                        View
                                    </Link>
                                    <Link
                                        type="button"
                                        className="text-blue-400 border border-blue-400 hover:text-white-300 hover:bg-blue-700 focus:ring-4 focus:outline-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 mx-5"
                                        to={`/editstudent/${student.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mx-5"
                                        onClick={() => deleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>)}

            </div>
        </div>
    )
}