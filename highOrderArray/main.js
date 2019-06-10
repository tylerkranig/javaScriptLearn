const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for each, no return, more elegant way to loop through data
companies.forEach(a => {
  console.log(a)
});

// filter
let canDrink = ages.filter(a => {
  return a >= 21;
})
console.log(canDrink);

const retailCompanies = companies.filter(company => {
  return company.category === 'Retail';
})
console.log(retailCompanies)

// some sorting here too, takes two arguements
const eightiesCompanies = companies.filter(company => {
  return company.start >= 1980 && company.start < 1990 ;
}).sort((a, b) => {
  return a.start - b.start;
})
console.log(eightiesCompanies)

// map
const companyNames = companies.map( company => 
  `${company.name} test`
);
console.log(companyNames)

// reduce
// example add all the ages together
const ageSum = ages.reduce( (total, age) => {
  return total + age;
}, 0);
console.log(ageSum)

const yearSum = companies.reduce( (total, comp) => {
  return total + (comp.end - comp.start);
}, 0);
console.log(yearSum)