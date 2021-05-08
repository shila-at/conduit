let content = document.getElementById('content');
let navBar = document.getElementById('navbar-nav');
let navBarContent;


window.onload = (event) => {

  let hash = location.hash.substr(1).replace('/','');

  if (hash){
    redirect(hash)
  }else {
    redirect('home');
  }


};

const getAllRoute = ()=>{
  Array.from(document.getElementsByClassName("route")).forEach((item) => {
    item.addEventListener('click', (e) => {

      e.preventDefault();
      let href = item.getAttribute('href');
      chooseRoute(href);


    });

  });
}


const hasUser = ()=>{
  let userLogIn;
  if (localStorage.getItem('userLogIn')){
    userLogIn = localStorage.getItem('userLogIn');
  }else {
    userLogIn = false;
  }

  return !!userLogIn;

}


const setNavbar = ()=>{

  navBar.innerHTML = '';
  if (hasUser()) {

    let userLogIn = localStorage.getItem('userLogIn');

    navBarContent = ` <li class="nav-item">
          <a class="nav-link route active" href="home">Home</a>
        </li>
<li class="nav-item">
          <a class="nav-link route" href="new-article">
          <i class="fa fa-edit"></i>
          New Article
</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="setting">
          <i class="fa fa-cog"></i>
          Settings
</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="profile">${JSON.parse(userLogIn).name}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="home" onclick="logOut(event)">LogOut</a>
        </li>
`
  } else {
    navBarContent = ` <li class="nav-item">
          <a class="nav-link route active" href="home">Home</a>
        </li>
<li class="nav-item">
          <a class="nav-link route" href="sign-in">sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link route" href="sign-up">sign up</a>
        </li>
      `;
  }

  navBar.innerHTML += navBarContent;
}

setNavbar();

/*window.addEventListener('hashchange', function(){

});*/

const chooseRoute = (href) => {

  parent.location.hash = '/'+href;

  switch (href) {
    case 'home':
      renderHomePage();
      break;
    case 'sign-in':
      renderLoginPage();
      break;
    case 'sign-up':
      renderRegisterPage();
      break;
    case 'new-article':
      renderNewArticlePage();
      break;
    case 'setting':
      renderSettingPage();
      break;
    case 'profile':
      renderProfilePage();
      break;
    default:

  }
}

const redirect = (route) =>{
  chooseRoute(route);
  setNavbar();
  getAllRoute();
}

const renderHomePage = () => {

  let articles = JSON.parse(localStorage.getItem('articles'));

  let homePage = `<div class="container-fluid">
    <div class="row">
      <div class="col-md-12 header-title">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">

      <div class="col-md-9">
        <div class="list-items">
          <div class="title">
            <p>Global Feed</p>
          </div>
          <ul id="articles">

          </ul>
        </div>

        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">&laquo;</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
              <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">&raquo;</a>
            </li>
          </ul>
        </nav>

      </div>
      <div class="col-md-3">
        <div class="tags">
          <p>Popular Tags</p>
          <ul>
            <li>
              <a href="#">HuManlty</a>
            </li>
            <li>
              <a href="#">Gandhi</a>
            </li>
            <li>
              <a href="#">HITLER</a>
            </li>
            <li>
              <a href="#">SIDA</a>
            </li>
            <li>
              <a href="#">test</a>
            </li>
            <li>
              <a href="#">dragons</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`

  content.innerHTML = '';
  content.innerHTML += homePage;

  let ul_tag = document.getElementById('articles');
  ul_tag.innerHTML = '';
  if (articles){
    Array.from(articles).forEach(item=>{
      let article_li = `<li>
              <div class="title-article">
                 <div class="info">
                   <a href="#">
                     <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                   </a>
                   <div class="d-inline-block">
                     <a href="#">
                       <p>${item.user_name}</p>
                     </a>
                     <span>${item.date}</span>
                   </div>
                 </div>
                 <div class="btn like" id="article${item.id}" onclick="addLike(${item.id})">
                   <span>${item.like}</span>
                   <i class="fa fa-heart"></i>
                 </div>
              </div>
              <div class="detail">
                <a href="#">
                  <h4>${item.title}</h4>
                </a>
                <p>${item.description}</p>
                <a href="#">
                  <span>Read more ...</span>
                </a>
              </div>
            </li>`;
      ul_tag.innerHTML += article_li;
    })
  }else {
    ul_tag.innerHTML = `<li><p class="text-primary">مقاله ای یافت نشد</p></li>`;
  }

}

