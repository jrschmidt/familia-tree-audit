import { expect, test } from 'vitest'
import { auditTree } from './audit-tree'

import { testFile0 } from './test-data/testFile0'

test('can successfully load specified family tree file', () => {
  const result = auditTree(testFile0)
  expect(result.fileLoaded).toEqual(true)
})

