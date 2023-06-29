/*!

<!--
=========================================================
*Creative Web Works Studio Ltd
=========================================================

* Main Page:  ./index.html 
* Copyright 2023 Creative Web Works Studio Ltd (https://codecrafted.co.uk/)
* Coded by https://codecrafted.co.uk/

 =========================================================

 -->
*/

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


function debounce(func, wait, immediate) {
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
    if (immediate && !timeout) {
      func();
    }
  };
}

  function debounced() {
    var context = this;
    var args = arguments;

    var executeFunction = function() {
      if (!immediate) {
        func.apply(context, args);
      }
      timeout = null;
    };

    var shouldCallNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(executeFunction, wait);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  }

  return debounced;
}

// Function for smooth scroll to element

// Debounce function
function debounce(func, wait, immediate) {
  var timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
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

// activate popovers
// deepcode ignore RedeclarationVars: <please specify a reason of ignoring this>
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// activate tooltips
// deepcode ignore RedeclarationVars: <please specify a reason of ignoring this>
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


window.onload = function() {
  var inputs = document.querySelectorAll('input');

  function handleInput(event) {
    var input = event.target;
    var parentElement = input.parentElement;
    parentElement.classList.toggle('is-filled', input.value !== "");
  }

  function handleBlur(event) {
    var input = event.target;
    var parentElement = input.parentElement;
    parentElement.classList.remove('is-focused');
    parentElement.classList.toggle('is-filled', input.value !== "");
  }

  function handleFocus(event) {
    var input = event.target;
    input.parentElement.classList.add('is-focused');
  }

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', handleInput);
    inputs[i].addEventListener('blur', handleBlur);
    inputs[i].addEventListener('focus', handleFocus);
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
};

// Multi Level Dropdown

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


// Tabs navigation


var total = document.querySelectorAll('.nav-pills');

total.forEach(function (item) {
  var moving_div = document.createElement('div');
  var first_li = item.querySelector('li:first-child .nav-link');
  var tab = document.createElement('a');
  tab.innerHTML = "-";

  moving_div.classList.add('moving-tab', 'position-absolute');
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  moving_div.style.padding = '0px';
  moving_div.style.width = first_li.offsetWidth + 'px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.addEventListener('mouseover', function (event) {
    var target = event.target;
    var li = target.closest('li');
    if (li) {
      var nodes = Array.from(item.children);
      var index = nodes.indexOf(li) + 1;

      var sum = 0;
      for (var j = 0; j < index - 1; j++) {
        sum += nodes[j].offsetWidth;
      }

      if (item.classList.contains('flex-column')) {
        moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
        moving_div.style.height = li.offsetHeight + 'px';
      } else {
        moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
        moving_div.style.width = li.offsetWidth + 'px';
      }
    }
  });
});

 

// Tabs navigation resize
window.addEventListener('resize', function() 
  total.forEach(function(item) {
    var moving_div = item.querySelector('.moving-tab');
    moving_div.remove();
    
    var tab = item.querySelector(".nav-link.active").cloneNode(true);
    tab.innerHTML = "-";
    
    var moving_div = document.createElement('div');
    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);
    
    item.appendChild(moving_div);
    
    moving_div.style.padding = '0px';
    moving_div.style.transition = '.5s ease';
    
    var li = item.querySelector(".nav-link.active").parentElement;
    
    if (li) {
      var nodes = Array.from(item.querySelectorAll('li'));
      var index = nodes.indexOf(li) + 1;
      
      var sum = 0;
      if (item.classList.contains('flex-column')) {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += nodes[j - 1].offsetHeight;
        }
        moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
        moving_div.style.width = nodes[index - 1].offsetWidth + 'px';
        moving_div.style.height = nodes[index - 1].offsetHeight + 'px';
      } else {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += nodes[j - 1].offsetWidth;
        }
        moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
        moving_div.style.width = nodes[index - 1].offsetWidth + 'px';
      }
    }
  });
  
  if (window.innerWidth < 991) {
    total.forEach(function(item) {
      if (!item.classList.contains('flex-column')) {
        item.classList.add('flex-column', 'on-resize');
      }
    });
  } else {
    total.forEach(function(item) {
      if (item.classList.contains('on-resize')) {
        item.classList.remove('flex-column', 'on-resize');
      }
    })
  }
});




function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}


// End tabs navigation

// Copy code function


/**
 * Scaling <iframe>-elements.
 * 
 * Emanuel Kluge
 * twitter.com/Herschel_R
 */
(function (win, doc) {
  var BREAKPOINT = 1030;
  var THROTTLE = 30;
  var iframe = doc.querySelector('iframe');
  var iframeHeight = iframe.clientHeight;
  var timestamp = 0;

  function handleResize() {
    var now = Date.now();

    if (now - timestamp >= THROTTLE) {
      timestamp = now;

      var scaleFactor = Math.min(win.innerWidth / BREAKPOINT, 1);

      iframe.style.transform = 'scale(' + scaleFactor + ')';
      iframe.style.height = iframeHeight * scaleFactor + 'px';
    }
  }

  win.addEventListener('resize', handleResize);
  handleResize();
})(window, document);

  function transformStr(obj) {
    var obj = obj || {},
        val = '',
        j;
    
    for ( j in obj ) {
      val += j + '(' + obj[j] + ') ';
    }
    val += 'translateZ(0)';
    return '-webkit-transform: ' + val + '; ' +
            '-moz-transform: ' + val + '; ' +
            'transform: ' + val;
  }
  
  /**
   * Scaling the iframe if necessary.
   *
   * @return {Function}
   */
  function onResize() {
    var now = +new Date(),
      winWidth = window.innerWidth;
  
    if (now - timestamp < THROTTLE || winWidth > BREAKPOINT) {
      iframe.removeAttribute('style');
      return onResize;
    }
  
    timestamp = now;
  
    var scale = Math.pow(winWidth / BREAKPOINT, 1.2),
      width = 100 / scale,
      height = IFRAME_HEIGHT / scale,
      offsetLeft = (width - 100) / 2;
  
    iframe.setAttribute('style', `transform: scale(${scale}); translateX(-${offsetLeft}%); width: ${width}%; height: ${height}px`);
  
    return onResize;
  }
  
  window.addEventListener('resize', onResize, false);
  