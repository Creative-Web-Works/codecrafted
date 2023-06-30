function debounce(func, wait, immediate) {
  var timeout;

  return function() {
    var context = this;
    var args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

function smoothToPricing(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
}


// initialization of Popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// initialization of Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// helper for adding on all elements multiple attributes
function setAttributes(el, options) {
  Object.keys(options).forEach(function(attr) {
    el.setAttribute(attr, options[attr]);
  })
}

// activate popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// activate tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.onload = function() {
  // Material Design Input function
  var inputs = document.querySelectorAll('input');

  function handleInput(event) {
    var input = event.target;
    var parentElement = input.parentElement;
    var isFocused = event.type === 'focus';
    var isFilled = input.value !== '';

    parentElement.classList.toggle('is-focused', isFocused);
    parentElement.classList.toggle('is-filled', isFilled);
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', handleInput);
    inputs[i].addEventListener('blur', handleInput);
    inputs[i].addEventListener('input', handleInput);
  }
};

  // Ripple Effect
  var ripples = document.querySelectorAll('.btn');

  for (var i = 0; i < ripples.length; i++) {
    ripples[i].addEventListener('click', function(e) {
      var targetEl = e.target;
      var rippleDiv = targetEl.querySelector('.ripple');

      rippleDiv = document.createElement('span');
      rippleDiv.classList.add('ripple');
      rippleDiv.style.width = rippleDiv.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
      targetEl.appendChild(rippleDiv);

      rippleDiv.style.left = (e.offsetX - rippleDiv.offsetWidth / 2) + 'px';
      rippleDiv.style.top = (e.offsetY - rippleDiv.offsetHeight / 2) + 'px';
      rippleDiv.classList.add('ripple');
      setTimeout(function() {
        rippleDiv.parentElement.removeChild(rippleDiv);
      }, 600);
    }, false);
  }


// Multi Level Dropdown
function dropDown(a) {
  if (!document.querySelector('.dropdown-hover')) {
    event.stopPropagation();
    event.preventDefault();
    var multilevel = a.parentElement.parentElement.children;


    for (var i = 0; i < multilevel.length; i++) {
      if (multilevel[i].lastElementChild != a.parentElement.lastElementChild) {
        multilevel[i].lastElementChild.classList.remove('show');
        multilevel[i].firstElementChild.classList.remove('show');
      }
    }

    if (!a.nextElementSibling.classList.contains("show")) {
      a.nextElementSibling.classList.add("show");
      a.classList.add("show");

    } else {
      a.nextElementSibling.classList.remove("show");
      a.classList.remove("show");

    }
  }
}

// Colored shadows from Cards
if (document.querySelector('.blur-shadow-image')) {
  var shadowCards = document.querySelectorAll('.blur-shadow-image');
  var shadowCardsRounded = document.querySelectorAll('.blur-shadow-image.rounded-circle');

  if (shadowCardsRounded) {
    for (var i = 0; i < shadowCardsRounded.length; i++) {
      var div = document.createElement("DIV");
      shadowCardsRounded[i].parentElement.appendChild(div);
      div.classList.add('colored-shadow', 'rounded');

      var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
      var el = shadowCardsRounded[i].nextElementSibling;

      el.style.backgroundImage = 'url(' + currentSrc + ')';
    }
  }
  if (shadowCards) {
    for (var i = 0; i < shadowCards.length; i++) {
      var div = document.createElement("DIV");
      shadowCards[i].parentElement.appendChild(div);
      div.classList.add('colored-shadow');

      var currentSrc = shadowCards[i].children[0].getAttribute('src');
      var el = shadowCards[i].nextElementSibling;

      el.style.backgroundImage = 'url(' + currentSrc + ')';
    }
  }
}

// Colored shadows for Avatars
if (document.querySelector('.blur-shadow-avatar')) {
  var shadowCards = document.querySelectorAll('.blur-shadow-avatar');
  var shadowCardsRounded = document.querySelectorAll('.blur-shadow-avatar.rounded-circle');

  if (shadowCardsRounded) {
    for (var i = 0; i < shadowCardsRounded.length; i++) {

      var div = document.createElement("DIV");
      shadowCardsRounded[i].parentElement.appendChild(div);
      div.classList.add('colored-shadow', 'rounded', 'start-0', 'end-0', 'mx-auto');

      var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

      for (var k = 0; k < avatarClasses.length; k++) {
        if (shadowCardsRounded[i].firstElementChild.classList.contains(avatarClasses[k])) {
          div.classList.add(avatarClasses[k]);
        }
      }

      var currentSrc = shadowCardsRounded[i].children[0].getAttribute('src');
      var el = shadowCardsRounded[i].nextElementSibling;

      el.style.backgroundImage = 'url(' + currentSrc + ')';
    }
  }
  if (shadowCards) {

    for (var i = 0; i < shadowCards.length; i++) {

      var div = document.createElement("DIV");
      shadowCards[i].parentElement.appendChild(div);
      div.classList.add('colored-shadow', 'start-0', 'end-0', 'mx-auto');

      var avatarClasses = ['avatar-xs', 'avatar-sm', 'avatar-lg', 'avatar-xl', 'avatar-xxl'];

      for (var k = 0; k < avatarClasses.length; k++) {
        if (shadowCards[i].firstElementChild.classList.contains(avatarClasses[k])) {
          div.classList.add(avatarClasses[k]);
        }
      }

      var currentSrc = shadowCards[i].children[0].getAttribute('src');
      var el = shadowCards[i].nextElementSibling;

      el.style.backgroundImage = 'url(' + currentSrc + ')';
    }
  }
}

//Google Maps
if (document.querySelector('#google-maps')) {
  var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
  var mapOptions = {
    zoom: 13,
    center: myLatlng,
    scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#444444"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": 45
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "color": "#C5CBF5"
        }, {
          "visibility": "on"
        }]
      }
    ]
  };

  var map = new google.maps.Map(document.getElementById("google-maps"), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title: "Hello World!"
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);
}

