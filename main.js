function createGame(player1, hour, player2, gen, gen2, alt, alt2) {
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira d${gen} ${alt}">
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Bandeira d${gen2} ${alt2}">
    </li>
  `
}

let delay = -0.2;
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
    <section class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${games}
      </ul>
    </section>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador", "o", "o", "Catar", "Equador")) +

  createCard("21/11", "segunda", createGame("england", "10:00", "iran", "a", "o", "Inglaterra", "Irã") + createGame("senegal", "13:00", "netherlands", "o", "a", "Senegal", "Holanda") + createGame("united-states", "16:00", "wales", "os", "o", "Estados Unidos", "País de Gales")) +

  createCard("22/11", "terça", createGame("argentina", "07:00", "saudi-arabia", "a", "a", "Argentina", "Arábia Saudita") + createGame("denmark", "10:00", "tunisia", "a", "a", "Dinamarca", "Tunísia") + createGame("mexico", "13:00", "poland", "o", "a", "México", "Polônia") + createGame("france", "16:00", "australia", "a", "a", "França", "Austrália")) +

  createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia", "e", "a", "Marrocos", "Croácia") + createGame("germany", "10:00", "japan", "a", "o", "Alemanha", "Japão") + createGame("spain", "13:00", "costa-rica", "a", "a", "Espanha", "Costa Rica") + createGame("belgium", "16:00", "canada", "a", "o", "Bélgica", "Canadá")) +

  createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon", "a", "os", "Suíça", "Camarões") + createGame("uruguay", "10:00", "south-korea", "o", "a", "Uruguai", "Coreia do Sul") + createGame("portugal", "13:00", "ghana", "e", "o", "Portugal", "Gana") + createGame("brazil", "16:00", "serbia", "o", "a", "Brasil", "Sérvia")) +

  createCard("25/11", "sexta", createGame("wales", "07:00", "iran", "o", "o", "País de Gales", "Irã") + createGame("qatar", "10:00", "senegal", "o", "o", "Catar", "Senegal") + createGame("netherlands", "13:00", "ecuador", "a", "o", "Holanda", "Equador") + createGame("england", "16:00", "united-states", "a", "os", "Inglaterra", "Estados Unidos"))