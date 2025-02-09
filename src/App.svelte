<script>
  import feather from 'feather-icons'
  import xmlParser from 'xml-js';
  import RSSObj from './lib/mock-rss';
  import localeDate from './lib/localedate';
  import Header from './components/headernav.svelte';
  import Spinner from './components/spinner-loading.svelte';
    import SpinnerLoading from './components/spinner-loading.svelte';

  const ficons = feather.icons;

  let posts = $state();
  try {
    $inspect(posts.rss.channel.item)
  } catch (e) {
    console.log("Not ready...")
  }
  

  let url = `https://blogs.kde.org/index.xml`;

  let mock = new Promise((resolve, reject) => {
    setTimeout(() => { 
      posts = RSSObj;
      resolve(RSSObj) 
    }, 3000)
  })

  /*
  let rss = fetch(`https://proxy.corsfix.com/?${url}`, { mode: 'cors', method: 'GET', headers: { 'Content-Type': 'application/rss+xml' } })
      .then(response => response.text())
      .then((text) => {  
        let toXML = xmlParser.xml2js(text, { compact: true } );
        posts = toXML;
        console.log(toXML);
        return toXML
      })
      .catch(err => console.log(err) );
  */
 

</script>

<Header />

<div id="notification-area">
  <h2>Você tem 12 notificações!</h2>
</div>

<main>


  {#await mock}
    <br><SpinnerLoading />
  {:then respostas}
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
          <p>{localeDate(postitem.pubDate._text) || 'Sem data'}</p>
        </div>
    </div>
      {/each}
    {/if}
  {:catch error}
  <p>Ops algo deu errado: {error.message}</p>
  {/await}

</main>

<div id="bottom-nav-bar">
  <div> {@html ficons.bookmark.toSvg()} </div>
  <div> {@html ficons.mail.toSvg()} </div>
  <div> {@html ficons.settings.toSvg()} </div>
</div>

<style>
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
    padding: 10px;
    border-bottom: 1px solid #0000002e;
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