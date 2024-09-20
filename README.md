# CODTECH-Task-1
Codtech Internship Task-1 (Weather Forecast WebAPP)
**Name:** SOURAV KARANTH
**ID:** CT08DS7752
**Domain:** WEB DEVELOPMENT
**Duration:** SEPTEMBER TO OCTOBER 2024 
**Mentor:** NEELA SANTHOSH KUMAR

**PROJECT OVERVIEW**
This React weather web app presentations modern climate records and a four-day forecast for a selected city, making use of the OpenWeatherMap API to fetch records. Here's a top level view of the important thing additives:

1. Imports and Assets
The app imports React, along with hooks like useState, useEffect, and useRef for country and lifecycle management.
Several weather icons (for clean, cloud, drizzle, snow, rain, wind, humidity) are imported to visually constitute distinctive climate conditions.
2. Helper Functions
getWeatherIcon: This function determines the suitable climate icon to display primarily based at the climate condition code from the API.
Three. Main Component (Box)
City Search: An enter field lets in customers to search for a town's climate by means of typing its name and urgent "Enter" or clicking the search icon. The city call is saved inside the town country.
Weather Data Fetching: The seek characteristic makes an API call to OpenWeatherMap using the entered town name. If the API reaction is a hit, it extracts information which include temperature, humidity, wind pace, and the precise weather icon. If an errors occurs (e.G., invalid town name), it displays an error message.
Display of Weather Information:
The present day temperature, town name, humidity, and wind pace are displayed.
The corresponding climate icon is proven alongside the temperature and other weather info.
4. Forecast Component (Forecast)
This factor fetches a four-day weather forecast using the OpenWeatherMap API.
Data Filtering: The forecast statistics retrieved from the API is filtered to pick out unique time intervals (like 3-hour durations) for the approaching days.
Display of Forecast: The forecast for the next 4 days is displayed with icons and temperatures. The information is laid out in a grid-like structure for clean presentation.
5. Key Features:
City Search: The user can input a town call to get weather updates.
Current Weather Display: Shows temperature, climate circumstance, humidity, and wind velocity for the selected metropolis.
Four-Day Forecast: Displays weather predictions for the next 4 days, including icons and temperatures.
Error Handling: Displays mistakes messages if the weather records cannot be fetched (e.G., incorrect metropolis name or community problems).
6. User Interaction
The app updates in actual-time whilst a consumer enters a new metropolis, re-fetching statistics via the API and updating the show dynamically.
This app combines responsive design, API interaction, and icon-based UI for a easy but useful climate display device.
<img width="301" alt="WeatherX" src="https://github.com/user-attachments/assets/105cccbd-0c24-491a-bcf8-cd4077fda920" >
