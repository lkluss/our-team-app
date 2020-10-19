# OurTeamApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

# Architecture

Since the application is very simple, I didn't want to overcomplicate it. After considering many approaches, I decided to use a simple, flat design. With the assumption that I do not edit the api and images that were provided, I wanted to create application that would be usable with different set of data.

My assumptions for this application were:

1. You can display more than one team on the page
2. Each team can have any number of team members

- Business model is mapped to presentation model with an Array object, which makes it easier to iterate through any number of team members

3. Theam description is static and does not change when browsing

- no need to reload data, team information is downloaded once by component `TeamProfileComponent` and passed to child components using input properties

4. Images and description components can be reused
