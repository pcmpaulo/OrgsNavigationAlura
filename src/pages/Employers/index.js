import React from 'react';
import HeaderComponent from './components/Header';
import EmployersComponent from './components/Employers';

export default function EmployersPage({bestEmployers}) {
  return (
    <>
      <EmployersComponent
        bestEmployers={bestEmployers}
        header={HeaderComponent}
      />
    </>
  );
}
