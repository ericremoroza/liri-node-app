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
* NodeJS


## LIRI in Action
If no title is added after "movie-this"... 
![Default Movie Input](images/DefaultMovieThis.png)
... the command line would output data for "Mr. Nobody".
![Default Movie Input Result](images/DefaultMovieThisResult.png)

Adding a movie title after "movie-this"
![Adding a movie title](images/MovieThisInput.png)
![Adding a movie title result](images/MovieInputThisResult.png)

No artist name entered...
![No artist](images/ConcertThisEmpty.png)
![No artist result](images/ConcertThisEmptyResult.png)

Artist name entered... 
![Insert artist](images/ConcertEltonJohn.png)
![Tour Dates](images/ConcertEltonJohnResults.png)

Default Spotify Result
![Spotify function without input](images/EmptySpotify.png)
![Spotify no input result](images/EmptySpotifyResult.png)


Spotify Input
![Spotify Input](images/SpotifyInput.png)
![Spotify Input Result](images/SpotifyInputResult.png)

Reading off text file
![Do This](images/DoThisInput.png)
![Text Edit](images/TextEdit.png)
![Do This Result](images/DoThisResult.png)
### Useful Notes

If you're on a public network, to run a command, make sure to put the objective in quotation marks, like so:
```
node liri.js movie-this "The Karate Kid"
```

```
node liri.js concert-this "Elton John"
```