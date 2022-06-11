import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title" href="#">Vocab-YOU-lary</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="all-lang">
              All Languages <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="html-tag">HTML</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="css-tag">CSS</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#" id="js-tag">JavaScript</a>
        </li>
        <nav class="navbar bg-dark">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </ul>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
