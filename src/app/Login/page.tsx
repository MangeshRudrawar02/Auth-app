"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        
    })

    const onLogin = async () => {
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen"> 
            <h1 className="p-3">Login</h1>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input  className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            
            <button className="p-2 bg-blue-500 text-white rounded-lg"
            onClick={onLogin}>Sign Up</button>
            <Link className="p-3" href="/signup">Signup</Link>
        </div>

        

    )
}