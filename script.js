search.value = 'Kolkata';
let city = 'Kolkata';
getDetails(city);

s_btn.addEventListener("click", function() {
    try{
        city = search.value;
        // API URL
        let apiUrl = `https://api.weatherapi.com/v1/current.json?key=0351ecb7cf2a420abb9163700232008&q=${city}&aqi=no`;
        fetch(apiUrl);
    }
    catch(e){
        apiUrl = `https://api.weatherapi.com/v1/current.json?key=0351ecb7cf2a420abb9163700232008&q=${city}&aqi=no`;
    }
    getDetails(city);
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent right click of mouse
});

function getDetails(city) {
    // API URL
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=0351ecb7cf2a420abb9163700232008&q=${city}&aqi=no`;
    // Fetch data from the API
    try {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Data About the Location
                let city_name = data.location.name;
                let city_region = data.location.region;
                let city_country = data.location.country;
                let city_lat = data.location.lat;
                let city_lon = data.location.lon;
                let city_tz_id = data.location.tz_id;
                let city_localtime_epoch = data.location.localtime_epoch;
                let city_localtime = data.location.localtime;
                // Data About Current Condition
                let condition_text = data.current.condition.text;
                let condition_icon = data.current.condition.icon;
                let condition_code = data.current.condition.code;
                // Data About Current Weather of the location
                let last_updated_epoch = data.current.last_updated_epoch;
                let last_updated = data.current.last_updated;
                let temp_c = data.current.temp_c;
                let temp_f = data.current.temp_f;
                let is_day = data.current.is_day;
                let wind_mph = data.current.wind_mph;
                let wind_kph = data.current.wind_kph;
                let wind_degree = data.current.wind_degree;
                let wind_dir = data.current.wind_dir;
                let pressure_mb = data.current.pressure_mb;
                let pressure_in = data.current.pressure_in;
                let precip_mm = data.current.precip_mm;
                let precip_in = data.current.precip_in;
                let humidity = data.current.humidity;
                let cloud = data.current.cloud;
                let feelslike_c = data.current.feelslike_c;
                let feelslike_f = data.current.feelslike_f;
                let vis_km = data.current.vis_km;
                let vis_miles = data.current.vis_miles;
                let uv = data.current.uv;
                let gust_mph = data.current.gust_mph;
                let gust_kph = data.current.gust_kph;
                
                // set the values
                temp_value.textContent = temp_c;
                humedity_value.textContent = humidity;
                wind_value.textContent = wind_kph;
                
                city_country_name.textContent = city_name+', '+city_country;
                localtime.textContent = city_localtime;
                day_night.textContent = (is_day==0)?'Night':'Day';
                lastupdated.textContent = last_updated;
                condition_icon.src = condition_icon;
                weather_condition.textContent = condition_text;
            })
            .catch(error => {
                console.log("Fetch error:", error);
            });
    } catch (e) {
        console.log("Fetch error:", e);
    }
}
