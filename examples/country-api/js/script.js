const row = document.querySelector('.row');
const btn = document.querySelectorAll('button');

let start = 0;
let end = 50;

const fetchApi = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            let card = "";


            // for (let index = start; index < end; index++) {
            //         card += `    <div class="col-12 col-sm-6 col-md-4">
            //     <div class="card">
            //         <img src="${data[index].flags.png}" class="card-img-top" alt="...">
            //         <div class="card-body">
            //           <h5 class="card-title">${data[index].name.common}</h5>
            //           <p class="card-text">${data[index].capital}</p>
            //         </div>
            //       </div>
            //    </div>`
            // }
            
            

            data.slice(start, end).map(item => {
                card += `    <div class="col-12 col-sm-6 col-md-4">
                <div class="card">
                    <img src="${item.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name.common}</h5>
                      <p class="card-text">${item.capital}</p>
                      <a href="${item.maps.googleMaps}" class="card-text">go to map</a>
                    </div>
                  </div>
               </div>`
            })
            row.innerHTML = card;
        })
}

fetchApi();
btn[0].onclick = () => {
    start = 0;
    end = 50;
    fetchApi();

}

btn[1].onclick = () => {
    start = 50;
    end = 100;
    fetchApi();

}

btn[2].onclick = () => {
    start =100;
    end = 150;
    fetchApi();

}

btn[3].onclick = () => {
    start = 150;
    end = 200;
    fetchApi();

}

btn[4].onclick = () => {
    start = 200;
    end = 250;
    fetchApi();

}