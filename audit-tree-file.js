export const auditTreeFile = (testFile) => {
  let filePassesAudit = true
  let fileHasCorrectFormat = true
  let fileHasRootPerson = true
  let fileHasPeopleList = true
  let peopleListIsNonempty = true
  let rootHasNoChildLink = true
  let rootHasNoSpouseLink = true
  let allSpouseLinksMatch = true
  let allChildParentLinksMatch = true
  
  let personIds = []
  let personsReferenced = []
  let personsToExamine = []
  let personsExamined = []
  let expectedLinks = {}
  let personsPassingAudit = []
  let personsFailingAudit = []
  
  const confirmOrCreateExpLink = (personId) => {
    if ( !expectedLinks[personId] ) {
      expectedLinks[personId] = {
        father: null,
        mother: null,
        spouse: null
      }
    }
  }

  // TESTS BEFORE ITERATING THROUGH INDIVIDUAL PERSONS IN TREE //
  // **** (temp version - improve comments after current task)

  const keys = Object.keys(testFile)
  let rootPersonId = ''
  let rootPerson = {}
  let personId = ''
  let person = {}

if ( keys.includes('rootPerson') === false ) {
  fileHasRootPerson = false
}

if ( keys.includes('people') === false ) {
  fileHasPeopleList = false
  peopleListIsNonempty = false
}

if ( fileHasPeopleList )
  personIds = Object.keys(testFile.people)
  if ( personIds.length < 1 )
    peopleListIsNonempty = false

if ( fileHasRootPerson && fileHasPeopleList) {
  rootPersonId = testFile.rootPerson
  rootPerson = testFile.people[rootPersonId]
}

if ( rootPerson.childId != null )
{
  rootHasNoChildLink = false
}

if ( rootPerson.spouseId != null )
{
  rootHasNoSpouseLink = false
}

personsToExamine = [ rootPersonId ]

// ** To finish later after adding test for nonempty people property:
// if ( fileHasPeopleList ) 



// NOW ITERATE THROUGH INDIVIDUAL PERSONS IN THE TREE //
// **** (temp version - improve comments after current task)

while ( personsToExamine.length > 0 ) {
  console.log(' ')
  console.log('STARTING NEW ITERATION OF while LOOP:')
  console.log(`personsToExamine = ${personsToExamine}`)
  personId = personsToExamine.shift()
  console.log(personId)
  // ///// GET person{} OBJECT, OR ERROR IF IT CAN'T BE FOUND ///// //


  // Check that person is not on personsFailingAudit{} list.
  // Check that person object exists for personId.
  if
    ( ( !personsFailingAudit.find( id => id === personId) ) && ( personIds.includes(personId) ) ) {
      console.log(personId + ' not in personsFailingAudit[] list')
      person = testFile.people[personId]

    // Check child link: Check that the child link equals the expected child link (which would mean
    // that a previous person object listed the current person as a father or mother link).
    console.log('checking child link...')
    confirmOrCreateExpLink(personId)
    if ( expectedLinks[personId].childId )
    {
      console.log(`childId = ${person.childId}`)
      console.log(`expected childId = ${expectedLinks[personId].childId}`)
      if ( person.childId != expectedLinks[personId].child ) {
        allChildParentLinksMatch = false
      }
    }
    
    // Check spouse link: If a spouse link is listed for this person, check that the link equals the
    // expected spouse link (which would mean that a previous person object listed the current person
    // as a spouse link).
    console.log('checking spouse link...')

    console.log('checking father link...')
    if ( person.fatherId ) {
      personsToExamine.push(person.fatherId)
    }

    console.log('checking mother link...')
    if ( person.motherId ) {
      personsToExamine.push(person.motherId)
    }


  }
}


// AFTER ITERATING THROUGH IN THE TREE //
// **** (temp version - improve comments after current task)

if (
  [
    fileHasCorrectFormat,
    fileHasRootPerson,
    fileHasPeopleList,
    rootHasNoChildLink,
    rootHasNoSpouseLink,
    peopleListIsNonempty,
    rootHasNoChildLink,
    rootHasNoSpouseLink,
    allSpouseLinksMatch,
    allChildParentLinksMatch
  ]
  .includes(false)) filePassesAudit = false
  
  return {
    filePassesAudit: filePassesAudit,
    fileHasCorrectFormat: fileHasCorrectFormat,
    fileHasRootPerson: fileHasRootPerson,
    fileHasPeopleList: fileHasPeopleList,
    peopleListIsNonempty: peopleListIsNonempty,
    rootHasNoChildLink: rootHasNoChildLink,
    rootHasNoSpouseLink: rootHasNoSpouseLink,
    allSpouseLinksMatch: allSpouseLinksMatch,
    allChildParentLinksMatch: allChildParentLinksMatch
  }
}