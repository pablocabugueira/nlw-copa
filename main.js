function createGame(player1, hour, player2, gen, gen2, alt, alt2) {
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira d${gen} ${alt}">
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Bandeira d${gen2} ${alt2}">
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <section class="card">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </section>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
      <img src="assets/logo-nlw.svg" alt="Logo da NLW Copa">
  </header>

  <main>
      ${createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador", "o", "o", "Catar", "Equador"))}

      ${createCard("21/11", "segunda", createGame("england", "10:00", "iran", "a", "o", "Inglaterra", "Irã") + createGame("senegal", "13:00", "netherlands", "o", "a", "Senegal", "Holanda") + createGame("united-states", "16:00", "wales", "o", "o", "Estados Unidos", "Gales"))}

      ${createCard("22/11", "terça", createGame("argentina", "07:00", "saudi-arabia", "a", "a", "Argentina", "Arábia Saudita") + createGame("denmark", "10:00", "tunisia", "a", "a", "Dinamarca", "Tunísia") + createGame("mexico", "13:00", "poland", "o", "a", "México", "Polônia") + createGame("france", "16:00", "australia", "a", "a", "França", "Austrália"))}
  </main>
`