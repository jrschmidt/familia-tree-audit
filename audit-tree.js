export const auditTree = (testFile) => {
  let filePassesAudit = true
  let fileHasCorrectFormat = true
  let fileHasRootPerson = true

  const keys = Object.keys(testFile)

  if (keys.includes('rootPerson') === false) {
    filePassesAudit = false
    fileHasRootPerson = false
  }

  if ( typeof testFile.rootPerson != 'string' )
    {
      filePassesAudit = false
      fileHasCorrectFormat = false
    }

  return {
    filePassesAudit: filePassesAudit,
    fileHasCorrectFormat: fileHasCorrectFormat,
    fileHasRootPerson: fileHasRootPerson
  }
}