import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const cheques = [
      { id: 1, name: 'Zero', date: new Date(1995, 11, 17), amount: 2175010.34 },
      { id: 2, name: 'Mr. Nice', date: new Date(1995, 11, 17), amount: 2222.22 },
      { id: 3, name: 'Narco', date: new Date(1995, 11, 17), amount: 33333.333 },
      { id: 4, name: 'Zero', date: new Date(1995, 11, 17), amount: 1111.11 },
      { id: 5, name: 'Mr. Nice', date: new Date(1995, 11, 17), amount: 2222.22 },
      { id: 6, name: 'Narco', date: new Date(1995, 11, 17), amount: 3333.33 },
      { id: 7, name: 'Zero', date: new Date(1995, 11, 17), amount: 1111.11 },
      { id: 8, name: 'Mr. Nice', date: new Date(1995, 11, 17), amount: 2222.22 },
      { id: 9, name: 'Narco', date: new Date(1995, 11, 17), amount: 3333.33 },
      { id: 10, name: 'Kendrick Xin', date: new Date(2015, 10, 31), amount: 2222.22 },
      { id: 11, name: 'Jennifer Jiang', date: new Date(2016, 11, 18), amount: 164376345646.54 },
      { id: 12, name: 'Ivy Xin', date: new Date(2009, 3, 14), amount: 33333.335 },
    ];

    return { cheques };
  }
}
