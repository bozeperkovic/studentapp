import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function ViewPupil() {
    const [pupilData, setPupilData] = useState({});
    const [fileData, setFileData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        loadPupil();
        loadFile();
    }, []);

    const loadPupil = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/students/all/${id}`);
            setPupilData(result.data);
            console.log(pupilData)
        } catch (error) {
            console.error('Error fetching pupil data:', error);
        }
    };

    const loadFile = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/students/${id}/files`);
            setFileData(result.data);
            console.log(fileData)
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
    };

    const handleOpenFile = async (fileId) => {
        try {
            const response = await axios.get(`http://localhost:8080/students/files/${fileId}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));

            window.open(url, '_blank');

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error opening file:', error);
        }
    };

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    return (
        <div className="py-10 containerStyles">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Student Details</h2>
                    <div className="card">
                        <div className="card-header">
                            <table className="mx-auto text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                                <tr>
                                    <th scope="col"
                                        style={{ width: '50%' }}
                                        className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>ID</b>
                                    </th>
                                    <th scope="row" className="border border-black-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.id}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Ime</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.firstName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Prezime</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.lastName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>E-mail</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.email}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Broj mobitela</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.phoneNumber}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Sveučilište</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.universityName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Prebivalište</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.residence}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Poznate tehnologije</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupilData.familiarTechnologies}</b>
                                    </th>
                                </tr>
                                <tr>
                                    {fileData[0] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>ID dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{fileData[id - 1].id}</b>
                                            </th>
                                        </>
                                    ) : (
                                        <tr>
                                            <td colSpan="2" className="text-center">
                                                <b>No file data available.</b>
                                            </td>
                                        </tr>
                                    )}
                                </tr>
                                <tr>
                                    {fileData[0] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>Ime dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{fileData[id - 1].docName}</b>
                                            </th>
                                        </>
                                    ) : (
                                        <tr>
                                            <td colSpan="2" className="text-center">
                                                <b>No file data available.</b>
                                            </td>
                                        </tr>
                                    )}
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Preuzmi dokument</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <a href={`http://localhost:8080/students/files/${id}`} target="_blank" rel="noopener noreferrer">
                                            <b>Otvori</b>
                                        </a>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <Link
                        type="button"
                        className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
                        to={"/students"}
                    >
                        Natrag
                    </Link>
                </div>
            </div>
        </div>
    );
}