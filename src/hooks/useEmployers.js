import {useEffect, useState} from 'react';
import {loadEmployers} from '../services/loadData';

export default function useEmployers(bestEmployers) {
  const [title, setTitle] = useState('');
  const [employersList, setEmployersList] = useState([]);

  useEffect(() => {
    const employersReturn = loadEmployers();

    // Sort employers by distance.
    let employerSortedList = employersReturn.list.sort((a, b) => {
      return a.distance - b.distance;
    });
    if (bestEmployers) {
      employerSortedList = employerSortedList.filter(employer => {
        return employer.rate >= 4;
      });
    }

    setTitle(employersReturn.title);
    setEmployersList(employerSortedList);
  }, [bestEmployers]);

  return [title, employersList];
}
