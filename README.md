# Day8

1)

class Movie { mtitle; mstudio; mrating; filteredMovies;

constructor(title, studio, rating = "PG") { this.mtitle = title; this.mstudio = studio; this.mrating = rating; } getPG(movies) { this.filteredMovies= movieList.filter((element) => { if (element.rating === "PG" && movies.indexOf(element.title)!==-1) { return element; }

});
return this.filteredMovies;
} } var movieList = [ { title: "a", studio: "north", rating: "PG" }, { title: "b", studio: "south", rating: "PG" }, { title: "c", studio: "east", rating: "PG" }, { title: "d", studio: "west", rating: "PG" }, ]; var Movie1 = new Movie( movieList[0].title, movieList[0].studio, movieList[0].rating ); console.log("Movies rating PG " + Movie1.getPG(["a", "b", "c"]));

2)


class Person{ name; contact; email; constructor(name, contact, email){ this.name=name; this.contact=contact; this.email=email; }

printcontactdetails(){ var contactdetails= this.contact + this.email; // console.log(this.contact); // console.log(this.email); return contactdetails; }

}

let details=[{name:"Abcde"}, {contact:9876543210}, {email:"abc@gmail.com"} ]

let contactdetailsinstance= new Person(details[0].name, details[1].contact, details[2].email);

console.log(contactdetailsinstance.printcontactdetails());

3)

class Uber { distance; amount; constructor(kilometer) { this.distance = kilometer; } amountperKilometer = 10;

fair() { var amount = this.amountperKilometer * this.distance; return amount; } }

let amountInstance = new Uber(40); 
console.log(amountInstance.fair());

