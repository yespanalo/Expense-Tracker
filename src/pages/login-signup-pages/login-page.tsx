export function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-10 rounded shadow-md w-96 rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="border border-gray-300 rounded-lg p-2 mb-4 w-full flex-3" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" className="border border-gray-300 rounded-lg p-2 mb-4 w-full flex-3" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 rounded-xl">Login</button>
            </form>
        </div>
    );
}