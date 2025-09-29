async function loadAnime() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const grid = document.getElementById('animeGrid');
    grid.innerHTML = "";

    data.data.forEach((anime) => {
      const genres = anime.genres ? anime.genres.map(g => g.name).join(", ") : "";
      const card = document.createElement('div');
      card.className = 'anime-card';

      card.innerHTML = `
        <div class="anime-poster" style="background-image: url('${anime.images.jpg.image_url}');"></div>
        <div class="anime-info">
          <div class="anime-title">${anime.title}</div>
          <div class="anime-rating"><i class="fas fa-star"></i> ${anime.score || "N/A"}</div>
          <div class="anime-genres">${genres}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        const title = card.querySelector('.anime-title').textContent;
        alert(`Åbner ${title}...`);
      });

      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Fejl ved hentning af anime:", error);
  }
}

document.querySelectorAll('.nav-tab').forEach((tab) => {
  tab.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'))
    this.classList.add('active')
  })
})


document.querySelectorAll('.sidebar-item').forEach((item) => {
  item.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelectorAll('.sidebar-item').forEach((i) => i.classList.remove('active'))
    this.classList.add('active')
  })
})



document.querySelector('.play-button').addEventListener('click', () => {
  alert('Playing One Punch Man!')
})




loadAnime();
