
const marvel = {
	render: () => {

		const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cc8f40ee1b813f464a75c21e8c841ad1&hash=87a19e5b4a7c7960c45bb6774b839627';
		const container = document.querySelector('#marvel-container');
		let contentCards = '';

		fetch(urlApi)
			.then ((res) => res.json())
			.then ((json) => {
				for (const hero of json.data.results){
				let urlHero = hero.urls[1].url;
				contentCards += `
				<div class="cards">
					<div class="card">
					    <div class="card-front">
							<div class="bg"> <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}"> </div>
							<div class="body-front">
								<h1>${hero.name}</h1>
							</div>	
						</div>
						<div class="card-back">
							<div class="body-back">
								<p> hola</p>
								<a href="${urlHero}" target="_blank"> <input type="button" value="Ver más"></input></a>
							</div>
						</div>
					</div>	
				</div>`;
				}
			container.innerHTML = contentCards;
	})

	/*.then ((json) => {
		console.log(json, 'res.json');
		})*/
	}
};

marvel.render()

