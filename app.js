const moviesService = require("./movies");



const invokeAction = async ({action, id, title, director}) => {
    switch (action) {
        case "list":
        const allMovies = await moviesService.getAllMovies();
        return console.log(allMovies);
        case "getMovieById":
            const oneMovie = await moviesService.getMovieById(id);
            return console.log(oneMovie);
        case "addMovie":
            const newMovie = await moviesService.addMovie({title,director});
            return console.log(newMovie);
        case "updateMovieById":
            const updateMovie = await moviesService.updateMovieById(id,{title,director});
            return console.log(updateMovie);
        case "deleteMovieById":
            const deleteMovie = await moviesService.deleteMovieById(id);
            return console.log(deleteMovie);
        default:
            console.log("Unknown action");
    }

}

// invokeAction({action: "list"});
// invokeAction({action: "getMovieById", id:"zCd_RioNMOBaQwAXnc8Px"});
// invokeAction({action: "addMovie", title: "Avatar way of water", director: "James Cameron"});
// invokeAction({action: "updateMovieById", id: "",  title: "Avatar way of water", director: "james Cameron"})
// invokeAction({action: "deleteMovieById", id: ""})

