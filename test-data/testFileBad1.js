// #####  FAMILY TREE TEST FILES TO TEST FILE AUDITING FUNCTION.  ##### //

// #####  FILE: testFileBad1.js  ##### //
// #####  This file is bad because it is not a key-value Object.  ##### //


export const testFileBad1 = [

  {
    firstname: 'Aaron',
    lastname: 'Adams',
    gender: 'male',
    generation: 0,
    birthdate: '07-may-1957',
    fatherId: 'p0002',
    motherId: 'p0017',
    spouseId: 'p701',
    childId: 'p901'
  },

  {
    firstname: 'James',
    lastname: 'Adams',
    gender: 'male',
    generation: 1,
    birthdate: '06-oct-1932',
    deathdate: '2010',
    fatherId: 'p0003',
    motherId: 'p0004',
    spouseId: 'p0017',
    childId: 'p0001'
  }

]