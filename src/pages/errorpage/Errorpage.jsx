import React from 'react';

const Errorpage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
            <div className="text-center">
                <div className="relative">
                    <h1 className="text-9xl font-bold text-gray-700">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-linear-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                    </div>
                </div>
                
                <h2 className="text-3xl font-semibold text-white mt-6 mb-3">
                    Oops! Page Not Found
                </h2>
                
                <p className="text-gray-400 mb-8 max-w-md">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default Errorpage;