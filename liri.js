require("dotenv").config();
var keys = require("./keys.js");

var fs = require("fs");

var moment = require("moment");
//npm module access Spotify API
var spotifyAPI = require("node-spotify-api");

var spotify = new spotifyAPI(keys.spotify);

//npm module access OMDB API
var request = require("request");

//requested task
var task = process.argv[2];

//requesting specific information by selected task
var parameter = "";

doThis(task, parameter);

//selects one of the functions to perform
function doThis() {

    parameter = optionalArgument();

    switch (task) {

        //fetches Bands In Town info
        case "concert-this":
            bandsInTown();
            var artistName = parameter;

            if (artistName === "") {
                console.log("--------------------------------------");
                console.log("Your choice of music is undefined.");
                console.log('¯\_(ツ)_/¯');
            } else {
                bandsInTown(artistName);
            }
            break;

        //retrieves song info
        case "spotify-this-song":
            
                var songTitle = parameter;
    
                if (songTitle === "") {
                    spotifySong("Ace of Base The Sign");
                } else {
                    spotifySong(songTitle);
                }
            
            break;

        //retrieves movie info
        case "movie-this":
            var movieName = parameter;

            if (movieName === "") {
                movieThis("Mr. Nobody");
            } else {
                movieThis(movieName);
            }

            break;

        case "do-what-it-says":
            doWhatItSays();
            break;
    }
}

//calls BandsInTown API to retrieve artist and touring info 

function bandsInTown(artist) {
    if (task === "concert-this") {

        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



        request(queryURL, function (error, response, body) {
            // If the request is successful...
            if (!error && response.statusCode === 200) {

                // Parses the body of the site and recovers movie info.
                var artist = JSON.parse(body);

                for (let i = 0; i < artist.length; i++) {

                    var performance = artist[i];
                    // Prints out venue info.
                    console.log("--------------------------------------");
                    console.log("Venue Name: " + performance.venue.name);
                    console.log("Venue Location: " + performance.venue.city);
                    console.log("Date of Event: " + moment(performance.datetime).format("MM/DD/YYYY"));
                }

            }
        });
    }
}


//calls Spotify API to retrieve song info
function spotifySong() {
    var songTitle = parameter;
    
		if(songTitle === ""){
			songTitle = "ace of base the sign";
		}
		params = songTitle;
		spotify.search({ type: "track", query: params }, function(err, data) {
			if(!err){
				var songInfo = data.tracks.items;
				for (var i = 0; i < 5; i++) {
					if (songInfo[i] != undefined) {
                        console.log("--------------------------------------");
                        console.log("Artist: " + songInfo[i].artists[0].name);
                        console.log("Song: " + songInfo[i].name);
                        console.log("Preview URL: " + songInfo[i].preview_url);
                        console.log("Album: " + songInfo[i].album.name);
					}
				}
			}	else {
				console.log("Error :"+ err);
				return;
			}
		});
    
}


//pass query URL to retrieve movie info
function movieThis(movieName) {
    // Runs a request to the OMDB API with the movie specified.
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryURL, function (error, response, body) {
        // If the request is successful...
        if (!error && response.statusCode === 200) {

            // Parses the body of the site and recovers movie info.
            var movie = JSON.parse(body);

            // Prints out movie info.
            console.log("Movie Title: " + movie.Title);
            console.log("Release Year: " + movie.Year);
            console.log("IMDB Rating: " + movie.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
            console.log("Country Produced In: " + movie.Country);
            console.log("Language: " + movie.Language);
            console.log("Plot: " + movie.Plot);
            console.log("Actors: " + movie.Actors);
        }
    });
}

//uses fs node package to read and assimilate text inside random.txt
function doWhatItSays(parameter) {

    fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) {
			logOutput.error(err);
		} else {

			// data is created by array
			var randomArray = data.split(",");

			// Sets task to first item in array (i.e. movie-this)
			task = randomArray[0];

			// Sets optional third parameter to second item in array (i.e. The Karate Kid).
			parameter = randomArray[1];

			// Calls main controller execute action based on task and parameter.
			doThis(task, parameter);
		}
	});
}



//option to include additional data, such as film director
function optionalArgument() {
    paramArray = process.argv;

    for (var i = 3; i < paramArray.length; i++) {
        parameter += paramArray[i];
    }
    return parameter;
}

//process.argv[]
//0 is node
//1 is link
//2 is parameter (which is the movie-this)
//3 is the parameter of the movie name
