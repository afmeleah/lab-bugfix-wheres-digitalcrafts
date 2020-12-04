const db = require('./db');

function main() {

    const statesWithAnAtlanta = db.statesWithCity('atlanta');
    console.log('\n\nThere is an Atlanta in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }
    
    console.log('\n\n============================');
    
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAHouston) {
        // above had function for Atlanta instead of Houston
        console.log(st);
    }
    
    console.log('\n\n============================');

    const statesWithATampa = db.statesWithCity('tampa');
    // added db to above so function will work
    console.log('\n\nThere is a Tampa in these states:')
    for (st of statesWithATampa) {
        console.log(st);
    }

    console.log('\n\n============================');

    console.log(db.getByAbbreviation('ak'))
    console.log(db.searchByName('dakota'))
}

main();
// the main function was not called. It was commented out.
