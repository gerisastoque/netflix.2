// Crear la primera sección
const section1 = document.createElement('section');

// Crear una nav con clase "nav"
const nav1 = document.createElement('nav');
nav1.setAttribute('class', 'nav');

// Crear un div con clase "menu"
const menu1 = document.createElement('div');
menu1.setAttribute('class', 'menu');

// Crear la imagen con clase "menu__image--outlinemenu"
const imgOutlineMenu1 = document.createElement('img');
imgOutlineMenu1.classList.add('menu__image--outlinemenu');
imgOutlineMenu1.setAttribute('src', './outline_menu_white_48dp.png');
imgOutlineMenu1.setAttribute('alt', 'outline_menu_white');

// Crear párrafos con clase "menu__text"
const menuText1 = document.createElement('p');
menuText1.classList.add('menu__text');
menuText1.textContent = 'Tv shows';

const menuText2 = document.createElement('p');
menuText2.classList.add('menu__text');
menuText2.textContent = 'Movies';

const menuText3 = document.createElement('p');
menuText3.classList.add('menu__text');
menuText3.textContent = 'kids';

// Agregar elementos de menú al div "menu"
menu1.appendChild(imgOutlineMenu1);
menu1.appendChild(menuText1);
menu1.appendChild(menuText2);
menu1.appendChild(menuText3);

// Crear la imagen con clase "menu__image--outlineperson"
const imgOutlinePerson1 = document.createElement('img');
imgOutlinePerson1.classList.add('menu__image--outlineperson');
imgOutlinePerson1.setAttribute('src', './outline_person_outline_white_48dp.png');
imgOutlinePerson1.setAttribute('alt', 'outline_person_outline_white');

// Agregar el div "menu" y la imagen al nav
nav1.appendChild(menu1);
nav1.appendChild(imgOutlinePerson1);

// Agregar la nav a la primera sección
section1.appendChild(nav1);

// Crear la segunda sección
const section2 = document.createElement('section');
section2.classList.add('banner__image');

// Crear párrafos y elementos de la segunda sección
const serieName = document.createElement('p');
serieName.classList.add('banner__serie--name');
serieName.textContent = 'Anne with an "E"';

const serieRating = document.createElement('p');
serieRating.classList.add('banner__serie--rating');
serieRating.textContent = ' (rating 4.3)';

const br1 = document.createElement('br');

const serieContain = document.createElement('div');
serieContain.classList.add('banner__serie--contain');

const serieText1 = document.createElement('p');
serieText1.textContent = 'Una huerfanita con una imaginación sin escalas termina por error en la casa de';

const serieText2 = document.createElement('p');
serieText2.textContent = 'una solterona y su hermano. Basada en la inolvidable novela.';

const br2 = document.createElement('br');

const additionalInfo = document.createElement('p');
additionalInfo.textContent = '2017 | Clasificación por edad: 13+ | 3 temporadas | Drama';

const br3 = document.createElement('br');
const br4 = document.createElement('br');

const playAndSaveBackground = document.createElement('div');
playAndSaveBackground.classList.add('banner__playandsave--background');

const playLink = document.createElement('a');
playLink.classList.add('banner__playandsave--text');
playLink.setAttribute('href', '#');
playLink.textContent= 'Play'

const playImage = document.createElement('img');
playImage.classList.add('banner__playandsave');
playImage.setAttribute('src', './play_arrow_white.png');
playImage.setAttribute('alt', 'Play arrow');
playLink.appendChild(playImage)

const saveLink = document.createElement('a');
saveLink.setAttribute('class', 'banner__playandsave--text');
saveLink.setAttribute('href', '#');
saveLink.textContent= 'Save'

const saveImage = document.createElement('img');
saveImage.setAttribute('class', 'banner__playandsave');
saveImage.setAttribute('src', './baseline_bookmark_border_white.png');
saveImage.setAttribute('alt', 'Saved');
saveLink.appendChild(saveImage);

// Agregar elementos a la segunda sección
section2.appendChild(serieName);
section2.appendChild(serieRating);
section2.appendChild(br1);
serieContain.appendChild(serieText1);
serieContain.appendChild(serieText2);
serieContain.appendChild(br2);
serieContain.appendChild(additionalInfo);
section2.appendChild(serieContain);
section2.appendChild(br3);
section2.appendChild(br4);
playAndSaveBackground.appendChild(playLink);
playAndSaveBackground.appendChild(saveLink);
section2.appendChild(playAndSaveBackground);

// Agregar las secciones al documento o al contenedor principal
document.body.appendChild(section1);
document.body.appendChild(section2);

// Crear el párrafo "RECOMMENDED FOR YOU"
const carruselFont1 = document.createElement('p');
carruselFont1.setAttribute('class', 'carrusel__font');
carruselFont1.textContent = 'RECOMMENDED FOR YOU';
document.body.appendChild(carruselFont1)

// Crear la primera sección "carrusel"
const carrusel1 = document.createElement('div');
carrusel1.classList.add('carrusel');
document.body.appendChild(carrusel1)

// Crear el elemento div para el modal
const modal = document.createElement('div');
modal.id = 'myModal';
modal.className = 'modal';

