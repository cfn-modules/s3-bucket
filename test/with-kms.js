const test = require('ava');
const cfntest = require('@cfn-modules/test');

test.serial('with-kms', async t => {
  const stackName = cfntest.stackName();
  try {
    t.log(await cfntest.createStack(`${__dirname}/with-kms.yml`, stackName, {}));
    // what could we test here?
  } finally {
    t.log(await cfntest.deleteStack(stackName));
    t.pass(); 
  }
});
