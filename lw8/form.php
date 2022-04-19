<div class="main__menu">
  <div class="main__menu_header">
    <img class="main__menu-image" src="images/Welcome.svg">
    <p class="main__menu-title">Записаться на курс</p>
  </div>
    <form class="main__menu_form" method="POST" action="formProcessing.php">
      <input class="main__menu_form-name" type="text" name="name" placeholder="Ваше имя">
      <input class="main__menu_form-email" type="email" name="email" placeholder="Email">
      <select class="main__menu_form-activity" size="1" name="activity" placeholder="Деятельность">
        <option value="Деятельность не выбрана" hidden="">Деятельность</option>
        <option value="Программист">Программист</option>
        <option value="Дизайнер">Дизайнер</option>
        <option value="Маркетолог">Маркетолог</option>
      </select>
      <div class="main__menu_checkbox">
        <input class="main__menu-checkbox" type="checkbox" id="info-text">
        <label class="main__menu-checkbox-text" for="info-text">Согласен получать информационные материалы о старте</label>
        <img class="main__menu-checkbox-image" src="images/Vector.svg">
      </div>
      <button class="main__menu_button" type="submit">
        <p class="main__menu_button-text">Записаться на курс</p>
      </button>
    </form>
</div>