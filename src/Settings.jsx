import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    language: 'en',
    currency: 'KES'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = () => {
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className="mr-3"
              />
              <span>Enable push notifications</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailUpdates"
                checked={settings.emailUpdates}
                onChange={handleChange}
                className="mr-3"
              />
              <span>Receive email updates about new cars</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                className="mr-3"
              />
              <span>Enable dark mode</span>
            </label>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="en">English</option>
                <option value="sw">Swahili</option>
                <option value="fr">French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="KES">Kenyan Shilling (KES)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <div className="space-y-3">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Change Password
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 ml-4">
              Delete Account
            </button>
          </div>
        </div>

        <div className="pt-4 border-t">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;