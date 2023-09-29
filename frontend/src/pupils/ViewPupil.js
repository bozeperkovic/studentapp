import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


export default function ViewPupil() {

    const [pupil, setPupil] = useState({})
    const [fileData, setFileData] = useState({});
    const [allFiles, setAllFiles] = useState({});

    const {id} = useParams();

    useEffect(() => {
        loadPupil();
        loadFile();
        loadAllFiles();
    }, []);

    const loadPupil = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/pupils/all/${id}`);
            setPupil(result.data);
            console.log(pupil)
        } catch (error) {
            console.error('Error fetching pupil data:', error);
        }
    };

    const loadFile = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/pupils/${(parseInt(id) - 1) * 4 + 1}/files`);
            setFileData(result.data);
            console.log(fileData)
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
    };

    const loadAllFiles = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/pupils/files`);
            setAllFiles(result.data);
            console.log(allFiles)
        } catch (error) {
            console.error('Error fetching file data:', error);
        }
    };


    const handleOpenFile = async (fileId) => {
        try {
            const response = await axios.get(`http://localhost:8080/pupils/files/${fileId}`, {
                responseType: 'blob',
            });

            const file = new Blob([response.data], { type: 'application/octet-stream' });
            const fileURL = URL.createObjectURL(file);

            const newWindow = window.open();
            if (newWindow) {
                newWindow.location.href = fileURL;
            } else {
                console.error('Error opening file in a new window.');
            }
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
            <div className ="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Pupil Details</h2>
                    <div className="card">
                        <div className="card-header">
                            <table className="mx-auto text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                                <tr>
                                    <th style={{ width: '50%' }}
                                        scope="col"
                                        className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>ID</b>
                                    </th>
                                    <th scope="row" className="border border-black-100 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.id}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Ime</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.firstName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Prezime</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.lastName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>E-mail</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.email}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Broj mobitela</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.phoneNumber}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Škola</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.schoolName}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Prebivalište</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.residence}</b>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>Poznate tehnologije</b>
                                    </th>
                                    <th scope="col" className="border border-black-100 px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <b>{pupil.familiarTechnologies}</b>
                                    </th>
                                </tr>
                                <tr>
                                    {allFiles[(parseInt(id) - 1) * 4] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>ID dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4].id}</b>
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
                                    {allFiles[(parseInt(id) - 1) * 4] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>Ime dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4].docName}</b>
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
                                        <a href={`http://localhost:8080/pupils/files/${(parseInt(id) - 1) * 4 + 1}`} download target="_blank" rel="noopener noreferrer">
                                            <b>Otvori</b>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    {allFiles[(parseInt(id) - 1) * 4 + 1] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>ID dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4 + 1].id}</b>
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
                                    {allFiles[(parseInt(id) - 1) * 4 + 1] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>Ime dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4 + 1].docName}</b>
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
                                        <a href={`http://localhost:8080/pupils/files/${(parseInt(id) - 1) * 4 + 2}`} download target="_blank" rel="noopener noreferrer">
                                            <b>Otvori</b>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    {allFiles[(parseInt(id) - 1) * 4 + 2] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>ID dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4 + 2].id}</b>
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
                                    {allFiles[(parseInt(id) - 1) * 4 + 2] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>Ime dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4 + 2].docName}</b>
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
                                        <a href={`http://localhost:8080/pupils/files/${(parseInt(id) - 1) * 4 + 3}`} download target="_blank" rel="noopener noreferrer">
                                            <b>Otvori</b>
                                        </a>
                                    </th>
                                </tr>
                                <tr>
                                    {allFiles[(parseInt(id) - 1) * 4 + 3] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>ID dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4 + 3].id}</b>
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
                                    {allFiles[(parseInt(id) - 1) * 4 + 3] ? (
                                        <>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>Ime dokumenta</b>
                                            </th>
                                            <th scope="col" className="border px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <b>{allFiles[(parseInt(id) - 1) * 4 + 3].docName}</b>
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
                                        <a href={`http://localhost:8080/pupils/files/${(parseInt(id) - 1) * 4 + 4}`} download target="_blank" rel="noopener noreferrer">
                                            <b>Otvori</b>
                                        </a>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <Link type="button" className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-5"
                          to={"/pupils"}>
                        Natrag
                    </Link>
                </div>
            </div>

        </div>
    )

}