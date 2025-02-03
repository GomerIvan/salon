$('.sign__number').mask('+7 (999) 999-99-99')
$('.callback__number').mask('+7 (999) 999-99-99')

const navLinks = document.querySelectorAll('a[href*="#"]')
const signModal = document.querySelector('.sign__button')
const signCoverModal = document.querySelector('.cover__button--sign')
const priceModalCat = document.querySelector('#price__open--cat')
const priceModalDog = document.querySelector('#price__open--dog')
const priceModalHorse = document.querySelector('#price__open--horse')
const petModal = document.querySelector('.price__item--button')
const arrowMenu = document.querySelector('.header__arrow')
const backgroundModal = document.querySelector('.container')
const headerContent = document.querySelector('.header__container')
const headerMain = document.querySelector('.header');


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
              <form name="sign__in__window" class="sign__window--form" method="POST" netlify>
                <div class="sign__window--form--line">
                  <input type="text" class="sign__window--name" placeholder="Ваше Имя" name="name">
                  <input type="tel" class="sign__window--number" placeholder="+7 (000) 000-00-00" name="number">
                  <input type="email" class="sign__window--email" placeholder="E-mail" name="mail">
                </div>
                <p class="sign__window--radio">Выберите питомца</p>
                <div class="sign__window--form--radio">
                  <div class="radio__window--list">
                    <input type="radio" class="radio__window--cat" name="cat">
                    <p class="radio__window--cat--description radio__window--description">Для кошки/кота</p>
                  </div>
                  <div class="radio__window--list">
                    <input type="radio" class="radio__window--dog" name="dog">
                    <p class="radio__window--dog--description radio__window--description">Для собаки</p>
                  </div>
                </div>
                <button class="sign__send sign__window--send" type="submit"></button>
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
// constructor
function Pet(windowTitle, windowDescription, petImage, petBreed, petService, petTitle) {
  this.titleWindow = windowTitle;
  this.description = windowDescription;
  this.image = petImage;
  this.breed = petBreed;
  this.service = petService;
  this.title = petTitle;
  
  let newWindow = '';
  this.createModal = () => {
// без циклов
    newWindow += `
      <div class="pet__block">
        <div class="pet__content">
          <div class="sign__window--close">
            <div class="sign__close--first sign__close"></div>
            <div class="sign__close--second sign__close"></div>
          </div>
          <div class="pet__title">
            <h1 class="pet__title--first">${this.titleWindow}</h1>
            <h2 class="pet__title--second">${this.description}</h2>
          </div>
          <div class="pet__service">
            <ul class="service__list">
              <li class="service__item" style="background: url(${this.image[0]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[0]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[2]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[2]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[3]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[3]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[4]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[4]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[5]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[5]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[1]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[1]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[6]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[6]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[7]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[7]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[8]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[8]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[9]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[9]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[10]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[10]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[11]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[11]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[12]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[12]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[13]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[13]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
              <li class="service__item" style="background: url(${this.image[14]});
              background-size: cover;">
                <h3 class="service__item--title">${this.breed[14]}</h3>
                <ul class="service__item--price">
                  <li class="service__price--item">
                    <p class="price__name">${this.service[0]}</p>
                    <span class="price__sum">-800</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[1]}</p>
                    <span class="price__sum">-650</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[2]}</p>
                    <span class="price__sum">-1590</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[3]}</p>
                    <span class="price__sum">-1450</span>
                  </li>
                  <li class="service__price--item">
                    <p class="price__name">${this.service[4]}</p>
                    <span class="price__sum">-2300</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
    backgroundModal.style.cssText += `
      display: flex;
      z-index: 4;
      align-items: center;
      justify-content: center;
    `;
    backgroundModal.innerHTML = newWindow;
  }
}

const openPetWindow = ( event ) => {
  switch(true) {
    case event.target.id === 'price__open--cat':
      const cat = new Pet()
      cat.titleWindow = 'Для ваших кошек и котов'
      cat.description = 'Ваши котики будут в восторге'
      cat.title = [];
      cat.image = ['https://www.purinaone.ru/sites/default/files/2023-10/vislouhij-britanec-1.jpg', 

      'https://crave-pet.ru/_next/image/?url=https%3A%2F%2Fcrave-pet.ru%2Fimg%2F7b3c1288-9d44-4596-9eea-371b276e7d39%2Fimg11.webp&w=1920&q=100', 

      'https://mykilt.ru/upload/iblock/d8b/shotlandskaya-vislouhaya-koshka-straight.jpg', 
      'https://masterpiecer-images.s3.yandex.net/5f98eb2247f1ec0:upscaled',

      'https://s0.rbk.ru/v6_top_pics/media/img/8/22/756723942164228.jpg',

      'https://s16.stc.all.kpcdn.net/family/wp-content/uploads/2022/08/top-persidskaya-koshka-960h540-960x540.jpg',

      'https://koshkiny.ru/assets/content/images/ekzoticheskaya-korotkosherstnaya-koshka/01-ekzoticheskaya-korotkosherstnaya-koshka-min.jpg',

      'https://pro-kotikov.ru/wp-content/uploads/2018/10/burman-cat-shampan.jpg', 
      
      'https://i.bigenc.ru/resizer/resize?sign=4YNJWVJMoTdcNPoO30GPOQ&filename=vault/a9d45e9c673dc4f7c28e48489e0470a6.webp&width=1200', 
      
      'https://s3.stc.all.kpcdn.net/family/wp-content/uploads/2022/08/top-norvezhskaya-lesnaya-koshka-960h540-960x540.jpg', 
      
      'https://upload.wikimedia.org/wikipedia/commons/7/76/Jasmina.JPG', 
      
      'https://ajo-pet.ru/u/blog/76_big_0.jpg', 
      
      'https://masterpiecer-images.s3.yandex.net/1d68c3ed54c311ee8080363fac71b015:upscaled', 
      
      'https://petstory.ru/resize/800x800x80/upload/images/articles/breeds/korat/korat_3.jpg', 
      
      'https://kinpet.ru/upload/uf/dba/d479tqw619mcgygn9asqwot371k1x68m/220_405_380.jpg'] 
      cat.breed = ['Британская вислоухая', 'Сфинкс', 'Шотландская', 'Мейн-кун', 'Сиамская', 'Персидская', 'Экзотическая', 'Бурма', 'Американская', 'Норвежская', 'Русская голубая', 'Сибирская', 'Гималайская', 'Корат', 'Сингапурская']
      cat.service = ['Мытье', 'Стрижка когтей', 'Стрижка шерсти', 'Гигиена', 'Экспресс']
      cat.createModal();
      break

    case event.target.id === 'price__open--dog':
      console.log(event)
      const dog = new Pet()
      dog.titleWindow = 'Для ваших собачек'
      dog.description = 'Ваши собачки будут довольны'
      dog.title = [];
      dog.image = ['https://avatars.mds.yandex.net/get-sprav-products/9685839/2a0000018a8da65af8d9a9b2615b41376a21/orig', 

      'https://avatars.mds.yandex.net/get-sprav-products/5399152/2a0000018a8db4d8679cf3c0521901f98d09/orig', 

      'https://avatars.mds.yandex.net/get-sprav-products/9495815/2a0000018a8dbbb9f072ca7ba30196785420/orig', 

      'https://avatars.mds.yandex.net/get-sprav-products/5234963/2a0000018a8dbe80b7be103a5e515e1c570b/orig',

      'https://avatars.mds.yandex.net/get-sprav-products/5399152/2a0000018a8dc0c83bc1a546ceb4fe429906/orig',

      'https://avatars.mds.yandex.net/get-sprav-products/5399152/2a0000018a8dc520c4db01b1236c52bf0434/orig',

      'https://avatars.mds.yandex.net/get-sprav-products/5236693/2a0000018a8dcacc6ee010f77198c542e76c/orig',

      'https://avatars.mds.yandex.net/get-sprav-products/5399152/2a0000018a8dccec500edf210c876a99f57e/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/9240521/2a0000018a8dd0e8c46d98d5fda08028843b/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/5236693/2a0000018a8dd19c956bc2480da7486fcf79/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/9685839/2a0000018a8e0275a4a5a8df25737621db5b/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/9495815/2a0000018a8e067c47707db98ca6c2c5aad3/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/5399152/2a0000018a8e2adae421e57cc55fdab80730/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/9495815/2a0000018a8e2d8254c4c7d9472c87c75725/orig', 
      
      'https://avatars.mds.yandex.net/get-sprav-products/9495815/2a0000018a8e6426535b84f5e14d6918a56b/orig'] 
      dog.breed = ['Йоркширский терьер', 'Акита-ину', 'Амстафф', 'Американская акита', 'Американский булли', 'Американский питбультерьер', 'Английский бульдог', 'Афганская борзая', 'Бассенджи', 'Бассет-хаунд', 'Бивер-йоркширский терьер', 'Бигль', 'Джек-рассел-терьер', 'Доберман', 'Лабрадор']
      dog.service = ['Мытье', 'Стрижка когтей', 'Стрижка шерсти', 'Гигиена', 'Экспресс']
      dog.createModal();
      break
  }
}

const closeWindow = ( event ) => {
  console.log(event)
  let noneWindow = ``;
  switch(true) {
    case event.target.className === 'sign__window' || event.target.className === 'sign__window--close' || event.target.classList[1] === 'sign__close' || event.target.className === 'container':
      backgroundModal.innerHTML = noneWindow;
      backgroundModal.style.cssText += `
        display: none;
      `;
      break
  }
}


let slider = document.querySelector('.testimonial__carousel'),
  sliderList = slider.querySelector('.carousel__list'),
  sliderTrack = slider.querySelector('.carousel__track'),
  slides = slider.querySelectorAll('.carousel__track--item'),
  arrows = slider.querySelector('.testimonial__content--arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime,
  getEvent = function() {
    console.log(slides)
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  },
  swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      swipeStartTime = Date.now();
      
      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },
  swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

arrows.addEventListener('click', function(event) {
  let target = event.target;

  if (target.classList.contains('next__slide') || target.className === 'slider__arrow--next') {
    slideIndex++;
  } else if (target.classList.contains('prev__slide') || target.className === 'slider__arrow--prev') {
    slideIndex--;
  } else {
    return;
  }

  slide();
});


const openMenu = (event) => {
  console.log(event)
  if(event.target.className === 'header__arrow' || event.target.className === 'header__arrow--icon') {
    if(headerMain.style.height === '14rem') {
      headerMain.style.cssText += `
        height: 5rem !important;
      `;
      headerContent.style.cssText += `
        top: -10rem;
      `;
      arrowMenu.style.cssText += `
        transform: rotate(90deg);
      `;

    // } else if() {
    } else {
      headerMain.style.cssText += `
        height: 14rem !important;
      `;
      headerContent.style.cssText += `
        top: 0rem;
      `;
      arrowMenu.style.cssText += `
        transform: rotate(-90deg);
      `;
    }
  }
}



const listenerSign = signModal.addEventListener( 'click', openSignWindow )
const listenerCoverBtn = signCoverModal.addEventListener( 'click', openSignWindow )
const listenerCat = priceModalCat.addEventListener( 'click', openPetWindow )
const listenerDog = priceModalDog.addEventListener( 'click', openPetWindow )
const listenerArrow = arrowMenu.addEventListener( 'click', openMenu )
const listenerBackgroundSign = backgroundModal.addEventListener( 'click', closeWindow )
