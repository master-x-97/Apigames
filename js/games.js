// يكون مسؤال علي السيكشن الاساسي كله وهو صفحه الهوم ويكون هو الظاهر في البدايه
// عندما ادخل علي الديتيلز يختفي سيكشن الجيمز ويظهر سيكشن الخاص بالديتيلز الخاصه باللعبه المختاره
//  يكون بستعمال او او بي 
//  نضيف كلاس ديسبلاي نان ونحفذ ديسبلاي نان


// class games
// {
//   img ;
//   title ;
//   price ;
//   dec ;
//   workon;
//   about ;

// }


let bigPage = document.getElementsByClassName('bigpage')[0]
let smallPage = document.getElementById('masterx') 
let loading = document.getElementById('loading') 




// console.log(games);


async function getGames(links)
{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '14caee9fb7msh1aae8fc94048d06p1a2d38jsnaf9323c2855f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
// =========================================================

  let apiGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${links}`, options)
  let finalResult = await apiGames.json();
  console.log(finalResult);
  disPlayGames(finalResult);
  console.log(disPlayGames);
}
getGames ('mmorpg')



async function getAll()
{
  await getGames ('mmorpg')
  await getGames ('shooter')
  await getGames ('sailing')
  await getGames ('permadeath')
  await getGames ('superhero')
  await getGames ('pixel')
  done();
}
















function disPlayGames(x)
{
  let gamesBox = ``;
  for (i=0;i<x.length;i++)
  {
    gamesBox+= `<div data-id=${x[i].id} class="col-md-3  box" onclick="displayCard(this)">
    <div class="card  bg-dark ">
      <img src="${x[i].thumbnail}" class="card-img-top" alt="...">
      <div class="card-body text-white ">
        <h5 class="card-title">${x[i].title}</h5>
        <p class="card-text text-center " >${x[i].short_description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between ">
        <small class="text-white fw-bold">${x[i].genre}</small>
        <small class="text-white fw-bold">${x[i].platform}</small>
      </div>
    </div>
  </div>`
  }
  console.log(gamesBox);
  document.getElementById('rowData').innerHTML = gamesBox 

}





async function displayCard(e)
{
  showLoading()

  const gameCard  = e.closest(['[data-id]']);
  const id  =  gameCard.dataset.id;

   const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '14caee9fb7msh1aae8fc94048d06p1a2d38jsnaf9323c2855f',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  let gamexpage = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
  resultx = await gamexpage.json();
  displaySelfGames(resultx)
  hideLoading()

}

function showLoading() {
  loading.classList.replace("d-none","d-block")
  smallPage.classList.replace("d-block" , "d-none")
  bigPage.classList.replace("d-block" , "d-none")
}



function hideLoading() {
  loading.classList.replace("d-none","d-block")
  bigPage.classList.replace("d-block" , "d-none")
  smallPage.classList.replace("d-none" , "d-block")
}





function displaySelfGames(z)
{

    let gamepage = ` 
    <div  class="row aboutGame bg-dark text-white vh-100 " >
     <div class=" d-flex justify-content-between master">
     <div>Details Game</div>
     <button class="bg-dark text-white  " onclick="closeCard(this)">X</button>
     
     </div>
      <div class="col-md-4">
        <img class="w-100" src="${z.thumbnail}" alt="">
      </div>
      <div class="col-md-8">
        <h1>${z.title}</h1>
        <p>${z.thumbnail}</p>
        <p>${z.platform}</p>
        <p>${z.status}</p>
        <p>${z.description}</p>
        <a href="${z.freetogame_profile_url}" class="btn btn-info" target="_blank">show game </a> 
      </div>
    </div>`
document.getElementById('masterx').innerHTML = gamepage
  }

function closeCard(element){

  bigPage.classList.replace("d-none" , "d-block")
  smallPage.classList.replace("d-block" , "d-none")

}




