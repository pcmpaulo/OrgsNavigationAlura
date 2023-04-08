import {useEffect, useState} from 'react';
import {loadEmployers} from '../services/loadData';

export default function useEmployers() {
  const [title, setTitle] = useState('');
  const [employersList, setEmployersList] = useState([]);

  useEffect(() => {
    const employersReturn = loadEmployers();

    // Sort employers by distance.
    const employerSortedList = employersReturn.list.sort((a, b) => {
      return a.distance - b.distance;
    });

    setTitle(employersReturn.title);
    setEmployersList(employerSortedList);
  }, []);

  return [title, employersList];
}
