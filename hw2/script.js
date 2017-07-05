const movie = {name : [], year : []}

const addMovieName = function (movie){
    const movieName = prompt("Please enter a movie name")
    movie.name.push(movieName)
}

const addMovieYear = function(movie){
    const movieYear = prompt("Please enter the movie year")
    movie.name.push(movieYear)
}

const allowedActions = {action: ["<name>", "<year>"], description: ["to Enter a movie name", "to Enter the movie year"]}

alert("Welcome to the movie database")

do{
    const action = prompt ("Please select your action: ", "name")

    if (action == "exit") break

    switch (action){
        // case "exit":
        //      alert("You chose to exit")
        //      break 
        case "name":
            addMovieName(movie)
            break
        case "year":
            addMovieYear(movie)
            break
        case "check":
            alert(movie.name + "\r\n" +movie.year)
            break
        case "number":
            alert("Number of movies: " + movie.name.length/2)
            break
        case "actions":
            alert("List of allowed actions: <name> to Enter a movie name, <year> to Enter the movie year, <check> to View the entered movie info, <number> to View the number of movie in the database")
            //alert("List of allowed actions: " +  allowedActions{action, name})
            break
        // case false:
        //     alert("Go away!")
        //     break
         default:
            alert("action not found")
            break
    }
}while (true) //(action != "exit")
