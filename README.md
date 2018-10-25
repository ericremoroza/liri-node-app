# LIRI Node App

Language Interpretation and Recognition Interface.

* Operated in a command line, this application receives parameters and returns data.

### Technologies Used
* Request NPM
```
npm install request
```
* fs NPM
```
npm install fs
```
* Spotify NPM
```
npm install node-spotify-api
```

### Useful Notes

If you're on a public network, to run a command, make sure to put the objective in quotation marks, like so:
```
node liri.js movie-this "The Karate Kid"
```

```
node liri.js concert-this "Elton John"
```

### LIRI in Action

![Default Movie Input](images/DefaultMovieThis.png)
![Default Movie Input Result](images/DefaultMovieThisResult.png)

![Adding a movie title](images/MovieThisInput.png)
![Adding a movie title result](images/MovieThisInputResult.png)

![No artist](images/ConcertThisEmpty.png)
![No artist result](images/ConcertThisEmptyResult.png)

![Insert artist](images/ConcertEltonJohn.png)
![Tour Dates](images/ConcertEltonJohnResults.png)