// Tabs navigation

var total = document.querySelectorAll('.nav-pills');

total.forEach(function(item, i) {
  var moving_div = document.createElement('div');
  var first_li = item.querySelector('li:first-child .nav-link');
  var tab = document.createElement('span');
  tab.textContent = "-";

  moving_div.className = 'moving-tab position-absolute nav-link';
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  moving_div.style.padding = '0px';
  moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.addEventListener('mouseover', function(event) {
    handleMouseOver(event, moving_div, item);
  });
});

var total = document.querySelectorAll('.nav-pills');

total.forEach(function(item, i) {
  var moving_div = document.createElement('div');
  var first_li = item.querySelector('li:first-child .nav-link');
  var tab = document.createElement('span');
  tab.textContent = "-";

  moving_div.className = 'moving-tab position-absolute nav-link';
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  moving_div.style.padding = '0px';
  moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.addEventListener('mouseover', handleMouseOver);
});

function handleMouseOver(event) {
  var li = event.target.closest('li');
  if (!li) return;

  var item = li.closest('.nav-pills');
  var nodes = Array.from(item.children);
  var index = nodes.indexOf(li) + 1;

  var dimensionProperty = item.classList.contains('flex-column') ? 'offsetHeight' : 'offsetWidth';
  var sum = 0;
  for (var i = 0; i < index - 1; i++) {
    sum += nodes[i][dimensionProperty];
  }

  moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
  moving_div.style[dimensionProperty] = li[dimensionProperty] + 'px';
}

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = document.createElement('div');
    moving_div.className = 'moving-tab position-absolute';
    navPills[i].appendChild(moving_div);
    moving_div.style.padding = '0px';
    moving_div.style.width = '0px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
    navPills[i].addEventListener('mouseover', handleMouseOver);
  }
};

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = document.createElement('div');
    moving_div.className = 'moving-tab position-absolute';
    navPills[i].appendChild(moving_div);
    moving_div.style.padding = '0px';
    moving_div.style.width = '0px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
    navPills[i].addEventListener('mouseover', handleMouseOver);
  }
};

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = document.createElement('div');
    moving_div.className = 'moving-tab position-absolute';
    navPills[i].appendChild(moving_div);
    moving_div.style.padding = '0px';
    moving_div.style.width = '0px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
    navPills[i].addEventListener('mouseover', handleMouseOver.bind(null, moving_div));
  }
};

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = document.createElement('div');
    moving_div.className = 'moving-tab position-absolute';
    navPills[i].appendChild(moving_div);
    moving_div.style.padding = '0px';
    moving_div.style.width = '0px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
    navPills[i].addEventListener('mouseover', handleMouseOver.bind(null, moving_div));
  }
};

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = document.createElement('div');
    moving_div.className = 'moving-tab position-absolute';
    navPills[i].appendChild(moving_div);
    moving_div.style.padding = '0px';
    moving_div.style.width = '0px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
    navPills[i].addEventListener('mouseover', function(event) {
      handleMouseOver(moving_div, event);
    });
  }
};

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = document.createElement('div');
    moving_div.className = 'moving-tab position-absolute';
    navPills[i].appendChild(moving_div);
    moving_div.style.padding = '0px';
    moving_div.style.width = '0px';
    moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
    moving_div.style.transition = '.5s ease';
    navPills[i].addEventListener('mouseover', handleMouseOver.bind(null, moving_div));
  }
};

