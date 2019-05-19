let show = document.querySelector('#show')
let button = document.querySelector('button')


button.addEventListener('click', function () {
  axios
    .get('https://randomuser.me/api/?gender=female&results=3')
    .then(response => {
      for (i = 0; i < 3; i++) {
        console.log(response.data)
        let data = response.data.results[i]
        let createDiv = document.createElement('div')
        let innerHTML = `
            <div class="card">
              <img src="${data.picture.large}" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">${data.name.first} ${data.name.last}</h5>
                <p class="card-text">${data.email}</p>
              </div>
            </div>
        `
        createDiv.innerHTML = innerHTML
        show.append(createDiv)
      }
    })
    .catch(error => console.log(error))
})