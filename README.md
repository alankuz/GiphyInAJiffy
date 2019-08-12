# GiphyInAJiffy

This project uses the GIPHY API to display paused .gifs from their website, once clicked the .gifs animate. It includes the ratings, as well as the titles of each of the random, user uploaded .gifs.

## Getting Started

Simply press a country button in the list provide on page load. If you would like to add a new country, then type it into the seach bar and press the submit button. If you would like the .gifs to animate, simply click them to have them play and click again to pause them. 

### Prerequisites

-Fingers
-Functional mouse/trackpad
-Newest browser update recommended**

### Installing

To install, and modify this program, you may press the fork button and then fork it to your computer through either gitbash, or terminal. To test the API you may press the following link:
[Giphy In A Jiffy](https://alankuz.github.io/GiphyInAJiffy/)

## Deployment

You may fork the files, or use the link to add the program to your own pages.

## Built With

* [Jquery](https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js) - Script framework
* [Giphy API](https://developers.giphy.com/) - .gif API

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/alankuz/GiphyInAJiffy/tags). 

## Author

* **Alan Kuzmanovic** - *Initial work* - [alankuz](https://github.com/alankuz)

## License

No license agreements, do as you will with the program. 

## Psuedocode:

On load> Create 10 buttons labeled under a different country

On button press> Take label name, place information into the Giphy link, load 2 seperate version of the gif, 1 animated, 1 still>Put the .gifs into an assigned DIV

On search input>Put new name/country into the Button div created earlier, by appending> Make new button follow original on click handler to generate image

On image click>switch the original link of the still .gif>On click again>switch to animated .gif