window.onload = function() {
  var navPills = document.querySelectorAll('.nav-pills');

  for (var i = 0; i < navPills.length; i++) {
    var moving_div = createMovingDiv();
    navPills[i].appendChild(moving_div);
    navPills[i].addEventListener('mouseover', handleMouseOver.bind(null, moving_div));
  }
};

function createMovingDiv() {
  var moving_div = document.createElement('div');
  moving_div.className = 'moving-tab position-absolute';
  moving_div.style.padding = '0px';
  moving_div.style.width = '0px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';
  return moving_div;
}

function handleMouseOver(moving_div, event) {
  var li = event.target.closest('li');
  if (!li) return;

  var item = li.closest('.nav-pills');
  var nodes = Array.from(item.children);
  var index = nodes.indexOf(li) + 1;

  var dimensionProperty = item.classList.contains('flex-column') ? 'offsetHeight' : 'offsetWidth';
  var sum = getSum(nodes, dimensionProperty, index);

  moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
  moving_div.style[dimensionProperty] = li[dimensionProperty] + 'px';

  item.querySelector('li:nth-child(' + index + ') .nav-link').addEventListener('click', handleClick.bind(null, moving_div, item, nodes, li, index));
}

function getSum(nodes, dimensionProperty, index) {
  var sum = 0;
  for (var i = 0; i < index - 1; i++) {
    sum += nodes[i][dimensionProperty];
  }
  return sum;
}

function handleClick(moving_div, item, nodes, li, index) {
  var dimensionProperty = item.classList.contains('flex-column') ? 'offsetHeight' : 'offsetWidth';
  var sum = getSum(nodes, dimensionProperty, index);

  moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
  moving_div.style[dimensionProperty] = li[dimensionProperty] + 'px';
}




// Helper function to calculate the sum of dimensions
function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var index = nodes.indexOf(li) + 1;
  var sum = 0;
  
  for (var j = 1; j <= nodes.indexOf(li); j++) {
    sum += item.querySelector('li:nth-child(' + j + ')')[dimensionProperty];
  }
  
  return sum;
}

// Helper function to add or remove flex-column class based on window width
function updateFlexColumnClass(item) {
  if (window.innerWidth < 991) {
    if (!item.classList.contains('flex-column')) {
      item.classList.add('flex-column', 'on-resize');
    }
  } else {
    if (item.classList.contains('on-resize')) {
      item.classList.remove('flex-column', 'on-resize');
    }
  }
}










// Resize event listener
// Function to handle tab navigation resize

