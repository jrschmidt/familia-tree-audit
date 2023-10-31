export const auditTreeFile = (testFile) => {
  let filePassesAudit = true
  let fileHasCorrectFormat = true
  let fileHasRootPerson = true
  let fileHasPeopleList = true
  let rootHasNoChildLink = true
  let rootHasNoSpouseLink = true

  const keys = Object.keys(testFile)
  let rootPerson = ''
  
  if ( typeof testFile.rootPerson != 'string' )
  {
    fileHasCorrectFormat = false
  }
  
  if ( keys.includes('rootPerson') === false ) {
    fileHasRootPerson = false
  }
  
  if ( keys.includes('people') === false ) {
    fileHasPeopleList = false
  }
  
  if ( fileHasRootPerson && fileHasPeopleList) {
    rootPerson = testFile.people[testFile.rootPerson]
  }

  if ( rootPerson.childId != null )
  {
    rootHasNoChildLink = false
  }
  
  if ( rootPerson.spouseId != null )
  {
    rootHasNoSpouseLink = false
  }
  
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
    rootHasNoChildLink: rootHasNoChildLink,
    rootHasNoSpouseLink: rootHasNoSpouseLink
  }
}