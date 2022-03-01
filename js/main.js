// Источник: http://kodesource.top/javascript/form/string-length.php
const MAX_LENGHT = 140;
const COUNT_COMMENT = function (userComment) {
  if (userComment.length <= MAX_LENGHT) {
    return true;
  } else {
    Error('Максимальное количество символов комментария не более 140');
    return false;
  }
};
COUNT_COMMENT('Комментарий посетителя сайта');

// Источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || max === min || min === max || max < min || min > max) {
    Error('Вводите целые положительные числа от меньшего к большему');
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
getRandomIntInclusive(20, 10);

// 4.9 Больше деталей.
/*const GET_NEW_OBJECTS = (NUMBER_OBJECTS_CREATE) => {
  const CREATE_KEY = [];
  for (let i = 0; i <= NUMBER_OBJECTS_CREATE - 1; i++) {
    CREATE_KEY[i] = {};
    CREATE_KEY[i].ID = '999';
    CREATE_KEY[i].URL = 1;
    CREATE_KEY[i].DESCRIPTION = 'Первый';
    CREATE_KEY[i].likes = '299';
    CREATE_KEY[i].avatar = '25';
    CREATE_KEY[i].COMMENTS = 'В целом Плохо. Но не всё.';
  }
  return CREATE_KEY;
};
GET_NEW_OBJECTS(25);
*/

const ID = [];
const URL = [];
const DESCRIPTION = ['Отель и море','Указатель к морю','Сейшеллы','Фотобикини',
'Спакари','МакЛарен','Диета','Морс','Пляж и самолёт','Удобство хранения','Тропинка к пляжу',
'RS5 на сликах','Высокая морская кухня','Суси из котэ','Домашние унты','Пролетая на Тибетом',
'Бей, а мы споём','Красивая классика','Ночь, туалет, хайтэк','Восточный релакс отель','Дорого, мало, но модно',
'Закат и чувства','Тропический краб','Файер шоу на битах','Джип-сафари'];
const COMMENTS = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Паша','Гагик','Эмили','Эльвира','Алёша','Виолетта'];



const GET_RANDOM_ITENGER = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const GET_RANDON_ARRAY_OBJECT = (elements) => {
  return elements[GET_RANDOM_ITENGER(0, elements.length - 1)];
};

const NEW_OBJECTS = () => {
  return {
    id: GET_RANDON_ARRAY_OBJECT(ID),
    url: GET_RANDON_ARRAY_OBJECT(URL),
    likes: GET_RANDON_ARRAY_OBJECT(LIKES),
    description: GET_RANDON_ARRAY_OBJECT(DESCRIPTION),
  };
};

const similarNEW_OBJECTS = Array.from({length: 2}, NEW_OBJECTS);

