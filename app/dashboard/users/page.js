"use client"

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

const Dashboard = () => {
    const route= useRouter()
    const [showAlert, setShowAlert] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const router = ()=>{

        route.push("/dashboard")
        setShowAlert(false)
    }
    return (
        <div className="flex flex-col h-screen">
             {showAlert && (
                <div
                    className={`fixed bottom-0 right-0 mb-4 mr-4 bg-blue-500 text-white px-6 py-4 rounded-md shadow-md ${
                        isHovered ? '' : 'animate-bounce'
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Are you sure you want to logout??
                    <div className="mt-4">
                        <button className="mr-4 px-4 py-2 bg-white text-blue-500 rounded-md shadow-md" onClick={router}>
                            Yes
                        </button>
                        <button className="px-4 py-2 bg-white text-blue-500 rounded-md shadow-md" onClick={() => setShowAlert(false)}>
                            No
                        </button>
                    </div>
                </div>
            )}
            <div className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Registered Users</h1>
                <button onClick={()=>{setShowAlert(true)}} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md ml-auto">Logout</button>
            </div>
            <div className="flex justify-center flex-grow">
                <div className="w-full max-w-5xl p-8">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Full Name</th>
                                <th className="border border-gray-300 p-2">Gender</th>
                                <th className="border border-gray-300 p-2">Email</th>
                                <th className="border border-gray-300 p-2">Phone</th>
                                <th className="border border-gray-300 p-2">Highest Education</th>
                                <th className="border border-gray-300 p-2">Ever Code</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">John Doe</td>
                                <td className="border border-gray-300 p-2">Male</td>
                                <td className="border border-gray-300 p-2">john@example.com</td>
                                <td className="border border-gray-300 p-2">123-456-7890</td>
                                <td className="border border-gray-300 p-2">Bachelor's Degree</td>
                                <td className="border border-gray-300 p-2">ABC123</td>
                                <td className="border border-gray-300 p-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md mr-2">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Jane Smith</td>
                                <td className="border border-gray-300 p-2">Female</td>
                                <td className="border border-gray-300 p-2">jane@example.com</td>
                                <td className="border border-gray-300 p-2">987-654-3210</td>
                                <td className="border border-gray-300 p-2">Master's Degree</td>
                                <td className="border border-gray-300 p-2">DEF456</td>
                                <td className="border border-gray-300 p-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md mr-2">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
