import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="mb-6">
                        <button
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <p className="text-gray-600 text-sm">
                        Don't have an account? <a href="#" className="text-indigo-500 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
