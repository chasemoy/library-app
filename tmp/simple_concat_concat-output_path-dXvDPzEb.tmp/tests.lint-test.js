QUnit.module('ESLint | tests');

QUnit.test('test-helper.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'test-helper.js should pass ESLint\n\n');
});

QUnit.test('unit/controllers/index-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
});

QUnit.test('unit/routes/about-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
});

