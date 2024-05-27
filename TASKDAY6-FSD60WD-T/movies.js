class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
    static getPG13(movies){
        return movies.filter(movie => movie.rating === "PG-13");

    }
}

let AllMovies = [
    { title: "Superdelux", studio: "lyca", rating: "PG" },
    { title: "casinoroyal", studio: "Eon production", rating: "PG-13" },
    { title: "master", studio: "xavierbrutto", rating: "PG" },
    { title: "vikram", studio: "rajkamalfilms", rating: "PG" }
];

const movieObjects = AllMovies.map(movie => new Movie(movie.title, movie.studio, movie.rating));

console.log(Movie.getPG(movieObjects));
console.log(Movie.getPG13(movieObjects));