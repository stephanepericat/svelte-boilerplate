<script>
  import "./styles/App.scss";

  import { Router, Route, Link } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
  <div class="app">
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
  </div>
</Router>
