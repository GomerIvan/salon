$('.sign__number').mask('+7 (999) 999-99-99')
$('.callback__number').mask('+7 (999) 999-99-99')

const navLinks = document.querySelectorAll('a[href*="#"]')
const signModal = document.querySelector('.sign__button')
const signCoverModal = document.querySelector('.cover__button--sign')
const priceModalCat = document.querySelector('#price__open--cat')
const priceModalDog = document.querySelector('#price__open--dog')
const priceModalHorse = document.querySelector('#price__open--horse')
const petModal = document.querySelector('.price__item--button')
const backgroundModal = document.querySelector('.container')


for (let anchor of navLinks) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const openSignWindow = ( event ) => {
  let newWindow = '';
  switch(true) {
    case event.target.className === 'sign__button' || event.target.className === 'cover__button--sign':
      console.log(event)
      backgroundModal.style.cssText += `
        z-index: 3;
        display: block;
      `;
      newWindow += `
        <biv class="sign__window">
          <div class="sign__window--block">
            <div class="sign__window--close">
              <div class="sign__close--first sign__close"></div>
              <div class="sign__close--second sign__close"></div>
            </div>
            <div class="sign__window--content">
              <div class="sign__window--title">
                <h1 class="sign__window--title--first">Запишитесь на процедуры</h1>
                <h2 class="sign__window--title--second">Заполните форму и запишитесь</h2>
              </div>
              <form action="" class="sign__window--form">
                <div class="sign__window--form--line">
                  <input type="text" class="sign__window--name" placeholder="Ваше Имя">
                  <input type="tel" class="sign__window--number" placeholder="+7 (000) 000-00-00">
                  <input type="email" class="sign__window--email" placeholder="E-mail">
                </div>
                <p class="sign__window--radio">Выберите питомца</p>
                <div class="sign__window--form--radio">
                  <div class="radio__window--list">
                    <input type="radio" class="radio__window--cat">
                    <p class="radio__window--cat--description radio__window--description">Для кошака</p>
                  </div>
                  <div class="radio__window--list">
                    <input type="radio" class="radio__window--dog">
                    <p class="radio__window--dog--description radio__window--description">Для dog</p>
                  </div>
                  <div class="radio__window--list">
                    <input type="radio" class="radio__window--horse">
                    <p class="radio__window--horse--description radio__window--description">Для коня</p>
                  </div>
                </div>
                <button class="sign__send sign__window--send"></button>
                <p class="send__window--text">Оставляя заявку, вы соглашаетесь на обработку персональных данных</p>
              </form>
            </div>
          </div>
        </biv>
      `;
      backgroundModal.innerHTML = newWindow
      $('.sign__window--number').mask('+7 (999) 999-99-99')
  }
}

// const openCatWindow = ( event ) => {
//   let newWindow = ``;
//   switch(true) {
//     case event.target.id === 'price__open--cat':
//       newWindow += `
//         <div class="pet">
//           <div class="pet__background">
//             <div class="pet__block">
//               <div class="pet__content">
//                 <div class="pet__title"></div>
//                 <div class="pet__main">
//                   <div class="pet__main--filter">
//                     <ul class="filter__list">
//                       <li class="filter__item">
//                         <ul class="filter__service">
//                         </ul>
//                       </li>
//                       <li class="filter__item">
//                         <ul class="filter__breed filter__">
//                         </ul>
//                       </li>
//                       <li class="filter__item">
//                         <button class="filter__search">Искать</button>
//                       </li>
//                     </ul>
//                   </div>
//                   <div class="pet__main--service">
//                     <ul class="service__list">
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//   }
// }

// const openDogWindow = ( event ) => {
//   switch(true) {
//     case event.target.id === 'price__open--dog':
//     console.log(event)
//   }
// }

// const openHorseWindow = ( event ) => {
//   switch(true) {
//     case event.target.id === 'price__open--horse':
//     console.log(event)
//   }
// }

