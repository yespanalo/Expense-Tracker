import { useState } from 'react'
import { loginUser } from '../../services/authService'
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            navigate('/home');
        }
        catch (error) {
            alert(`Login failed: ${error}`);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-10 rounded shadow-md w-96 rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} id="email" className="border border-gray-300 rounded-lg p-2 mb-4 w-full flex-3" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} id="password" className="border border-gray-300 rounded-lg p-2 mb-4 w-full flex-3" required />
                </div>
                <button type="submit" onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 rounded-xl">Login</button>
            </form>
        </div>
    );
}