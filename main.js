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

  createCard("25/11", "sexta", createGame("wales", "07:00", "iran", "o", "o", "País de Gales", "Irã") + createGame("qatar", "10:00", "senegal", "o", "o", "Catar", "Senegal") + createGame("netherlands", "13:00", "ecuador", "a", "o", "Holanda", "Equador") + createGame("england", "16:00", "united-states", "a", "os", "Inglaterra", "Estados Unidos")) +

  createCard("26/11", "sábado", createGame("tunisia", "07:00", "australia", "a", "a", "Tunísia", "Austrália") + createGame("poland", "10:00", "saudi-arabia", "a", "a", "Polônia", "Arábia Saudita") + createGame("france", "13:00", "denmark", "a", "a", "França", "Dinamarca") + createGame("argentina", "16:00", "mexico", "a", "o", "Argentina", "México")) +

  createCard("27/11", "domingo", createGame("japan", "07:00", "costa-rica", "o", "a", "Japão", "Costa Rica") + createGame("belgium", "10:00", "morocco", "a", "e", "Bélgica", "Marrocos") + createGame("croatia", "13:00", "canada", "a", "o", "Croácia", "Canadá") + createGame("spain", "16:00", "germany", "a", "a", "Espanha", "Alemanha")) +

  createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia", "os", "a", "Camarões", "Sérvia") + createGame("south-korea", "10:00", "ghana", "a", "o", "Coreia do Sul", "Gana") + createGame("brazil", "13:00", "switzerland", "o", "a", "Brasil", "Suíça") + createGame("portugal", "16:00", "uruguay", "e", "o", "Portugal", "Uruguai")) +

  createCard("29/11", "terça", createGame("ecuador", "12:00", "senegal", "o", "o", "Equador", "Senegal") + createGame("netherlands", "12:00", "qatar", "a", "o", "Holanda", "Catar") + createGame("iran", "16:00", "united-states", "o", "os", "Irã", "Estados Unidos") + createGame("wales", "16:00", "england", "o", "a", "País de Gales", "Inglaterra")) +

  createCard("30/11", "quarta", createGame("tunisia", "12:00", "france", "a", "a", "Tunísia", "França") + createGame("australia", "12:00", "denmark", "a", "a", "Austrália", "Dinamarca") + createGame("poland", "16:00", "argentina", "a", "a", "Polônia", "Argentina") + createGame("saudi-arabia", "16:00", "mexico", "a", "o", "Arábia Saudita", "México")) +

  createCard("01/12", "quinta", createGame("croatia", "12:00", "belgium", "a", "a", "Croácia", "Bélgica") + createGame("canada", "12:00", "morocco", "o", "e", "Canadá", "Marrocos") + createGame("japan", "16:00", "spain", "o", "a", "Japão", "Espanha") + createGame("costa-rica", "16:00", "germany", "a", "a", "Costa Rica", "Alemanha")) +

  createCard("02/12", "sexta", createGame("south-korea", "12:00", "portugal", "a", "e", "Coreia do Sul", "Portugal") + createGame("ghana", "12:00", "uruguay", "o", "o", "Gana", "Uruguai") + createGame("serbia", "16:00", "switzerland", "a", "a", "Sérvia", "Suíça") + createGame("cameroon", "16:00", "brazil", "os", "o", "Camarões", "Brasil"))