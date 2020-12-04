# Where's DigitalCrafts?

This program displays the states which have cities named "Atlanta", "Houston", "Tampa".

# Bugs to fix

- [X] After lots of debugging, code stopped running. `node index.js` does nothing
  - The main function was commented out like so `// main();` This was fixed to `main();`
- [X] Started crashing after adding "tampa" search
  - The statesWithATampa function did not have db in front of the statesWithCity function so it did not have a place to search `const statesWithATampa = statesWithCity('tampa');`
  - Fixed to `const statesWithATampa = db.statesWithCity('tampa');`
- [X] Prints "Atlanta" locations twice (instead of Houston)
  - The statesWithAHouston function called the wrong function so it gave the info for Atlanta instead of Houtson
  - `for (let st of statesWithAnAtlanta) {`
  - fixed to `for (let st of statesWithAHouston) {`

For each bug you fix, add documentation to this README about how you fixed it (include before/after code samples).

# For the more curious:

`db.js` includes more functions that you can try out. In `index.js`, try to `console.log()` the results of the following function calls:

- `getByAbbreviation('ak')`
- `searchByName('dakota')`
  - Why does this only return results for North Dakota (and not South Dakota)?
    - It returns North Dakota because the findIndex method on the line below returns the first element in the array that satisfies the search
    - `const index = names.findIndex(n => n.includes(searchTerm));`
    
