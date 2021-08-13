/* eslint-disable indent */

fetch('./story/species.json')
  .then((response) => response.json())
  .then((json) => {
    setTimeout(() => {
      const species = document.querySelector('.species');
      json.species.forEach((element) => {
        species.insertAdjacentHTML(
          'beforeend',
          `<div class="species__item">
              <li>${element.species} </br>
               Status: ${element.status}</li>
          </div>`
        );
      });

      const loader = document.querySelector('.lds-spinner');
      loader.style.display = 'none';
    }, 2000);
  });