const renderRegisterPage = () => {

  let registerPage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 form-custom">

      <h1 class="title">Sign up</h1>
      <a href="javascript:void(0)" class="back-to-login" onclick="chooseRoute('sign-in',this)">
        <p>Have an account?</p>
      </a>
      <form action="" method="post" id="register-form">
        <div class="item">
          <input type="text" class="form-control" placeholder="UserName" name="reg_username" required>
        </div>
        <div class="item">
          <input type="email" class="form-control" placeholder="Email" name="reg_email" required>
        </div>
        <div class="item">
          <input type="password" class="form-control" placeholder="Password" name="reg_password" required>
        </div>
        <div class="item">
          <button class="btn btn-success-custom" type="submit">Sign up</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += registerPage;



  let myForm = document.getElementById('register-form');
  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const { reg_username, reg_email, reg_password } = this.elements;

    let user_id;
    if (JSON.parse(localStorage.getItem('users')) !== null){
       user_id = JSON.parse(localStorage.getItem('users')).length + 1;
    }else {
      user_id = 1;
    }

    let new_user = {
        id :user_id,
        name : reg_username.value,
        email : reg_email.value,
        password : reg_password.value,
        image : ''
    };

    userRegister(new_user);

  })

}

const renderLoginPage = () => {

  let loginPage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 form-custom">

      <h1 class="title">Sign in</h1>
      <a href="javascript:void(0)" class="back-to-login" onclick="chooseRoute('sign-up')">
        <p>Need an account?</p>
      </a>
      <form action="#" method="post" id="login-form">
        <div class="item">
          <input type="email" name="log_email" class="form-control" placeholder="Email">
        </div>
        <div class="item">
          <input type="password" name="log_password" class="form-control" placeholder="Password">
        </div>
        <div class="item">
          <button type="submit" class="btn btn-success">Sign in</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += loginPage;


  let loginForm = document.getElementById('login-form');
  loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const {log_email, log_password} = this.elements;
    let users = JSON.parse(localStorage.getItem('users'));
    let has_user = false;
    if (users !== null){

      Array.from(users).forEach(user =>{
        if (user.email === log_email.value && user.password === log_password.value){
          has_user = true;
          userLogin(user);
        }
      });

    }

    if (has_user === false){
      alert('کاربری با این مشخصات وجود ندارد.')
    }


  });
}

