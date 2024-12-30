"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
//import {axios} from "axios";


export default function SignUpPage() {
    const [user, setUser] = React.useState({

        email: "",
        password: "",
        username: "",

    })

    const onSignup = async () => {
    }
    return (
        <div className="flex flex-col items-center
        justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold py-5">
                Sign Up
            </h1>

            <label htmlFor="username" className="py-2">Username</label>
            <input className="p-2 border border-gray-400 rounded-lg mb-4 focous:outline-none"
                id="username" type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="username" />

            <label htmlFor="email" className="py-2">Email</label>
            <input className="p-2 border border-gray-400 rounded-lg mb-4 focous:outline-none"
                id="email" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="email" />

            <label htmlFor="password" className="py-2">password</label>
            <input className="p-2 border border-gray-400 rounded-lg mb-4 focous:outline-none"
                id="password" type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="password" />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSignup}
            >SignUp</button>
            
            <Link className="py-5" href="/login">
                Back to Login
            </Link>

        </div>

    )
}