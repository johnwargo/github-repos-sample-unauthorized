# Eleventy Display GitHub Repositories

Playing around with displaying all public repositories in my personal GitHub account in an Eleventy site.

**Note:** The approach used in this repository uses unauthenticated access to the GitHub APIs; since GitHub limits API calls for unauthenticated access, your site builds will fail after 60 API calls in an hour. 

This repository includes a complete Eleventy site demonstrating the capability. To try it out, start by cloning the repository then navigate to the project's `/src/_data` folder and edit the `repos.js` file (`/src/_data/repos.js`).  In the file, look for the `githubAccount` constant declaration:

```js
const githubAccount = 'johnwargo';
```

Change the value in quotes to your GitHub account name then save your changes:

```js
const githubAccount = 'your-github-account-name';
```

Next, open a terminal window or command prompt, navigate to the cloned project folder, and execute the following commands:

1. `npm install`
2. `eleventy --serve`

Click the link that displays at the end of the build process and you should see something like this:

<<screen shot>>

To add this capability to an Eleventy site, simply copy the modified `repos.js` file to the Eleventy project's `_data` folder. With that in place, the Eleventy site has access to a `repos` data collection you can use to render data on any page in your site.

The data collection has a lot of properties, open this URL in a browser to see them all: https://api.github.com/users/johnwargo/repos.

Page data rendered in the demonstration site using [MVP.css](https://andybrewer.github.io/mvp/).

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com).

If you find this code useful and feel like thanking me for providing it, please consider <a href="https://www.buymeacoffee.com/johnwargo" target="_blank">Buying Me a Coffee</a>, or making a purchase from [my Amazon Wish List](https://amzn.com/w/1WI6AAUKPT5P9).