const renderProfilePage = () => {
  let profilePage = `<div class="profile-header">
    <img src="public/image/smiley-cyrus.jpg" alt="imageProfile">
    <p class="username">username</p>
    <button class="btn">
      <i class="fa fa-cog"></i>
      Edit Profile Settings
    </button>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="article-tabs">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-my-articles-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-my-articles" type="button">My Articles
            </button>
            <button class="nav-link" id="nav-favorites-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-favorites" type="button">Favorite Articles
            </button>
          </div>
        </nav>
        <div class="tab-content list-items no-padding" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-my-articles">
            <ul>
              <li>
                <div class="title-article">
                  <div class="info">
                    <a href="#">
                      <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                    </a>
                    <div class="d-inline-block">
                      <a href="#">
                        <p>username</p>
                      </a>
                      <span>May 5, 2021</span>
                    </div>
                  </div>
                  <div class="like">
                    <span>1</span>
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="detail">
                  <a href="#">
                    <h4>Article Title</h4>
                  </a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <a href="#">
                    <span>Read more ...</span>
                  </a>
                </div>
              </li>
              <li>
                <div class="title-article">
                  <div class="info">
                    <a href="#">
                      <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                    </a>
                    <div class="d-inline-block">
                      <a href="#">
                        <p>username</p>
                      </a>
                      <span>May 5, 2021</span>
                    </div>
                  </div>
                  <div class="like">
                    <span>1</span>
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="detail">
                  <a href="#">
                    <h4>Article Title</h4>
                  </a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <a href="#">
                    <span>Read more ...</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane list-items fade no-padding" id="nav-favorites">
            <ul>
              <li>
                <div class="title-article">
                  <div class="info">
                    <a href="#">
                      <img class="d-inline" src="./public/image/smiley-cyrus.jpg" alt="user-icon">
                    </a>
                    <div class="d-inline-block">
                      <a href="#">
                        <p>username</p>
                      </a>
                      <span>May 5, 2021</span>
                    </div>
                  </div>
                  <div class="like">
                    <span>1</span>
                    <i class="fa fa-heart"></i>
                  </div>
                </div>
                <div class="detail">
                  <a href="#">
                    <h4>Article Title</h4>
                  </a>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                  <a href="#">
                    <span>Read more ...</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  content.innerHTML = '';
  content.innerHTML += profilePage;

}

const renderSettingPage = () => {

  let settingPage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 form-custom">

      <h1 class="title">Your Settings</h1>
     
      <form action="#" id="setting-form">
        <div class="item">
          <input type="file" class="form-control" placeholder="URL of profile picture">
        </div>
        <div class="item">
          <input type="text" class="form-control" placeholder="UserName">
        </div>
        <div class="item">
          <textarea class="form-control" placeholder="Short bio about you"></textarea>
        </div>
        <div class="item">
          <input type="email" class="form-control" placeholder="Email">
        </div>
        <div class="item">
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="item">
          <button class="btn btn-success">Update Settings</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += settingPage;

}

const renderNewArticlePage = () => {

  let newArticlePage = `<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10 col-lg-8 form-custom">

      <form action="#" method="post" id="new-article-form">
        <div class="item">
          <input type="text" name="title" class="form-control" placeholder="Article Title" required>
        </div>
        <div class="item">
          <input type="text" name="subject" class="form-control" placeholder="What's this article about?" required>
        </div>
        <div class="item">
          <textarea class="form-control" name="description" placeholder="Write your article (in markdown)" required></textarea>
        </div>
        <div class="item">
          <input type="text" name="tags" class="form-control" placeholder="Enter tags">
        </div>
        <div class="item">
          <button type="submit" class="btn btn-success">Publish Article</button>
        </div>
      </form>

    </div>
  </div>
</div>`;

  content.innerHTML = '';
  content.innerHTML += newArticlePage;


  let articleForm = document.getElementById('new-article-form');
  articleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const { title, subject, description, tags } = this.elements;

    let article_id;
    if (JSON.parse(localStorage.getItem('articles')) !== null){
      article_id = JSON.parse(localStorage.getItem('articles')).length + 1;
    }else {
      article_id = 1;
    }

    let user_id = JSON.parse(localStorage.getItem('userLogIn')).id;
    let user_name = JSON.parse(localStorage.getItem('userLogIn')).name;

     let today = new Date();
    let new_article = {
      id : article_id,
      user_id : user_id,
      user_name : user_name,
      title : title.value,
      subject : subject.value,
      description : description.value,
      tags : tags.value,
      like : 0,
      date : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
    };

    saveArticle(new_article);

  })

}

const saveArticle = (article) =>{

  let articles;
  let all_article = JSON.parse(localStorage.getItem('articles'));

  if (all_article !== null){

      articles = all_article;
      articles.push(article);

  }else {
    articles = [article];
  }

  localStorage.setItem('articles', JSON.stringify(articles));
  redirect('home');
  console.log(localStorage.getItem('articles'))

}

const userRegister = (user) =>{

  let users;
  let is_new = true;
  let all_user = JSON.parse(localStorage.getItem('users'));

  if (all_user !== null){

    Array.from(all_user).forEach(item =>{
      if (user.email === item.email){
        alert('ایمیل نا معتبر...کاربری با این ایمیل قبلا ثبت نام کرده است.');
        is_new = false
        return;
      }
    });

    if (is_new === true){
      users = all_user;
      users.push(user);
    }else {
      return
    }

  }else {
    users = [user];
  }

  localStorage.setItem('users', JSON.stringify(users));
  userLogin(user);
  redirect('profile');
  console.log(localStorage.getItem('users'))

}

const userLogin = (user) =>{

  let userLogIn = {
    id : user.id,
    name : user.name,
    email :user.email
  };

  if (localStorage.getItem('userLogIn') !== null){
    localStorage.removeItem('userLogIn')
  }

  localStorage.setItem('userLogIn',JSON.stringify(userLogIn));

  redirect('home');

  console.log(localStorage.getItem('userLogIn'));

}

const logOut = (e)=>{
  e.preventDefault();

  if (localStorage.getItem('userLogIn')){
    localStorage.removeItem('userLogIn');
  }
  redirect('home');
}

const addLike = (article_id) =>{
  if (! hasUser()){
    redirect('sign-in');
  }else {
    let articles = JSON.parse(localStorage.getItem('articles'));

    if (articles){

      let article=articles.find(v => v.id === article_id);
      article.like += 1;

      let new_articles =articles.filter(v => v.id !== article_id);
      new_articles.push(article);

      localStorage.removeItem('articles');
      localStorage.setItem('articles',JSON.stringify(new_articles));

      let like_btn = 'article'+article_id;
      document.getElementById(like_btn).querySelector('span').innerHTML = article.like;

    }
  }

}



/*console.log(localStorage.getItem('users'));
console.log(localStorage.getItem('userLogIn'));*/



