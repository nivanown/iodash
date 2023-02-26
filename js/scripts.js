/*- like -*/
let buttons = document.querySelectorAll('.like');
for(let i = 0; i < buttons.length; i++) {
  buttons.item(i).addEventListener('click', doClickButton);
}

function doClickButton(e) {
  toggleButton(e.target);
}

function toggleButton(button) {
  button.classList.toggle('selected');
}

/*- tabs -*/
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});

/*- phone-input -*/
[].forEach.call(document.querySelectorAll('.phone-input'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            newValue = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
        if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
});

/*- textarea -*/
$('.textarea').keyup(function() {
  var characterCount = $(this).val().length,
      current = $('.current'),
      maximum = $('.maximum'),
      theCount = $('.count');

  current.text(characterCount);
});

/*- menu-btn -*/
var siteToggle = $('.menu-btn'),
  siteMenu= $('.header__right-col');

siteToggle.on('click', function(){
  $(this).toggleClass('open');
  siteMenu.toggleClass('show');
});

/*- account -*/
var siteBtn = $('.account__in'),
  siteDropdown= $('.account__dropdown');

siteBtn.on('click', function(){
  $(this).toggleClass('open');
  siteDropdown.toggleClass('show');
});