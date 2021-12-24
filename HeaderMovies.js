const genero_Header = `/trending/movie/day?api_key=${API_KEY}&language=pt-BR`
const info = document.getElementById('info');
const header = document.getElementsByTagName('header')[0];

window.onload = setInterval(() => {
     axios.get(`${API_Base}${genero_Header}`)
     .then(response => {
          console.log(response.data)
          
          const filmes = response.data.results;
          
          const chosen = random(filmes)[0];
          console.log(chosen)
          
          
          header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${chosen.backdrop_path})`;
         
          info.innerHTML = `<h1>${chosen.title}</h1><p>${chosen.overview}</p><button>Assistir</button>`;

          
     })}, 30000)
     
     
     axios.get(`${API_Base}${genero_Header}`)
          .then(response => {
               console.log(response.data)
     
               const filmes = response.data.results;
     
               const chosen = random(filmes)[0];
               console.log(chosen)
     
     
               header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${chosen.backdrop_path})`;
     
               info.innerHTML = `<h1>${chosen.title}</h1><p>${chosen.overview}</p><button>Assistir</button>`;
              
     
          })
