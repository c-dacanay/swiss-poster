<!-- Every README should start with an H1 -->

# Making & Breaking the Grid

This is a remix of a Josef Müller-Brockmann poster in the browser. The text is taken from my personal "Spotify unwrapped" from 2019.

<!-- ![Musica Viva by Josef Müller-Brockmann](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/JMB-TT5.jpg?raw=true) -->

## Wireframe & Style Guide

Building the style guide for this poster was fairly straightforward; I unfortunately used a lo-res image to base the guide off of so I was unable to make out some of the smaller text. It was a good exercise to flex my design muscles again.
![Style Guide](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/StyleGuide_Swiss.png?raw=true)
I wanted to translate the poster to the browser format. The proportions are a little skewed horizontally but otherwise I wanted to keep the rest of the grid intact.  
![Wireframe](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/WireFrame_Swiss.png?raw=true)
The remix is quite straightforward as well! I hadn't thought of web interaction at this point but I also switched out the font for something I knew could be hosted online.
![Remix](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/Remix_Swiss.png) |

<!-- It is essential to describe how to set up your project -->

## Code

![Progress 1](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/progress1.png?raw=true)
![Progress 2](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/progress2.png?raw=true)
![Progress 5](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/progress5.png?raw=true)
![Progress 3](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/progress3.png?raw=true)
![Progress 4](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/progress4.png?raw=true)

```
const colors = ['#9a9786', '#00a793', '#202121', '#d400d8', '#202121', '#f1ce00'];
x = document.getElementsByClassName("box");

window.onload = function () {
    switchColors();
}

window.onclick = function () {
    switchColors();
}

function switchColors() {
    for (i = 0; i < x.length; i++) {
        let random = Math.floor(Math.random() * 7);
        console.log(random)
        x[i].style.backgroundColor = colors[random];
    }
}
```

<!-- ![Javascript for color change](https://github.com/c-dacanay/swiss-poster/blob/master/public/images/js.png?raw=true) -->

# Glitch

This project is hosted on Glitch.

# Built with

- [VS Code](https://code.visualstudio.com/)
- [Figma](https://www.figma.com/)
- [Github](https://github.com)

# Author

- [Christina Dacanay](http://cdacanay.com/) -- for Dynamic Web Development at [NYU ITP](https://itp.nyu.edu)

<!-- ## Code of Conduct -->

<!-- Please read the [CODE OF CONDUCT](https://www.mozilla.org/en-US/about/governance/policies/participation/) -->

<!-- ## License -->

<!-- This is README template is licensed according to [Attribution 4.0 International (CC BY 4.0) ](https://creativecommons.org/licenses/by/4.0/) -->
<!-- thank and reference all the things that made your project happen -->

<!-- ## Acknowledgements

- [Creative Commons](https://creativecommons.org/licenses/by/4.0/) for their licensing documentation
- [The Good ReadMe Project](https://github.com/itp-dwd/2020-spring/blob/master/templates/readme-template.md) -->
  <!-- For your assignments you might consider  -->
