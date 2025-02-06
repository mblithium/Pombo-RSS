<script>
  import feather from 'feather-icons'
  import tojson from './lib/parse-rss';
  const ficons = feather.icons;

  let posts = $state({});

  async function fetchRSS() {
    let url = 'https://matheusbastos.aztecweb.net.br/feed/';
    
    fetch(url).then(res => { console.log(JSON.stringify(res)) });

  }

  fetchRSS();
</script>

<header><h1>Pombo RSS</h1></header>

<div id="notification-area">
  <h2>Você tem 12 notificações!</h2>
</div>

<main>
  <div id="home-lista-rss" class="lista-rss">
      <div class="lista-site-icon lista-item">
        {@html ficons.feather.toSvg()}
      </div>
      <div class="lista-rss-title lista-item">
        <p>Um título de teste qualquer</p>
      </div>
      <div class="lista-rss-data lista-item">
        <p>05/02/2025</p>
      </div>
  </div>
</main>

<div id="bottom-nav-bar">
  <div> {@html ficons.bookmark.toSvg()} </div>
  <div> {@html ficons.mail.toSvg()} </div>
  <div> {@html ficons.settings.toSvg()} </div>
</div>

<style>
  header {
    background-color: var(--babypowder);
    color: var(--eerie-black);
    padding: 1em;
  }

  main {
    padding: 1em;
  }

  #bottom-nav-bar {
    display: flex;
    justify-content: space-around;
    background-color: var(--babypowder);
    color: var(--eerie-black);
    padding: 1em;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid var(--eerie-black);
  }

  #bottom-nav-bar div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #bottom-nav-bar div svg {
    width: 24px;
    height: 24px;
  }

  #notification-area {
    padding: 1em;
  }

  #notification-area h1 {
    font-size: 1.5rem;
  }
 

  #home-lista-rss {
    display: flex;
    width: 100%;
    flex-direction: row;
  }

  .lista-item {
    display: flex;
    width: 100%;
  }

  .lista-site-icon {
    width: 55px;
    padding: 0 10px;
  }

  .lista-rss-title {
    width: 100%;
    padding: 0 10px;
  }

  .lista-rss-data {
    width: 100px;
  }

</style>