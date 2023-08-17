document.addEventListener("DOMContentLoaded", function() {
    // Get references to the necessary elements
    var cityDropdown = document.getElementById("city-dropdown");
    let weatherDetail = document.getElementById("weather-details")
    let table = document.createElement('table')
    weatherDetail.appendChild(table)
    let tablerow = document.createElement('tr')
    table.appendChild(tablerow)

    
    // Add an event listener to the dropdown
    cityDropdown.addEventListener("change", async function() {
      var selectedCity = cityDropdown.value;
      console.log("Selected city:", selectedCity);

      const options = {
        method: 'GET',
        url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
        params: {
          text: `${selectedCity}`,
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '17f0065e84msh79f88ee96a0c228p1348a8jsn13e73def9177',
          'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        let result = response.data[0]
        console.log(result);
        for(let key in result){
          let theader1 = document.createElement('th')
          theader1.textContent = key
          tablerow.appendChild(theader1)
          let theader2 = document.createElement('th')
          theader2.textContent = result[key]
          tablerow.appendChild(theader2)
        }
        
      } catch (error) {
        console.error(error);
      }
      
      // You can now use the selectedCity value to perform further actions, such as fetching weather data
    });
  });
