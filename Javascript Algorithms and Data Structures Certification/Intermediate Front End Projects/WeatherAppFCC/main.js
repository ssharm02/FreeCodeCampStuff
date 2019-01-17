/*
Coded by Sarthak Sharma for fun and free code camp intermediate front end projects
*/
$(document).ready(function() {
    //Unique key needed to connect to the weather APIXU API
    var API_Key = "b322e2d5fc064bba91f205217182501&q=";
    //Stores the logitude and latitude in an array
    var LongitudeAndLatitude;

    //Image array stores the images for appropriate weather condition
    var img = ["img/clear.jpg",
    "img/cloudy-day.jpg", 
    "img/cloudy-night.jpg",
    "img/fog-day.jpg",
    "img/fog-night.jpg",
    "img/heavy-rain-day.jpg",
    "img/heavy-rain-night.jpg",
    "img/ice-pellets.jpg", 
    "img/light-rain-day.jpg",
    "img/light-rain-night.jpg",
    "img/partly-cloudy-day.jpg",
    "img/partly-cloudy-night.jpg",
    "img/snow.jpg",
    "img/snow-light.jpg", 
    "img/sunny.jpg",
    "img/thunder.jpg"];
    //console.log(img);
    
    //Array variables to display appropriate images 
    var clear = [1000],
        partlyCloudy = [1003],
        cloudy = [1006, 1009],
        lightRain = [1072, 1050, 1053, 1168, 1080, 1183, 1171, 1063, 1083, 1086, 1089, 1240, 1273,1153],
        heavyRain = [1192, 1195, 1198, 1201, 1243, 1246],
        thunder = [1087, 1276],
        fog = [1030, 1135, 1147],
        icePellets = [1237, 1261, 1264],
        lightSnow = [1066, 1069, 1204, 1249, 1207, 1210, 1213, 1216, 1219, 1252, 1255],
        snow = [1114, 1117, 1222, 1225, 1258, 1279, 1282];
    
        var nightTimes = [18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6];

    
    /*Connect to the APIXU API, initially gets data, form complete connection API URL using unique key,
    *longitude, latitude and a five day forecast for the users's region using string concatenation
    */
    $.getJSON('http://ipinfo.io', function(data) {
        LongitudeAndLatitude = data.loc.split(",");
        console.log(LongitudeAndLatitude);
        var API_Link = "http://api.apixu.com/v1/forecast.json?key=";
        var FiveDayForecast = "&days=5";
        //This URL link is unique for user depending on their geolocation
        var UniqueAPIConnectionURL = API_Link + API_Key + LongitudeAndLatitude[0] + ',' + LongitudeAndLatitude[1] + FiveDayForecast;
        console.log(UniqueAPIConnectionURL);

        $.getJSON(UniqueAPIConnectionURL, function(WeatherData) {
            //These variables store the various weather conditions to be displayed on the web page
            var city = WeatherData.location.region;
            //using WeatherData.location.name isn't precise as it gives a far away location
            //console.log("city is " + city);
            var country = WeatherData.location.country;
            var localtime = new Date();
            var hours = localtime.getHours();
			//console.log("time is " + hours);
            var temp_f = WeatherData.current.temp_f;
            var temp_c = WeatherData.current.temp_c;
            var humidity = WeatherData.current.humidity;
            var wind_kph = WeatherData.current.wind_kph;
            var wind_mph = WeatherData.current.wind_mph;
            var weatherText = WeatherData.current.condition.text;
            //console.log(weatherText);
            var icon = WeatherData.current.condition.icon;
            var currentIconCode = WeatherData.current.condition.code;
            //console.log(currentIconCode);
            var tempSwap = true;
            var windSwap = true;
            var tempSwapForecast = true;
            var iconsLinkNight = "//cdn.apixu.com/weather/64x64/night/";
            var iconsLinkDay = "//cdn.apixu.com/weather/64x64/day/";
            var forecastdayData = WeatherData.forecast.forecastday;

            //These variables get the 5 day forecast data (day, maxtemp, mintemp)
            var ForecastDays = forecastdayData.map(function(ForecastData) {
                return ForecastData.day;
            });

            var maxtempc = ForecastDays.map(function(ForecastData) {
                return ForecastData.maxtemp_c;
            });

            var mintempc = ForecastDays.map(function(ForecastData) {
                return ForecastData.mintemp_c;
            });

            var maxtempf = ForecastDays.map(function(ForecastData) {
                return ForecastData.maxtemp_f;
            });

            var mintempf = ForecastDays.map(function(ForecastData) {
                return ForecastData.mintemp_f;
            });
            
            /*
            *Method changes background image of the body 
            *depending on the current time and appropriate weather conditions
            */
            (function backgroundImageChange() {
                // if weather clear
                if (clear.indexOf(currentIconCode) !== -1 && nightTimes.indexOf(hours) !== -1) {
                    //Image index Clear
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[0] +')');
                } else if (clear.indexOf(currentIconCode) !== -1 && hours < 18 && hours > 6) {
                    //Image index Sunny
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[14] + ')');
                }

                // if weather partly cloudy
                if (partlyCloudy.indexOf(currentIconCode) !== -1 && nightTimes.indexOf(hours) !== -1) {
                    //Image index partly cloudy night
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[11] + ')');
                } else if (partlyCloudy.indexOf(currentIconCode) !== -1 && hours < 18 && hours > 6) {
                    //Image index partly cloudy day
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[10] + ')');
                    console.log("hellooooo");
                }

                // if weather Cloudy
                if (cloudy.indexOf(currentIconCode) !== -1 && nightTimes.indexOf(hours) !== -1) {
                    //Image index cloudy night
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[2] + ')');
                } else if (cloudy.indexOf(currentIconCode) !== -1 && hours < 18 && hours > 6) {
                    //Image index cloudy day
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[1] + ')');
                }

                // if weather lightRain
                if (lightRain.indexOf(currentIconCode) !== -1 && nightTimes.indexOf(hours) !== -1) {
                    //Image index ligt rain night
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[9] + ')');
                } else if (lightRain.indexOf(currentIconCode) !== -1 && hours < 18 && hours > 6) {
                    //Image index light rain day
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[8] + ')');
                }

                // if weather heavyRain
                if (heavyRain.indexOf(currentIconCode) !== -1 && nightTimes.indexOf(hours) !== -1) {
                    //Image index Heavy Rain night
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[6] + ')');
                } else if (heavyRain.indexOf(currentIconCode) !== -1 && hours < 18 && hours > 6) {
                    //Image index Heavy Rain day 
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[5] + ')');
                }

                // if weather thunder
                if (thunder.indexOf(currentIconCode) !== -1) {
                    //Image index thunder
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[15] + ')');
                }

                // if weather fog
                if (fog.indexOf(currentIconCode) !== -1 && nightTimes.indexOf(hours) !== -1) {
                    //Image index night fog
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[4] + ')');
                } else if (fog.indexOf(currentIconCode) !== -1 && hours < 18 && hours > 6) {
                    //Image index day fog
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[3] + ')');
                }

                // if weather icePellets
                if (icePellets.indexOf(currentIconCode) !== -1) {
                    //Image index ice pellets
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[7] + ')');
                }

                // if weather lightSnow
                if (lightSnow.indexOf(currentIconCode) !== -1) {
                    //Image index light snow
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[13] + ')');
                }

                // if weather Snow
                if (snow.indexOf(currentIconCode) !== -1) {
                    //Image index snow
                    $('#bg-image, #weather-box').css('background-image', 'url(' + img[12] + ')');
                }
            })();


            /*
            *ForecastWeek method displays the day of the week for the five upcoming days (including today)
            */
            (function forecastWeek() {
                var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var dateOne = new Date();
                var DateToday = dateOne.getDay();
                $('.forecastText').each(function(fiveDays, data) {
                    //Formula for five upcoming days including today
                    $(data).html(daysOfWeek[(DateToday + fiveDays) % 7]);
                });
            })();

            /*
            *Forecaste Data method displays all the forecast data on the web page
            */
            (function forecastData() {

                $('.forecasticons img').each(function(i) {
                    $(this).attr('src', ForecastDays[i].condition.icon);
                });

                $('.frc-temp').each(function(i) {
                    $(this).data("units", "c");
                    $(this).html(Math.round(maxtempc[i]) + " - " + Math.round(mintempc[i]));

                });
                //Change weather units if C or F are clicked
                $('.frc-degree').on("click", function() {
                    //Assign var to HTML elements as they will be used
                    var myTempEl = $(this).parent().find(".frc-temp");
                    var myIndex = $(".forecastday").index(
                        $(this).parents(".forecastday")
                    );
                    /****
                     * Above, we created a data attribute on the
                     *  .frc-temp element to store the units. By
                     *  doing this, the element becomes self-
                     *  contained. Here, we can toggle the units
                     *  based on that data attribute.
                     ****/
                    if (myTempEl.data("units") === "f") {
                        // First, switch the unit attribute...
                        myTempEl.data("units", "c");
                        // Then, replace the contents of the temp el
                        myTempEl.hide().html(
                            Math.round(maxtempc[myIndex]) +
                            " - " +
                            Math.round(mintempc[myIndex])).fadeIn(700);
                        // Then, set the contents of this to 'c'
                        $(this).html(" &deg;C");
                        tempSwapForecast = true;
                    } else {
                        myTempEl.data("units", "f");
                        myTempEl.hide().html(
                            Math.round(maxtempf[myIndex]) +
                            " - " +
                            Math.round(mintempf[myIndex])).fadeIn(700);
                        $(this).html("&deg;F");
                        tempSwapForecast = false;
                    }
                });
            })();

            /*
            *This method displays the weather data on the web page
            */
            (function cityBox() {
                $("#city-box").html(city + " , " + country);
                $('#city-box').prepend('<div class="row"><img class="icon" alt="weather-icon" src="' + icon + '"></div>');
                $('#weather').html(Math.round(temp_c));
                $('#wind').html(wind_kph);
                $('#textTemp').html(weatherText);
            })();
            
            /*
            *buttonDegree method swaps the degree units between Celcius and Fahrenheit
            *Clicking C or F will display temperature in appropriate unit
            */
            (function buttonDegree() {
                $('#btn-degree').click(function() {
                    if (tempSwap === false) {
                        $('#weather').hide().html(Math.round(temp_c)).fadeIn(700);
                        $('#btn-degree').html("&deg;C");
                        tempSwap = true;
                    } else {
                        $('#weather').hide().html(Math.round(temp_f)).fadeIn(700);
                        $('#btn-degree').html("&deg;F");
                        tempSwap = false;
                    }
                });
            })();

            /*
            *buttonWind method swaps the wind units between kph and mph
            *Clicking kph or mph will display speed in appropriate unit
            */
            (function buttonWind() {
                $('#btn-wind').click(function() {
                    if (windSwap === false) {
                        $('#wind').hide().html(wind_kph).fadeIn(700);
                        $('#btn-wind').html("<strong>kph</strong>");
                        windSwap = true;
                    } else {
                        $('#wind').hide().html(wind_mph).fadeIn(700);
                        $('#btn-wind').html("<strong>mph</strong>");
                        windSwap = false;
                    }
                });
            })();
        });
    });
});
