import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';


export default function EditPupil() {
    const navigate = useNavigate();
    const { id } = useParams();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [courseOfStudies, setCourseOfStudies] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [residence, setResidence] = useState('');
    const [familiarTechnologies, setFamiliarTechnologies] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/pupils/all/${id}`)
            .then((response) => {
                const pupilData = response.data;
                setFirstName(pupilData.firstName);
                setLastName(pupilData.lastName);
                setEmail(pupilData.email);
                setDateOfBirth(pupilData.dateOfBirth);
                setSchoolName(pupilData.schoolName);
                setCourseOfStudies(pupilData.courseOfStudies);
                setPhoneNumber(pupilData.phoneNumber);
                setResidence(pupilData.residence);
                setFamiliarTechnologies(pupilData.familiarTechnologies);
            })
            .catch((error) => {
                console.error('Error fetching pupil data:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            dateOfBirth,
            schoolName,
            courseOfStudies,
            phoneNumber,
            residence,
            familiarTechnologies,
        };

        axios.put(`http://localhost:8080/pupils/update/${id}`, formData)
            .then((response) => {
                console.log('Data successfully updated:', response.data);
                navigate('/pupils');

            })
            .catch((error) => {
                console.error('Error updating data:', error);
            });
    };

    return (
        <div className='py-20'>
            <div className='max-w-2xl mx-auto sm:px-6 lg:px-8'>
                <form onSubmit={handleSubmit}>
                    <div className="sm:col-span-6">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700"> Ime
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                placeholder="Unesite ime"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700"> Prezime
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Unesite prezime"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Unesite email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700"> Ime škole
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                placeholder="Unesite ime škole"
                                value={schoolName}
                                onChange={(e) => setSchoolName(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="course_of_studies" className="block text-sm font-medium text-gray-700"> Tijek studija
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="course_of_studies"
                                name="course_of_studies"
                                placeholder="Unesite tijek studija"
                                value={courseOfStudies}
                                onChange={(e) => setCourseOfStudies(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700"> Broj telefona
                        </label>
                        <div className="mt-1">
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                placeholder="Unesite broj telefona"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="residence" className="block text-sm font-medium text-gray-700"> Prebivalište
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="residence"
                                name="residence"
                                placeholder="Unesite prebivalište"
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="familiar_technologies" className="block text-sm font-medium text-gray-700"> Poznate tehnologije
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="familiar_technologies"
                                name="familiar_technologies"
                                placeholder="Unesite poznate tehnologije"
                                value={familiarTechnologies}
                                onChange={(e) => setFamiliarTechnologies(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>
                    <div className="sm:col-span-6">
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700"> Datum rođenja
                        </label>
                        <div className="mt-1">
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                className="block w-full appearance-none bg-white border border-gray-400 rounded-md py-2 px-3 text-base leading-normal transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                            />
                        </div>
                        <div className="text-sm text-red-400"></div>
                    </div>


                    <div className="mt-6 p-4 flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-lg text-white"
                        >
                            Dalje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}