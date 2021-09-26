import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';

import './UniqTasks.css';

function UniqTasks() {
  return (
    <>
      <Header />
      <div class='content'>
        <Sidebar />
      </div>
    </>
  );
}

export default UniqTasks;
