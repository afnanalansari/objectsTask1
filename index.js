/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
const person ={
    name : 'afnan', age : 23, city: 'Kuwait'
};
console.log(person.name);


/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = 'afnan.alansari111@gmail.com'
console.log(person['email']); //must use the ''



/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

const hasKey = (obj, key) => obj.hasOwnProperty('age');
console.log(hasKey({name: 'berry', age: 3}, 'age'));


/******************************
	Q4) Create a function that checks if all properties in an object have values
 (i.e., no properties are undefined or null).
- running the function on this object should return false
		const myObject = {
		  name: "John",
		  age: 30,
		  city: null,
		};
- running the function on this object should return true 
		const myObject = {
		  name: "John",
		  age: 30,
		  city: "Kuwait",
		};
********************************/
const check = (obj, arr) =>{ let val = false;   //first try
    arr.forEach(el => obj.el !== null || undefined? val = true : val = false);
    return val;
};
const check2 = obj => Object.keys(obj).every(n => obj[n]); //ok //note: if you used obj.n it wont work beacuse it will look for the key 'n', so use []
console.log(check2({ name : 'afnan', age : null, city: 'Kuwait'}));



const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
  const logTitles = obj => console.log(obj.map(x => x['title'])); //is this what u want?
  logTitles(movies);
  
  
  /******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  const checkMovies = obj => {
    let count = 0;
    obj.forEach(
        x => {x.year === 1994 ? count++ : count=count;})
        return count;
    };
  console.log(checkMovies(movies));
  
  
  /******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
  
  const changeName = obj => obj.map(x => x.title === 'The Dark Knight' ? x.genre = 'Action/Drama' : x.genre = x.genre);
  console.log(changeName(movies));
  
  