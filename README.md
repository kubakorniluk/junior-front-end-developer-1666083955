# Task browser

Task browser made as a recruitment task for [https://nerds.family](https://nerds.family)

## App features

The main features of the application are the ability to view tasks that have their status (done, active, blocked), viewing business contexts unique to each task, and the ability to read each of these contexts. In addition, when you click on the business context, it should show all its content. And after 72 hours of intensive work (seriously), this project was created - [https://kubakorniluk.pl/task-browser/](https://kubakorniluk.pl/task-browser/).

## 'Read' function

The only feature that I was unable to complete in time was displaying as the first the business context that was read before. For the application to work, I had to replace it with displaying the first business context from the list. I've tried many solutions, as can be seen in the commented code in ```TaskContextProvider.jsx```. It works fine, however it makes the state responsible for displaying business context content work only after the second click. I've tried to solve this in several ways, but ended up right where I started.

## Technologies used
* ```React```
* ```Context API```
* ```CSS```