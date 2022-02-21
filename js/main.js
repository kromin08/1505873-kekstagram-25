// Источник: http://kodesource.top/javascript/form/string-length.php
let countComment = function (userComment, maxlength) {
  maxlength = 140;
  let lenghtComment = userComment.length;
  if (lenghtComment <= maxlength) {
    console.log('Спасибо за ваш комментарий');
    return true;
  } else {
    console.log('Максимальное количество символов 140');
    return false;
  }
}
countComment('Комментарий посетителя сайта');
