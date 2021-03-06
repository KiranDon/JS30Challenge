var fruits = [
    {name:'Guava', cost:5},
    {name:'Apple', cost:15},
    {name:'Banana', cost:2},
    {name:'Orange', cost:7},
    {name:'Mango', cost:10},
    {name:'Pineapple', cost:50},
    {name:'Strawberry', cost:20},
];

function displayTable()
{
    var table = document.getElementById('table');
    for(var i=0; i<fruits.length; i++)
    {
        var newRow = table.insertRow();

        newRow.insertCell(0);
        table.rows[i+1].cells[0].innerHTML = i+1;

        newRow.insertCell(1);
        table.rows[i+1].cells[1].innerHTML = fruits[i].name;

        newRow.insertCell(2);
        table.rows[i+1].cells[2].innerHTML = fruits[i].cost;

    }
}

// fruits = fruits.sort((a, b)=> a.cost > b.cost ? 1 : -1)

let hl = document.getElementById('hl');
let lh = document.getElementById('lh');

hl.addEventListener('click', () => {
    fruits = fruits.sort((a, b)=> a.cost > b.cost ? -1 : 1)
    displayTable(fruits);
})

lh.addEventListener('click', () => {
    fruits = fruits.sort((a, b)=> a.cost > b.cost ? 1 : -1)
    displayTable(fruits);
})


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
const fifteens = inventors.filter(inventor => (inventor.year >1500 && inventor.year<1600));

console.table(fifteens)

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
const inventorsNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(inventorsNames)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
const sortByYearOfBirth = inventors.sort((a, b) => (a.year > b.year ? -1 : 1))
    
console.table(sortByYearOfBirth)




    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((totalYears, inventor) => {
    return totalYears += inventor.passed - inventor.year;}, 0);

console.log(totalYears)

    // 5. Sort the inventors by years lived
const youngest = inventors.sort((a, b) =>
{
    let previousPersonLived = a.passed - a.year;
    let presentPersonLived = b.passed - b.year;
    return previousPersonLived > presentPersonLived ? -1 : 1;
})

console.table(youngest)

const oldest = inventors.sort((a, b) =>
{
    let previousPersonLived = a.passed - a.year;
    let presentPersonLived = b.passed - b.year;
    return previousPersonLived > presentPersonLived ? 1 : -1;
})

console.table(oldest)


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name
const alphabeticalOrder = people.sort((prev, next)=> {
    const [prevLast, prevFirst] = prev.split(', ');
    const [nextLast, nextFirst] = next.split(', ');
    return prevLast > nextLast ? 1 : -1;
})
console.log(alphabeticalOrder)


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