function handleTabNavigationResize() {
  total.forEach(function(item) {
    var moving_div = createMovingDiv(item);
    var li = item.querySelector(".nav-link.active").parentElement;

    if (li) {
      var dimensionProperty = item.classList.contains('flex-column') ? 'offsetHeight' : 'offsetWidth';
      var sum = calculateDimensionSum(item, li, dimensionProperty);

      moving_div.style.transform = `translate3d(${sum}px, ${item.classList.contains('flex-column') ? sum : 0}px, 0px)`;
      moving_div.style.width = li.offsetWidth + 'px';
      moving_div.style.height = li.offsetHeight + 'px';
    }

    updateFlexColumnClass(item);
    updateMovingTabs(item, moving_div);
  });
}

function createMovingDiv(item) {
  var moving_div = item.querySelector('.moving-tab');
  if (moving_div) {
    moving_div.remove();
  }

  moving_div = document.createElement('div');
  var tab = item.querySelector(".nav-link.active").cloneNode();
  tab.textContent = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  moving_div.style.padding = '0px';
  moving_div.style.transition = '.5s ease';

  return moving_div;
}

function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var sum = nodes.slice(0, nodes.indexOf(li)).reduce(function (total, node) {
    return total + node[dimensionProperty];
  }, 0);

  return sum;
}

function updateFlexColumnClass(item) {
  var isFlexColumn = window.innerWidth < 991;
  item.classList.toggle('flex-column', isFlexColumn);
  item.classList.toggle('on-resize', isFlexColumn);
}

function updateMovingTabs(item, moving_div) {
  item.querySelectorAll('.moving-tab').forEach(function(movingTab) {
    movingTab.remove();
  });

  item.appendChild(moving_div);
}

window.addEventListener('resize', handleTabNavigationResize);


function createMovingDiv(item) {
  var moving_div = document.createElement('div');
  var tab = item.querySelector(".nav-link.active").cloneNode();
  tab.textContent = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  moving_div.style.padding = '0px';
  moving_div.style.transition = '.5s ease';

  return moving_div;
}

function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var sum = nodes.slice(0, nodes.indexOf(li)).reduce(function (total, node) {
    return total + node[dimensionProperty];
  }, 0);

  return sum;
}

function updateFlexColumnClass(item, isFlexColumn) {
  item.classList.toggle('flex-column', isFlexColumn);
  item.classList.toggle('on-resize', isFlexColumn);
}

window.addEventListener('resize', handleTabNavigationResize);


function createMovingDiv(item) {
  var moving_div = document.createElement('div');
  var tab = item.querySelector(".nav-link.active").cloneNode();
  tab.textContent = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  moving_div.style.padding = '0px';
  moving_div.style.transition = '.5s ease';

  return moving_div;
}

function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var sum = nodes.slice(0, nodes.indexOf(li)).reduce(function (total, node) {
    return total + node[dimensionProperty];
  }, 0);

  return sum;
}

function updateFlexColumnClass(item) {
  var isFlexColumn = window.innerWidth < 991;
  item.classList.toggle('flex-column', isFlexColumn);
  item.classList.toggle('on-resize', isFlexColumn);
}

window.addEventListener('resize', handleTabNavigationResize);


function createMovingDiv(item) {
  var moving_div = document.createElement('div');
  var tab = item.querySelector(".nav-link.active").cloneNode();
  tab.textContent = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  moving_div.style.padding = '0px';
  moving_div.style.transition = '.5s ease';

  return moving_div;
}

function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var sum = nodes.slice(0, nodes.indexOf(li)).reduce(function (total, node) {
    return total + node[dimensionProperty];
  }, 0);

  return sum;
}

function updateFlexColumnClass(item) {
  var isFlexColumn = window.innerWidth < 991;
  item.classList.toggle('flex-column', isFlexColumn);
  item.classList.toggle('on-resize', isFlexColumn);
}

window.addEventListener('resize', handleTabNavigationResize);


function createMovingDiv(item) {
  var moving_div = document.createElement('div');
  var tab = item.querySelector(".nav-link.active").cloneNode();
  tab.textContent = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  moving_div.style.padding = '0px';
  moving_div.style.transition = '.5s ease';

  return moving_div;
}

function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var sum = 0;

  for (var j = 0; j < nodes.indexOf(li); j++) {
    sum += item.querySelector(`li:nth-child(${j + 1})`)[dimensionProperty];
  }

  return sum;
}

