// #####  FAMILY TREE TEST FILES TO TEST FILE AUDITING FUNCTION.  ##### //

// #####  FILE: testFileBad4.js  ##### //
// #####  rootPerson for this test file has a child key.  ##### //


export const testFileBad4 = {

  rootPerson: 'p0001',

  people: {

    p0001:
      {
        firstname: 'Aaron',
        lastname: 'Adams',
        gender: 'male',
        generation: 0,
        birthdate: '07-may-1957',
        fatherId: 'p0002',
        motherId: 'p0017',
        spouseId: null,
        childId: 'p901'
      },

    p0002:
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
      },

    p0003:
      {
        firstname: 'Robert',
        lastname: 'Adams',
        gender: 'male',
        generation: 2,
        birthdate: '21-nov-1908',
        deathdate: '1985',
        fatherId: 'p0005',
        motherId: 'p0006',
        spouseId: 'p0004',
        childId: 'p0002'
      },

    p0004:
      {
        firstname: 'Susan',
        lastname: 'Eaton',
        gender: 'female',
        generation: 2,
        birthdate: '27-sep-1911',
        deathdate: '1991',
        fatherId: 'p0007',
        motherId: 'p0008',
        spouseId: 'p0003',
        childId: 'p0002'
      }
    }

}
  