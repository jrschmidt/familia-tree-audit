export const auditTree = (testFile) => {
  let filePassesAudit = true
  let fileHasCorrectFormat = true
  let fileHasRootPerson = true
  let fileHasPeopleList= true

  const keys = Object.keys(testFile)
  
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

  if (
    [
      fileHasCorrectFormat,
      fileHasRootPerson,
      fileHasPeopleList
    ]
      .includes(false)) filePassesAudit = false

  return {
    filePassesAudit: filePassesAudit,
    fileHasCorrectFormat: fileHasCorrectFormat,
    fileHasRootPerson: fileHasRootPerson,
    fileHasPeopleList
  }
}