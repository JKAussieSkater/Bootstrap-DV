# Bootstrap-DV

[<img src="https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/No-Components.png" align="right">](https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/No-Components.png) Bootstrap Dependency Validator - Tells you which components aren't configured properly on your HTML page

## Synopsis

Bootstrap-DV is a simple automatic troubleshooting tool designed to identify if the Bootstrap framework has been installed correctly on a webpage. It makes debugging easier for Bootstrap beginners by flagging which Bootstrap dependencies are missing (or not installed correctly).

## Installation

Simply inject the [dist/Bootstrap-DV](https://github.com/JKAussieSkater/Bootstrap-DV/blob/master/dist/Bootstrap-DV.html) code somewhere in the HTML body of your webpage, then view the webpage in a browser.

It's important to realise that this code contains both CSS and JavaScript, and some website hosting servers may strip these out before rendering your website. In this situation, seek assistance from your web-host on how to embed HTML code.

## Code Example

Let's suppose you're a Bootstrap beginner, and you've created your first webpage using Bootstrap code. It doesn't look very appealing at all:

---
[<img src="https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/01-Unappealing-webpage.png">](https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/01-Unappealing-webpage.png)
---
So you try to investigate by injecting the [Bootstrap-DV code](https://github.com/JKAussieSkater/Bootstrap-DV/blob/master/dist/Bootstrap-DV.html) into your webpage:

---
[<img src="https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/02-Inject-Code-Location.png" width="45%">](https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/02-Inject-Code-Location.png) [<img src="https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/03-Injected-Code.png" width="45%" align="right">](https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/03-Injected-Code.png)
---

You save the webpage, and launch it in the browser. This time, Bootstrap-DV will tell us why our webpage looks so ordinary:

---
[<img src="https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/04-Diagnosis.png">](https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/04-Diagnosis.png)
---

Ah ha! The red block of the "Bootstrap Dependency Validator" indicates that the Bootstrap CSS wasn't loaded by the webpage.
Now you simply add the missing link into the `<head>` tag of your webpage, and reload the webpage:

---
[<img src="https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/05-Repaired-Webpage.png">](https://raw.githubusercontent.com/JKAussieSkater/Bootstrap-DV/master/docs/image/05-Repaired-Webpage.png)
---

That looks __much__ better! The "Bootstrap Dependency Validator" shows 4 green ticks, indicating that Bootstrap has been correctly installed on this webpage.

Now, before you forget, it's a good idea to delete the Bootstrap-DV code from your webpage _before_ distribution!

## Tests

If you [download this repository](https://github.com/JKAussieSkater/Bootstrap-DV/archive/master.zip), you can open the HTML files inside the `test/` folder with your web browser of choice:
* `Bootstrap-Ready.html` : Example of a fully functioning Bootstrap webpage
* `Missing-Bootstrap.html` : Example of a webpage missing the Bootstrap stylesheet and JavaScript
* `Missing-CSS.html` : Example of a webpage missing the Bootstrap stylesheet
* `Missing-JS.html` : Example of a webpage missing the Bootstrap JavaScript
* `Missing-jQuery.html` : Example of a webpage missing the jQuery JavaScript library
* `Missing-Everything.html` : Example of a webpage missing all Bootstrap dependencies

## Motivation

Now that ["Bootstrap"](http://getbootstrap.com/) is less of a buzz-word and increasingly depended on by more mobile-first websites, many web-developers are looking at building their websites on a Bootstrap foundation.

One of the problems many Bootstrap begginners will find, is that they're unsure if they've installed Bootstrap correctly. This is mostly due to the fact that Bootstrap is a skeleton foundation, and you really need pre-made Bootstrap plugins and Bootstrap stylesheets, and Bootstrap HTML installed together in harmony, in order to test if it's working. If it isn't working, there's a lot of places to troubleshoot.

This project aims to assist Bootstrap beginners by doing the troubleshooting for them; therefore saving hours wasted on debugging and Googling unhelpful web forums, and hopefully prevent developers from giving up on Bootstrap before they've begun.

## License

Copyright © JKAussieSkater

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.