<script>
  import feather from 'feather-icons'
  import xmlParser from 'xml-js';
  const ficons = feather.icons;

  let posts = $state();
  $inspect(posts.rss.channel.item)

  let url = `https://blogs.kde.org/index.xml`;
  
  let rss = fetch(`https://proxy.corsfix.com/?${url}`, { mode: 'cors', method: 'GET', headers: { 'Content-Type': 'application/xml' } })
      .then(response => response.text())
      .then((text) => {  
        let toXML = xmlParser.xml2js(text, { compact: true } )
        posts = toXML
        return toXML
      })
      .catch(err => console.log(err) )

 

</script>

<header><h1>Pombo RSS</h1></header>

<div id="notification-area">
  <h2>Você tem 12 notificações!</h2>
</div>

<main>


  {#await rss}
    <p>Carregando...</p>
  {:then respostas}
    <p>Dados carregados</p>
    {#if posts.rss.channel.item}
      {#each posts.rss.channel.item as postitem}
        <div id="home-lista-rss" class="lista-rss">
        <div class="lista-site-icon lista-item">
          {@html ficons.feather.toSvg()}
        </div>
        <div class="lista-rss-title lista-item">
          <p><a href={postitem.link._text || '#'}>{postitem.title._text || 'Sem título'}</a></p>
        </div>
        <div class="lista-rss-data lista-item">
          <p>{postitem.pubDate._text || 'Sem data'}</p>
        </div>
    </div>
      {/each}
    {/if}
  {:catch error}
  <p>Ops algo deu errado: {error.message}</p>
  {/await}

  {#if posts}
    <div id="home-lista-rss" class="lista-rss">
        <div class="lista-site-icon lista-item">
          {@html ficons.feather.toSvg()}
        </div>
        <div class="lista-rss-title lista-item">
          <p>texto</p>
        </div>
        <div class="lista-rss-data lista-item">
          <p>05/02/2025</p>
        </div>
    </div>
  {/if} 

  
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