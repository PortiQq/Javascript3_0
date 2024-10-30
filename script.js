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
  

    cw2.addEventListener("click", function () {
      //TODO
    });
  
    cw3.addEventListener("click", function () {
      //TODO
    });


  })();
  