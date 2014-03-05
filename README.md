angular-github-status
=====================

This is an angular module (in fact an angular directive) that outputs the github status into your project.  
It can be very usefull for applications that rely on github api.  

It is in fact a widget that outputs the [github api status](https://status.github.com/api/status.json) as a text and as a [green](http://developer.github.com/images/status-icon-good.png)/[yellow](http://developer.github.com/images/status-icon-minor.png)/[red](http://developer.github.com/images/status-icon-major.png) octocat.

The simplest way to add it into your project is to add it as a bower component:  
`bower install angular-github-status`  
After that:  
 
 * add the main files to your project (*angular-github-status.js* and *angular-github-status.css*)
 * add the module as a dependency to your angular app (`angular.module('myFancyApp',  ['githubStatus'])`)
 * add the directive anywhere on the site where you want the status to be shown (`<div github-status></div>`)
 * tweak the css however you want in order to suite your needs  

Feel free to [make any suggestions, pull requests and issues](https://github.com/gion/angular-github-status-directive/issues/new).
