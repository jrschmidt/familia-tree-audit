import { expect, test } from 'vitest'
import { auditTree } from './audit-tree'

import { testFile0 } from './test-data/testFile0'

import { testFileBad1 } from './test-data/testFileBad1'
import { testFileBad2 } from './test-data/testFileBad2'

test('family tree file is in the proper general format', () => {
  let result = {}

  result = auditTree(testFile0)
  expect(result.filePassesAudit).toEqual(true)
  expect(result.fileHasCorrectFormat).toEqual(true)

  result = auditTree(testFileBad1)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.fileHasCorrectFormat).toEqual(false)
})

test('family tree file contains a root person', () => {
  let result = {}

  result = auditTree(testFile0)
  expect(result.filePassesAudit).toEqual(true)
  expect(result.fileHasRootPerson).toEqual(true)
  
  result = auditTree(testFileBad2)
  expect(result.filePassesAudit).toEqual(false)
  expect(result.fileHasRootPerson).toEqual(false)
})