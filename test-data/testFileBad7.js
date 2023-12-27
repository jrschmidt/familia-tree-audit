// #####  FAMILY TREE TEST FILES TO TEST FILE AUDITING FUNCTION.  ##### //

// #####  FILE: testFileBad7.js  ##### //
// #####  A copy of testFile0a.js with a non-matching pair of child/parent links. ##### //
// #####  (p0002 shows p0003 as father, but p0003 has p0088 for its child link.) ##### //


export const testFileBad7 = {

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
        childId: null
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
        childId: 'p0088'
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
      },


    p0017:
      {
        firstname: 'Barbara',
        lastname: 'Johnson',
        gender: 'female',
        generation: 1,
        birthdate: '28-mar-1930',
        deathdate: '2004',
        fatherId: 'p0018',
        motherId: 'p0019',
        spouseId: 'p0002',
        childId: 'p0001'
      },

    p0018:
      {
        firstname: 'Michael',
        lastname: 'Johnson',
        gender: 'male',
        generation: 2,
        birthdate: '14-may-1897',
        deathdate: '1982',
        fatherId: 'p0020',
        motherId: 'p0021',
        spouseId: 'p0019',
        childId: 'p0017'
      },

    p0019:
      {
        firstname: 'Carol',
        lastname: 'Nichols',
        gender: 'female',
        generation: 2,
        birthdate: '18-apr-1900',
        deathdate: '1989',
        fatherId: 'p0022',
        motherId: 'p0023',
        spouseId: 'p0018',
        childId: 'p0017'
      }


    }

}
