const { ESLint } = require('eslint');
const { strictEqual } = require('assert');

const equal = (a, e, m) => strictEqual(a, e, `Test failed: ${m}`);

(async () => {
    try {
        const eslint = new ESLint({
            cwd: __dirname,
            overrideConfigFile: '../index.js',
        });
    
        const res = (await eslint.lintFiles([
            './testFile.js',
            './testFizzBuzz.js',
        ]));
        console.debug('Lint result', res);
        res.forEach(({ errorCount, warningCount }) => {
            equal(0, errorCount, `${errorCount} errors`);
            equal(0, warningCount, `${warningCount} warnings`);
        });

        console.debug('Test complete');
    } catch (e) {
        console.error('Test crashed', e);
    }
})();
