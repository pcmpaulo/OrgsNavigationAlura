import React from 'react';
import HeaderComponent from './components/Header';
import EmployersComponent from './components/Employers';

export default function EmployersPage() {
  return (
    <>
      <EmployersComponent header={HeaderComponent} />
    </>
  );
}
