import React from 'react';
import { AdminNavbar } from '../export';
import './Adminlayout.css'
function Adminlayout({ children }) {
  return (
    <div className="grid-container">
      <AdminNavbar />
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Adminlayout;
