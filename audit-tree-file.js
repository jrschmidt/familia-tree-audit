export const auditTreeFile = (testFile) => {

  let filePassesAudit = true
  let fileHasCorrectFormat = true
  let fileHasRootPerson = true
  let fileHasPeopleList = true
  let peopleListIsNonempty = true
  let rootHasNoChildLink = true
  let rootHasNoSpouseLink = true
  let allSpouseLinksMatch = true

  let personIds = []
  let personsVisited = []
  let personsReferenced = []
  let personsToExamine = []
  let personsExamined = []
  let personsPassingAudit = []
  let personsFailingAudit = []
  
// **** (temp version - improve comments after current task)
// TESTS BEFORE ITERATING THROUGH INDIVIDUAL PERSONS IN TREE //

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

// **** (temp version - improve comments after current task)
// NOW ITERATE THROUGH INDIVIDUAL PERSONS IN THE TREE //

while ( personsToExamine.length > 0 ) {
  personId = personsToExamine.pop()
  console.log(personId)
}



// ** FINISH LATER AFTER ADDING TEST FOR NONEMPTY PEOPLE PROPERTY
// if ( fileHasPeopleList ) 

// **** (temp version - improve comments after current task)
// AFTER ITERATING THROUGH IN THE TREE //


if (
  [
    fileHasCorrectFormat,
    fileHasRootPerson,
    fileHasPeopleList,
    rootHasNoChildLink,
    rootHasNoSpouseLink
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
    allSpouseLinksMatch: allSpouseLinksMatch
  }
}