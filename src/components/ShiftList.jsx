import React, { useState } from 'react';
import { fetchShiftsByDate } from '../api';

export default function ShiftList() {
  const [date, setDate] = useState('');
  const [shifts, setShifts] = useState([]);

  const loadShifts = async () => {
    try {
      const res = await fetchShiftsByDate(date);
      setShifts(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (err) {
      console.error(err);
      alert('Error fetching shifts');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={loadShifts}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Load Shifts
        </button>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Available</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((s, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{s.type || s['Shift-type']}</td>
              <td className="border px-4 py-2">{s.availableCapacity || s['Available capacity']}</td>
              <td className="border px-4 py-2">{s.totalCapacity || s['Total capacity']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