function updateFlexColumnClass(item) {
  if (window.innerWidth < 991) {
    item.classList.toggle('flex-column', !item.classList.contains('flex-column'));
    item.classList.toggle('on-resize', !item.classList.contains('flex-column'));
  } else {
    item.classList.remove('flex-column', 'on-resize');
  }
}

window.addEventListener('resize', handleTabNavigationResize);


// Helper function to create the moving div element
function createMovingDiv(item) {
  var moving_div = document.createElement('div');
  var tab = item.querySelector(".nav-link.active").cloneNode();
  tab.innerHTML = "-";
  
  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  moving_div.style.padding = '0px';
  moving_div.style.transition = '.5s ease';
  
  return moving_div;
}

// Helper function to calculate the sum of dimensions
function calculateDimensionSum(item, li, dimensionProperty) {
  var nodes = Array.from(li.closest('ul').children);
  var index = nodes.indexOf(li) + 1;
  var sum = 0;
  
  for (var j = 1; j <= nodes.indexOf(li); j++) {
    sum += item.querySelector('li:nth-child(' + j + ')')[dimensionProperty];
  }
  
  return sum;
}

// Helper function to add or remove flex-column class based on window width
function updateFlexColumnClass(item) {
  if (window.innerWidth < 991) {
    if (!item.classList.contains('flex-column')) {
      item.classList.add('flex-column', 'on-resize');
    }
  } else {
    if (item.classList.contains('on-resize')) {
      item.classList.remove('flex-column', 'on-resize');
    }
  }
}

// Resize event listener
window.addEventListener('resize', handleTabNavigationResize);




function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// End tabs navigation


// Copy code function

function copyCode(el) {
  const selection = window.getSelection();
  const range = document.createRange();
  const textToCopy = el.nextElementSibling;
  range.selectNodeContents(textToCopy);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  window.getSelection().removeAllRanges()
  if (!el.parentElement.querySelector('.alert')) {
    var alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success', 'position-absolute', 'top-0', 'border-0', 'text-white', 'w-25', 'end-0', 'start-0', 'mt-2', 'mx-auto', 'py-2');
    alert.style.transform = 'translate3d(0px, 0px, 0px)'
    alert.style.opacity = '0';
    alert.style.transition = '.35s ease';
    setTimeout(function() {
      alert.style.transform = 'translate3d(0px, 20px, 0px)';
      alert.style.setProperty("opacity", "1", "important");
    }, 100);
    alert.innerHTML = "Code successfully copied!";
    el.parentElement.appendChild(alert);
    setTimeout(function() {
      alert.style.transform = 'translate3d(0px, 0px, 0px)'
      alert.style.setProperty("opacity", "0", "important");
    }, 2000);
    setTimeout(function() {
      el.parentElement.querySelector('.alert').remove();
    }, 2500);
  }
}
import stable from 'semver-stable';

 
var bump = require('bump-regex');
 
bump('version: "0.1.2"', function(err, out) {
  // => 'version: "0.1.3"'
});

import { readPackageUp } from 'read-pkg-up';

async function main() {
  const result = await readPackageUp();
  console.log(result);
}

main();

import { trimNewlines, trimNewlinesStart, trimNewlinesEnd } from 'trim-newlines';

console.log(trimNewlines('\n🦄\n🦄\r\n'));
//=> '🦄\n🦄'

console.log(trimNewlinesStart('\n🦄\r\n'));
//=> '🦄\r\n'

console.log(trimNewlinesEnd('\n🦄\r\n'));

./foo-app.js unicorns --rainbow
#!/usr/bin/env node
import meow from 'meow';
import foo from './lib/index.js';

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`, {
	importMeta: import.meta,
	flags: {
		rainbow: {
			type: 'boolean',
			shortFlag: 'r'
		}
	}
});
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

foo(cli.input.at(0), cli.flags);
//=> '\n🦄'

normalizeData = require('normalize-package-data')
packageData = require("./package.json")
normalizeData(packageData)
// packageData is now normalized