class Pet {
  title;
  description;
  service = [];
  className;
  breed = [];
  searchPet = {};
  itemService = () => {
    let newElement = ``;
    return this.service.forEach( element => {
      newElement += `
      <li class="filter__service--item">${element}</li>
      `;
    })
  }
  
  dropPetWindow = (titleFirst, titleSecond, serviceList, breedList) => {
    let newItem = ``
    let petWindow = `
    <div class="pet">
      <div class="pet__background">
        <div class="pet__block">
          <div class="pet__content">
            <div class="pet__title">
              <h2 class="pet__title--first">${titleFirst}</h2>
              <p class="pet__title--second">${titleSecond}</p>
            </div>
            <div class="pet__main">
              <div class="pet__main--filter">
                <ul class="filter__list">
                  <li class="filter__item">
                    <ul class="filter__service">
                    ${}
                    </ul>
                  </li>
                  <li class="filter__item">
                    <ul class="filter__breed filter__">
                    </ul>
                  </li>
                  <li class="filter__item">
                    <button class="filter__search">Искать</button>
                  </li>
                </ul>
              </div>
              <div class="pet__main--service">
                <ul class="service__list">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    backgroundModal.innerHTML = petWindow; 
  }

}

// newWindow += `
  // <div class="pet">
  //   <div class="pet__background">
  //     <div class="pet__block">
  //       <div class="pet__content">
  //         <div class="pet__title"></div>
  //         <div class="pet__main">
  //           <div class="pet__main--filter">
  //             <ul class="filter__list">
  //               <li class="filter__item">
  //                 <ul class="filter__service">
  //                 </ul>
  //               </li>
  //               <li class="filter__item">
  //                 <ul class="filter__breed filter__">
  //                 </ul>
  //               </li>
  //               <li class="filter__item">
  //                 <button class="filter__search">Искать</button>
  //               </li>
  //             </ul>
  //           </div>
  //           <div class="pet__main--service">
  //             <ul class="service__list">
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
// `;

const openPetWindow = ( event ) => {
  // newWindow = ``;
  switch(true) {

    case event.target.id === 'price__open--cat':
      console.log(event)
      backgroundModal.style.cssText += `
        display: block;
        z-index: 4;
      `;
      const catPet = new Pet();
      catPet.title = 'Кошкам и котам';
      catPet.description = 'Для ваших любимых пушистиков';
      catPet.service = ['Линька', 'Стрижка когтей', 'Стрижка шерсти', 'Мытье', 'Экспресс']
      catPet.breed = ['Мейн-кун', 'Сиамская', 'Британская короткошорстая', 'Сфинкс', 'Шотландская вислоухая']
      console.log(catPet)
      catPet.dropPetWindow(catPet.title, catPet.description, catPet.service, catPet.breed)
      // backgroundModal.innerHTML = catPet.petWindow
      break

    case event.target.id === 'price__open--dog':
      console.log(event)
      break

    case event.target.id === 'price__open--horse':
      console.log(event)
      break

  }
}

const closeSignWindow = ( event ) => {
  console.log(event)
  let noneSign = ``;
  switch(true) {
    case event.target.className === 'sign__window' || event.target.className === 'sign__window--close' || event.target.classList[1] === 'sign__close':
      backgroundModal.innerHTML = noneSign;
      backgroundModal.style.cssText += `
        display: none;
      `;
      break
  }
}

const listenerSign = signModal.addEventListener( 'click', openSignWindow )
const listenerCoverBtn = signCoverModal.addEventListener( 'click', openSignWindow )
// const listenerCat = priceModalCat.addEventListener( 'click', openCatWindow )
// const listenerDog = priceModalDog.addEventListener( 'click', openDogWindow )
// const listenerHorse = priceModalHorse.addEventListener( 'click', openHorseWindow )

const listenerCat = priceModalCat.addEventListener( 'click', openPetWindow )
const listenerDog = priceModalDog.addEventListener( 'click', openPetWindow )
const listenerHorse = priceModalHorse.addEventListener( 'click', openPetWindow )

const listenerBackgroundSign = backgroundModal.addEventListener( 'click', closeSignWindow )
