var popup = document.querySelector('.search_form');
var popupButton = document.querySelector('.search_header');

var arrival = popup.querySelector('#date');
var departure = popup.querySelector('#departure');
var numberOfAdult = popup.querySelector('#adult');
var numberOfChild = popup.querySelector('#child');

var adultButtonMinus = popup.querySelector('#amountAdultMinus');
var adultButtonPlus = popup.querySelector('#amountAdultPlus');
var childButtonMinus = popup.querySelector('#amountChildrenMinus');
var childButtonPlus = popup.querySelector('#amountChildrenPlus');

var isStorage = true;
var storageArrival = '';
var storageDeparture = '';

try {
  storageArrival = localStorage.getItem('arrival');
  storageDeparture = localStorage.getItem('departure');
} catch(err) {
  isStorage = false;
}

popupButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.toggle('display_none');
  popup.classList.add('modal-show');

  if (storageArrival && storageDeparture) {
    arrival.value = storageArrival;
    departure.value = storageDeparture;
    setTimeout(function() { numberOfAdult.focus() }, 650);
  } else if (storageDeparture) {
    departure.value = storageDeparture;
    setTimeout(function() { arrival.focus() }, 650);
  } else if (storageDeparture) {
    arrival.value = storageArrival;
    setTimeout(function() { departure.focus() }, 650);
  } else {
    setTimeout(function () {
      arrival.focus()
    }, 650);
  }
});

adultButtonMinus.addEventListener('click', function(evt) {
  if (numberOfAdult.value > 1) {
    numberOfAdult.value = +numberOfAdult.value - 1;
  }
});

adultButtonPlus.addEventListener('click', function(evt) {
  if (numberOfAdult.value < 9) {
    numberOfAdult.value = +numberOfAdult.value + 1;
  }
});

childButtonMinus.addEventListener('click', function(evt) {
  if (numberOfChild.value > 0) {
    numberOfChild.value = +numberOfChild.value - 1;
  }
});

childButtonPlus.addEventListener('click', function(evt) {
  if (numberOfChild.value < 9) {
    numberOfChild.value = +numberOfChild.value + 1;
  }
});
