const footballTeam = {
    team: "Man City",
    year: 2026,
    headCoach: "Enzo Maresca",
    players: [
        { name: "Erling Haaland", position: "forward", isCaptain: false},
        { name: "Jérémy Doku", position: "forward", isCaptain: false },
        { name: "Iliman Ndiaye", position: "forward", isCaptain: false },
        { name: "Allan Elias", position: "forward", isCaptain: false},
        { name: "Antoine Semenyo", position: "forward", isCaptain: false },
        { name: "Phil Foden", position: "midfielder", isCaptain: false },
        { name: "Mateo Kovačić", position: "midfielder", isCaptain: false },
        { name: "Rayan Cherki", position: "midfielder", isCaptain: false },
        { name: "Elliot Anderson", position: "midfielder", isCaptain: false },
        { name: "Enzo Fernández", position: "midfielder", isCaptain: false },
        { name: "Ayyoub Bouaddi", position: "midfielder", isCaptain: false },
        { name: "Nico O'Reilly", position: "midfielder", isCaptain: false },
        { name: "Floyd Samba", position: "midfielder", isCaptain: false },
        { name: "Rúben Dias", position: "defender", isCaptain: true },
        { name: "Marc Guéhi", position: "defender", isCaptain: false },
        { name: "Joško Gvardiol", position: "defender", isCaptain: false },
        { name: "Rayan Aït-Nouri", position: "defender", isCaptain: false },
        { name: "Abdukodir Khusanov", position: "defender", isCaptain: false },
        { name: "Vitor Reis", position: "defender", isCaptain: false },
        { name: "Rico Lewis", position: "defender", isCaptain: false },
        { name: "Matheus Nunes", position: "defender", isCaptain: false },
        { name: "Gianluigi Donnaruma", position: "goalkeeper", isCaptain: false },
        { name: "Marcus Bettinelli", position: "goalkeeper", isCaptain: false },
        { name: "Gerónimo Rulli", position: "goalkeeper", isCaptain: false }
    ],
}

const teamName = document.getElementById("team");
const teamYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");


teamName.textContent = footballTeam.team;
teamYear.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

const select = document.getElementById("players");
const playerCards = document.getElementById("player-cards");


function renderPlayers(filter) {
    const filtered = filter === "all" ? footballTeam.players : footballTeam.players.filter(p => p.position === filter);

    const html = filtered.map(player => `
        <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
        </div>
    `).join("");

    playerCards.innerHTML = html || "<p>No players found.</p>"
}

// initial render
renderPlayers("all");

select.addEventListener("change", (e) => {
    renderPlayers(e.target.value);
});
