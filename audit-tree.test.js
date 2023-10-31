import { expect, test } from 'vitest'
import { auditTreeFile } from './audit-tree-file'

import { testFile0 } from './test-data/testFile0'

import { testFileBad1 } from './test-data/testFileBad1'
import { testFileBad2 } from './test-data/testFileBad2'
import { testFileBad3 } from './test-data/testFileBad3'
import { testFileBad4 } from './test-data/testFileBad4'
import { testFileBad5 } from './test-data/testFileBad5'

test('family tree file is in the proper general format', () => {
  let result = {}

  result = auditTreeFile(testFile0)
  expect(result.filePassesAudit).toEqual(true)
  expect(result.fileHasCorrectFormat).toEqual(true)

  result = auditTreeFile(testFileBad1)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.fileHasCorrectFormat).toEqual(false)
})

test('family tree file contains a root person', () => {
  let result = {}

  result = auditTreeFile(testFile0)
  expect(result.filePassesAudit).toEqual(true)
  expect(result.fileHasRootPerson).toEqual(true)
  
  result = auditTreeFile(testFileBad2)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.fileHasRootPerson).toEqual(false)
})

test('family tree file contains a `people` property', () => {
  let result = {}
  
  result = auditTreeFile(testFile0)
  expect(result.filePassesAudit).toEqual(true)
  expect(result.fileHasPeopleList).toEqual(true)
  
  result = auditTreeFile(testFileBad3)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.fileHasPeopleList).toEqual(false)
})

test('root person has no child or spouse links', () => {
  let result = {}
  
  result = auditTreeFile(testFile0)
  expect(result.filePassesAudit).toEqual(true)
  expect(result.rootHasNoChildLink).toEqual(true)
  expect(result.rootHasNoSpouseLink).toEqual(true)
  
  result = auditTreeFile(testFileBad4)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.rootHasNoChildLink).toEqual(false)
  
  result = auditTreeFile(testFileBad5)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.rootHasNoSpouseLink).toEqual(false)
})