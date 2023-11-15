// #####  FAMILY TREE TEST FILES TO TEST FILE AUDITING FUNCTION.  ##### //

// #####  FILE: testFileBad6.js  ##### //
// #####  A copy of testFile0.js with a non-matching pair of spouse links. ##### //
// #####  (p0018 shows p0019 as spouse, but p0019 has p0003 for its spouse link.) ##### //


export const testFileBad6 = {

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
        fatherId: null,
        motherId: null,
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
        fatherId: null,
        motherId: null,
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
        fatherId: null,
        motherId: null,
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
        fatherId: null,
        motherId: null,
        spouseId: 'p0003',
        childId: 'p0017'
      }


    }

}
