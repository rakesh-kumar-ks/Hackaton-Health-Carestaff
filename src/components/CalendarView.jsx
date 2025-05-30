import React, { useState } from 'react';
import { fetchAssignments } from '../api';

export default function CalendarView() {
  const [start, setStart] = useState('');
  const [end, setEnd]     = useState('');
  const [data, setData]   = useState([]);

  const loadAssignments = async () => {
    try {
      const res = await fetchAssignments({ startDate: start, endDate: end });
      setData(res.data);
    } catch (err) {
      console.error(err);
      alert('Error loading assignments');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="date"
          value={start}
          onChange={e => setStart(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={end}
          onChange={e => setEnd(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={loadAssignments}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          View Calendar
        </button>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-3 py-1">Date</th>
            <th className="border px-3 py-1">Staff ID</th>
            <th className="border px-3 py-1">Name</th>
            <th className="border px-3 py-1">Role</th>
            <th className="border px-3 py-1">Present</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td className="border px-3 py-1">{r.date}</td>
              <td className="border px-3 py-1">{r.staffId}</td>
              <td className="border px-3 py-1">{r.name}</td>
              <td className="border px-3 py-1">{r.role}</td>
              <td className="border px-3 py-1">{r.isPresent ? '✅' : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
