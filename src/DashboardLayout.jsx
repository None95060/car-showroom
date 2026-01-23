import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', icon: '🏠', path: '/dashboard' },
    { name: 'Profile', icon: '👤', path: '/profile' },
    { name: 'Favorites', icon: '❤️', path: '/favorites' },
    { name: 'Map', icon: '🗺️', path: '/map' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const handleLogout = () => {
    // Clear any auth tokens/session
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        {/* Avatar at top */}
        <div className="flex flex-col items-center justify-center h-32 bg-blue-900">
          <img
            src="https://via.placeholder.com/64x64?text=U"
            alt="User avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          <span className="text-white text-sm font-medium">User Name</span>
        </div>

        {/* Navigation items */}
        <nav className="mt-8 flex-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className="flex items-center w-full px-6 py-3 text-white hover:bg-blue-700 transition-colors"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            <span className="mr-3">🚪</span>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.868 12.683A17.925 17.925 0 0112 21c7.962 0 12-1.21 12-2.683m-12 2.683a17.925 17.925 0 01-7.132-8.317M12 21c4.411 0 8-4.03 8-9s-3.589-9-8-9-8 4.03-8 9a9.06 9.06 0 001.832 5.683L4 21l4.868-2.317z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/32x32?text=U"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;