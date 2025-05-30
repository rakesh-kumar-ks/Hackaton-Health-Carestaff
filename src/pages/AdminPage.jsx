import React, { useState } from 'react';
import AddStaffForm from '../components/AddStaffForm';
import CreateShiftForm from '../components/CreateShiftForm';
import ShiftList from '../components/ShiftList';
import CalendarView from '../components/CalendarView';
import './AdminPage.css';


export default function AdminPage() {
  const [view, setView] = useState('add-staff');

  const tabs = [
    { key: 'add-staff',    label: 'Add Staff' },
    { key: 'create-shift', label: 'Add Shift' },
    { key: 'list-shifts',  label: 'List Shifts' },
    { key: 'calendar',     label: 'Calendar' },
  ];

  return (
    <div className="admin-page">
      <nav className="admin-nav">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`nav-button ${view === key ? 'active' : ''}`}
            onClick={() => setView(key)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="view-container">
        {view === 'add-staff'    && <AddStaffForm />}
        {view === 'create-shift' && <CreateShiftForm />}
        {view === 'list-shifts'  && <ShiftList />}
        {view === 'calendar'     && <CalendarView />}
      </div>
    </div>
  );
}
