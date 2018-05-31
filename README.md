`npm run test:coverage` output:

```
npm run test:coverage

> istanbul-bug@1.0.0 test:coverage /Users/rholzmann/workspace/istanbul-bug
> NODE_ENV=test nyc -a npm test


> istanbul-bug@1.0.0 test /Users/rholzmann/workspace/istanbul-bug
> mocha --require @babel/register



  Tested file
    ✓ adds one


  1 passing (5ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |        0 |        0 |        0 |        0 |                   |
----------|----------|----------|----------|----------|-------------------|
```

**Note:** Reporter is showing no files tested.


`npm run test:coverage2` output:

```
npm run test:coverage2

> istanbul-bug@1.0.0 test:coverage2 /Users/rholzmann/workspace/istanbul-bug
> NODE_ENV=test nyc -a mocha --require @babel/register



  Tested file
    ✓ adds one


  1 passing (5ms)

------------------|----------|----------|----------|----------|-------------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------|----------|----------|----------|----------|-------------------|
All files         |        0 |      100 |        0 |        0 |                   |
 untested-file.js |        0 |      100 |        0 |        0 |                 1 |
------------------|----------|----------|----------|----------|-------------------|
```


**Note:** Reporter is showing only the untested file and missing the tested file.