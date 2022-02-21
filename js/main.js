// Источник: http://kodesource.top/javascript/form/string-length.php
const COUNT_COMMENT = function (userComment, maxlength) {
  maxlength = 140;
  const LENGTH_COMMENT = userComment.length;
  if (LENGTH_COMMENT <= maxlength) {
    return true;
  } else {
    return false;
  }
};
COUNT_COMMENT('Комментарий посетителя сайта');

// Источник:
