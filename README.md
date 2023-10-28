# Elevator Controls App

## Introduction

A React-based application for managing elevator operations. 

The user starts by configurating the elevators and their floor ranges

When a user presses the button, one of the available elevators will start moving towards that floor. 

Many Users can use the control panel in sequence.

Many control panels can be in use at once.

This README will guide you through the installation, configuration, and usage of this app.

This client app works with the following backend which also needs to be set up: https://github.com/MartinKraychev/Elevators-Backend

This app was developed on Firefox and it is suggested that this browser is used. They might be small css differences for other browsers

## Configuration
Before you can start using the Elevator Controls App:

1. Clone the repo

```bash
git clone https://github.com/MartinKraychev/Elevators-Frontend.git
```

2. Install dependancies

```bash
cd Elevators-Frontend
```

```bash
npm i
```

3. Start the app

```bash
npm start
```

## Explanation
The elevator queueing system operates as follows:

Whenever a user presses a button to call the elevator, the requested floor is added to a queue. The floors are inserted into the queue in their appropriate order based on the elevator's current direction.

Examples:

If the current queue is [1, 4, 6], and the user presses the button for floor 5, it will naturally be inserted between floors 4 and 6.

If the queue is [4, 5], and the user presses the button for floor 3, the elevator will prioritize going up to floor 5 first before descending to floor 3. Floor 3 will be added to the end of the queue.

The first floor in the queue is cleared and served every 10 seconds.

It takes 10 seconds for the elevator to travel from one floor to another, regardless of whether it's going from floor 1 to floor 6 or from floor 5 to floor 6. This uniform travel time ensures efficient operation and proper queue management..

## Pages
/config:

  Purpose: This route is used for configuring the elevators and defining their floor ranges.
  
  Workflow: After setting up the elevators and specifying their floor ranges, you can submit the configuration. Upon submission, you will be automatically redirected to the /controls route.
  
/controls:

  Purpose: This route allows users to call the nearest elevator to their current location.
  
  Workflow: When you press a number, the system will automatically call the elevator that is closest to your current location. This facilitates efficient and convenient elevator service.
  
/statuses:

  Purpose: This route provides real-time information about the current position and direction of each elevator.
  
  Workflow: When you access this route, you will be able to see the current floor and direction of movement for each elevator, ensuring transparency and effective elevator management.

## Browser Compatibility

This app was developed and thoroughly tested on Mozilla Firefox. For the optimal experience, it is suggested that you use Firefox as your web browser.

Please note that while the app is designed to work in other browsers, there might be minor CSS differences or rendering variations in those browsers.