// Crear el botón de cierre
const closeBtn = document.createElement('span');
closeBtn.className = 'close';
closeBtn.id = 'closeModal';
closeBtn.innerHTML = '&times;';

// Crear la imagen del modal
const modalImage = document.createElement('img');
modalImage.className = 'modal-content';
modalImage.id = 'modalImage';

// Crear el elemento para el pie de foto
const caption = document.createElement('div');
caption.id = 'caption';

// Adjuntar los elementos al modal en el orden correcto
modal.appendChild(closeBtn);
modal.appendChild(modalImage);
modal.appendChild(caption);

// Agregar el modal al documento (por ejemplo, al final del body)
document.body.appendChild(modal);

// Función para crear un conjunto de elementos para una película
const createMovieElement = (imageSrc, altText, ratingCount) => {
    // Crear un div para una película
    const movieDiv = document.createElement('div');

    // Crear un enlace a la página de la película
    const movieLink = document.createElement('a');

    // Crear la imagen de la película
    const movieImage = document.createElement('img');
    movieImage.classList.add('carrusel__sizeimage');
    movieImage.setAttribute('src', imageSrc);
    movieImage.setAttribute('alt', altText);
    movieLink.appendChild(movieImage);

    // Crear el div para las calificaciones
    const ratingsDiv = document.createElement('div');

    // Crear las calificaciones de estrella
    for (let i = 1; i <= 5; i++) {
        const starImage = document.createElement('img');
        starImage.classList.add('rating');
        starImage.setAttribute('src', i <= ratingCount ? './star_white.png' : './star_outline.png');
        starImage.setAttribute('alt', `star${i}`);
        ratingsDiv.appendChild(starImage);
    }

    // Crear el enlace "Saved"
    const savedLink = document.createElement('a');
    savedLink.classList.add('banner__playandsave--text');
    savedLink.setAttribute('href', '#');
    const savedImage = document.createElement('img');
    savedImage.classList.add('banner__playandsave');
    savedImage.setAttribute('src', './baseline_bookmark_border_white.png');
    savedImage.setAttribute('alt', 'Saved');
    savedLink.appendChild(savedImage);
    savedLink.textContent = 'Saved';

    // Agregar los elementos al div de la película
    movieDiv.appendChild(movieLink);
    movieDiv.appendChild(ratingsDiv);
    movieDiv.appendChild(savedLink);

    // Agregar un evento de clic para mostrar el modal
    movieLink.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = imageSrc;
        caption.innerHTML = altText;
    });

    return movieDiv;
}



// Crear los elementos de película y agregarlos al carrusel
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/564x/73/dc/92/73dc920ad72275fbb37695685a5ae86a.jpg', 'movie 1', 5));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/474x/6d/7b/3f/6d7b3f9a5b94e03caee1da3a3b51ba35.jpg', 'movie 2', 4));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/564x/81/38/a9/8138a90cc4017bfa73bfcf10eebbcd05.jpg', 'movie 3', 5));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/474x/3b/98/95/3b9895856178b5c4475465eb59c59ea3.jpg', 'movie 4', 3));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/474x/87/1a/5c/871a5c9ee144680cb350fe48bf30c704.jpg', 'movie 5', 5));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/564x/06/5a/84/065a84ee9a1d8f5dd9d528ba6050a155.jpg', 'movie 6', 1));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/564x/ea/6f/c4/ea6fc4ae73c53f6e245279aedfff8128.jpg', 'movie 7', 5));
carrusel1.appendChild(createMovieElement('https://i.pinimg.com/474x/7c/7b/d9/7c7bd90a4e1c2026b706e51c44902beb.jpg', 'movie 8', 5));

// Crear la segunda sección
const section3 = document.createElement('section');

// Crear el párrafo "TRENDING THIS WEEK"
const carruselFont2 = document.createElement('p');
carruselFont2.setAttribute('class', 'carrusel__font');
carruselFont2.textContent = 'TRENDING THIS WEEK'; 

// Crear la segunda sección "carrusel"
const carrusel2 = document.createElement('div');
carrusel2.setAttribute('class', 'carrusel');
document.body.appendChild(carrusel2)

// Crear elementos de película y agregarlos al segundo carrusel
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/474x/13/76/b1/1376b108c50aa6ea247cabcc7a2f051a.jpg', 'movie 9', 5));
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/474x/4f/57/eb/4f57eb4833ed345f970ff4fc4a40ca1f.jpg', 'movie 10', 5));
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/474x/dd/8a/96/dd8a96ffa0cc38afb86297b16aed5ec3.jpg', 'movie 11', 5));
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/564x/c1/bf/5d/c1bf5d92f1ff4a75eb835a2a97506408.jpg', 'movie 12', 5));
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/474x/c7/99/d6/c799d6f2862a0c6f5cfa3d4ea13930fa.jpg', 'movie 13', 5));
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/564x/eb/a9/8b/eba98bc6b9a7d16c4ff3a87d3d8ccad2.jpg', 'movie 14', 5));
carrusel2.appendChild(createMovieElement('https://i.pinimg.com/474x/ac/f7/6e/acf76eae947ab32e3f317f832528e06e.jpg', 'movie 15', 5));


