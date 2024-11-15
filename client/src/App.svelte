<script>
  import router from 'page';

  import bidPage from "./pages/AuctionPage.svelte";
  import registerPage from "./pages/RegisterPage.svelte";
  import loginPage from "./pages/LogInPage.svelte";
  import detailsPage from "./pages/AuctionDetail.svelte";
  import notFoundPage from "./pages/NotFoundPage.svelte";
  import ForHatersPage from "./pages/ForHatersPage.svelte";
  import ProfilePage from "./pages/ProfilePage.svelte";
  import ProductCreationPage from "./pages/AuctionCreationPage.svelte";


  let page;
  let params;
  let currentRoute;

  router('/', (ctx) => {
    page = bidPage;
    currentRoute = ctx.pathname;
  });
  router('/register', (ctx) => {
    page = registerPage;
    currentRoute = ctx.pathname;
    params = ctx;
  });
  router('/login', (ctx) => {
    page = loginPage
    currentRoute = ctx.pathname;
    params = ctx;
  })
  router('/details', (ctx) => {
    page = detailsPage;
    currentRoute = ctx.pathname;
    params = ctx;
  });
  router('/hater', (ctx) => {
    page = ForHatersPage;
    currentRoute = ctx.pathname;
    params = ctx;
  });
  router('/user', (ctx) => {
    page = ProfilePage;
    currentRoute = ctx.pathname;
    params = ctx;
  });
  router('/admin/create', (ctx) => {
    page = ProductCreationPage;
    currentRoute = ctx.pathname;
    params = ctx;
  });
  router('*', (ctx) => {
    page = notFoundPage;
    currentRoute = ctx.pathname;
  });

  router.start();
</script>

<main>
  <svelte:component this={page} {params} />
</main>