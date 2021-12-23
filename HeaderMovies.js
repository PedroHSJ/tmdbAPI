const genero_originals = `/discover/movie?with_genres=28&language=pt-BR&page=1&api_key=${API_KEY}`
const info = document.getElementById('info');
const header = document.getElementsByTagName('header')[0];

window.onload = setInterval(() => {
     axios.get(`${API_Base}${genero_originals}`)
     .then(response => {
          console.log(response.data)
          
          const filmes = response.data.results;
          
          const chosen = random(filmes)[0];
          console.log(chosen)
          
          
          header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${chosen.backdrop_path})`;
         
          info.innerHTML = `<h1>${chosen.title}</h1><p>${chosen.overview}</p><button>Assistir</button>`;

          
     })}, 30000)
     
     
     axios.get(`${API_Base}${genero_originals}`)
          .then(response => {
               console.log(response.data)
     
               const filmes = response.data.results;
     
               const chosen = random(filmes)[0];
               console.log(chosen)
     
     
               header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${chosen.backdrop_path})`;
     
               info.innerHTML = `<h1>${chosen.title}</h1><p>${chosen.overview}</p><button>Assistir</button>`;
              
     
          })
