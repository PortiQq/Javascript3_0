(function () {
    const cw1 = document.getElementById("cw1");
    const cw2 = document.getElementById("cw2");
    const cw3 = document.getElementById("cw3");
    const answer = document.getElementById("answer");
  
    let postId = 1;
  

    f1_submit.addEventListener("click", function () {
      answer.innerHTML = "Processing...";
      let capital = document.getElementById("capital").value;
      fetch(`https://restcountries.com/v3.1/capital/${capital}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                let country = data[0];
                
                let html = `
                  <table border="1">
                    <tr>
                      <th>Name</th>
                      <th>Capital</th>
                      <th>Population</th>
                      <th>Region</th>
                      <th>Subregion</th>
                    </tr>
                    <tr>
                      <td>${country.name.official}</td>
                      <td>${country.capital[0]}</td>
                      <td>${country.population}</td>
                      <td>${country.region}</td>
                      <td>${country.subregion}</td>
                    </tr>
                  </table>
                `;
                answer.innerHTML = html;
            } else {
                answer.innerHTML = "Kraj z taką stolicą nie istnieje";
            }
        })
    });


    f2_submit.addEventListener("click", function(){
        const apiToken = document.getElementById("apiToken").value;

        const headers = new Headers();
        headers.append("token", apiToken);

        document.getElementById("answer_2").innerHTML = "Przetwarzanie...";

        fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", { headers: headers })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Błąd pobierania danych. Sprawdź token API.");
            }
            return response.json();
        })
        .then((data) => {
                let html = `
                <table border="1">
                    <tr>
                        <th>Station ID</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
            `;

            data.results.forEach((station) => {
                html += `
                    <tr>
                        <td>${station.id}</td>
                        <td>${station.name || "N/A"}</td>
                        <td>${station.state || "N/A"}</td>
                        <td>${station.latitude || "N/A"}</td>
                        <td>${station.longitude || "N/A"}</td>
                    </tr>
                `;
            });

            html += "</table>";
            document.getElementById("answer_2").innerHTML = html;
        })
        .catch((error) => {
            document.getElementById("answer_2").innerHTML = `Błąd: ${error.message}`;
        });

    });


  

    cw2.addEventListener("click", function () {
      //TODO
    });
  
    cw3.addEventListener("click", function () {
      //TODO
    });


  })();
  