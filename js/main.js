// Источник: http://kodesource.top/javascript/form/string-length.php
const COUNT_COMMENT = function (userComment, maxlength) {
  maxlength = 140;
  const LENGHT_COMMENT = userComment.length;
  if (LENGHT_COMMENT <= maxlength) {
    return true;
  } else {
    return false;
  }
};
COUNT_COMMENT('Комментарий посетителя сайта');
