let now, delta
const ID = "bongo-cat";
const notesG3 = noteEls;
const armDuration = 0.2;
const bearDuration = 0.25;
var targetEl = e.target;
const checkboxDuration = 0.25;

const pawDuration = 0.1;


const numNotes = noteEls.length / 3;


let index = 0,
  interval = 1000;



var _a, _b;
// Bongo Cat originally created by @StrayRogue and @DitzyFlama


const {
  React: { useState, useRef, useEffect, Fragment },
  ReactDOM: { render },
  gsap: {
    set,
    to,
    timeline,
    utils: { random } } } =

  window;

for (let i = 0; i < this.segments - 1; i++) {
  this.sticks.push(new Stick(this.dots[i], this.dots[i + 1]))
}
    }

update(mouse) {
  this.dots.forEach(dot => {
    dot.update(mouse)
  })


  let then = Date.now()

  const frame = () => {
    requestAnimationFrame(frame)
    now = Date.now()
    delta = now - then
    if (delta < App.interval) return
    then = now - (delta % App.interval)
    this.ctx.clearRect(0, 0, App.width, App.height)

    // draw here
    this.ropes.forEach(rope => {
      rope.update(this.mouse)
      rope.draw(this.ctx)
    })
  }
  requestAnimationFrame(frame)
}
}


for (let i = 0; i < this.iterations; i++) {
  this.sticks.forEach(stick => {
    stick.update()
  })
}
}

draw(ctx) {
  this.dots.forEach(dot => {
    dot.draw(ctx)
  })
  this.sticks.forEach(stick => {
    stick.draw(ctx)
  })
  this.dots[this.dots.length - 1].drawLight(ctx)
}
  }

  class App {
    static width = innerWidth;
    static height = innerHeight;
    static dpr = devicePixelRatio > 1 ? 2 : 1;
    static interval = 1000 / 60;
  
    constructor() {
      this.canvas = document.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.mouse = new Mouse(this.canvas);
  
      this.resize();
      window.addEventListener('resize', this.resize.bind(this));
  
      this.createRopes();
    }
  
    createRopes() {
      this.ropes = [];
      const TOTAL = App.width * 0.06;
      const armLimit = random(0, 3);
  
      const shadowCards = document.querySelectorAll('.blur-shadow-image');
      const shadowCardsRounded = document.querySelectorAll('.blur-shadow-image.rounded-circle');
      const ripples = document.querySelectorAll('.btn');
  
      for (let i = 0; i < ripples.length; i++) {
        ripples[i].addEventListener('click', function (e) {
          if (shadowCardsRounded) {
            const el = shadowCards[i].nextElementSibling;
            const currentSrc = shadowCards[i].children[0].getAttribute('src');
            el.style.backgroundImage = 'url(' + currentSrc + ')';
          }
        });
      }
    }
  
    resize() {
      // Implement the resize logic here
    }
  }
  




        var div = document.createElement('div');
        shadowCards[i].parentElement.appendChild(div);
        div.classList.add('colored-shadow');


        var el = shadowCardsRounded[i].nextElementSibling;

        el.style.backgroundImage = 'url(' + currentSrc + ')';
      }
    }
    if (shadowCards) {

      var div = document.createElement('div');
      shadowCardsRounded[i].parentElement.appendChild(div);
      div.classList.add('colored-shadow', 'rounded');


      const cat = {
        pawRight: {
          up: s(".paw-right .up"),
          down: s(".paw-right .down"),
        },
        pawLeft: {
          up: s(".paw-left .up"),
          down: s(".paw-left .down"),
        },
      };


      const SOUNDS = {
        ON: new Audio('https://assets.codepen.io/605876/switch-on.mp3'),
        OFF: new Audio('https://assets.codepen.io/605876/switch-off.mp3'),
        GROAN: new Audio('https://assets.codepen.io/605876/bear-groan.mp3')
      };

      SOUNDS.GROAN.playbackRate = 2;


      onBearComplete = () => {
        SOUNDS.GROAN.play();
        set(swearRef.current, { display: 'block' });
      };
      const base = armDuration + armDuration + pawDuration;
      const preDelay = Math.random();
      const delay = count > armLimit ? base + bearDuration + preDelay : base;


      delete () {
        this.isRunning = true;
        this.displayState();
      }
      displayState() {
        this.el.disabled = this.isRunning;
        this.el.setAttribute("data-running", this.isRunning);
      }
      reset() {
        this.isRunning = false;
        this.displayState();
      }
    }

document.querySelectorAll('.button').forEach(button => {
  const { parentElement } = button;
  const notes = parentElement.querySelectorAll('.note');

  for (const note of notes) {
    parentElement.appendChild(note.cloneNode(true));
    parentElement.appendChild(note.cloneNode(true));
  }

  const rippleDiv = document.createElement('span');
  rippleDiv.classList.add('ripple');
  const targetWidth = Math.max(button.offsetWidth, button.offsetHeight);
  rippleDiv.style.width = rippleDiv.style.height = targetWidth + 'px';
  button.appendChild(rippleDiv);

  const offsetX = e.offsetX;
  const offsetY = e.offsetY;
  rippleDiv.style.left = (offsetX - rippleDiv.offsetWidth / 2) + 'px';
  rippleDiv.style.top = (offsetY - rippleDiv.offsetHeight / 2) + 'px';
  rippleDiv.classList.add('ripple');
  setTimeout(function () {
    rippleDiv.parentElement.removeChild(rippleDiv);
  }, 600);
});


  if(document.querySelector('.blur-shadow-image')) {

  for (let i = 0; i < TOTAL + 1; i++) {
    const x = randomNumBetween(App.width * 0.3, App.width * 0.7)
    const y = 0
    const gap = randomNumBetween(App.height * 0.05, App.height * 0.08)
    const segments = 10
    const rope = new Rope({ x, y, gap, segments })
    rope.pin(0)

    this.ropes.push(rope)
  }
}

resize() {
  App.width = innerWidth
  App.height = innerHeight

  this.canvas.style.width = '100%'
  this.canvas.style.height = '100%'
  this.canvas.width = App.width * App.dpr
  this.canvas.height = App.height * App.dpr
  this.ctx.scale(App.dpr, App.dpr)

  this.createRopes()
}

render() {


  let duration = 3000,
    svg = button.querySelector('svg'),
    svgPath = new Proxy({
      y: null,
      smoothing: null
    }, {
      set(target, key, value) {
        target[key] = value;
        if (target.y !== null && target.smoothing !== null) {
          svg.innerHTML = getPath(target.y, target.smoothing, null);
        }
        return true;
      },
      get(target, key) {
        return target[key];
      }
    });

  button.style.setProperty('--duration', duration);

  svgPath.y = 20;
  svgPath.smoothing = 0;

  button.addEventListener('click', e => {

    e.preventDefault();

    if (!button.classList.contains('loading')) {

      button.classList.add('loading');

      gsap.to(svgPath, {
        smoothing: .3,
        duration: duration * .065 / 1000
      });

      gsap.to(svgPath, {
        y: 12,
        duration: duration * .265 / 1000,
        delay: duration * .065 / 1000,
        ease: Elastic.easeOut.config(1.12, .4)
      });

      setTimeout(() => {
        svg.innerHTML = getPath(0, 0, [
          [3, 14],
          [8, 19],
          [21, 6]
        ]);
      }, duration / 2);

    }

  });

});




onComplete: onBearComplete,
  y: bearTranslation
}) :

() => { }).

to(
  armWrapRef.current,
  { x: 50, duration: armDuration },
  count > armLimit ? preDelay : 0).

  to(armRef.current, { scaleX: 0.7, duration: armDuration }).
  to(pawRef.current, {
    duration: pawDuration,
    scaleX: 0.8,

    const tl = gsap.timeline();
    tl.add(animatePawState(cat.pawLeft.up), "start")
      .add(animatePawState(cat.pawRight.down), "start")
      .add(animatePawState(cat.pawLeft.down), "start+=0.19")
      .add(animatePawState(cat.pawRight.up), "start+=0.19")
      .timeScale(1.6);
    gsap.from(".terminal-code line", {
      drawSVG: "0%",
      duration: 0.1,
      stagger: 0.1,
      ease: "none",
      repeat: -1,
    });
    // typing for pipe function doesn't seem to be working for usage when partially applied?

    const animate = star => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      star.style.animation = "none";
      // deepcode ignore NoEffectExpression: <please specify a reason of ignoring this>
      star.offsetHeight;
      star.style.animation = "";
    }

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}




function handleDOMContentLoaded() {
  const animatePawState = (selector) => gsap.fromTo(selector, { autoAlpha: 0 }, {
    autoAlpha: 1,
    duration: 0.01,
    repeatDelay: 0.19,
    yoyo: true,
    repeat: -1,
  });

  for (let i = 0; i < segments; i++) {
    dots.push(new Dot(x, y + i * gap));
  }

  onComplete();
}

const segments = 10;
const dots = [];
const x = 0;
const y = 0;
const gap = 10;

function onComplete() {
  setChecked(false);
  setCount(count + 1);
}

window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);


  class DeleteButton {
    isRunning = false;

    constructor(el) {
      this.el = document.querySelector(el);
      this.init();
    }
    init() {

      let vel = Vector.sub(this.pos, this.oldPos)

      this.oldPos.setXY(this.pos.x, this.pos.y)

      vel.mult(this.friction)
      vel.add(this.gravity)


      const bearTL = timeline({ delay: Math.random(), onComplete });
      bearTL.
        add(
          count > armLimit ?
            to(bearRef.current, {
              duration: bearDuration,

              this.el?.addEventListener("click", this.delete.bind(this));

              const resetTrigger = this.el?.querySelector("[data-anim]");
              resetTrigger?.addEventListener("animationend", this.reset.bind(this));
    }

        let bearTranslation;
  if (count > armLimit && count < headLimit) {
    bearTranslation = '40%';
  } else if (count >= headLimit) {
    bearTranslation = '0%';
  }


  const animateNotes = (els) => {
    els.forEach((el) => {
      gsap.set(el, {
        stroke: colorizer(),
        rotation: rotator(),
        x: gsap.utils.random(-25, 25, 1),
      });
    });
    return gsap.fromTo(els, {
      autoAlpha: 1,
      y: 0,
      scale: 0,
    }, {
      duration: 2,
      autoAlpha: 0,
      scale: 1,
      ease: "none",
      stagger: {
        from: "random",
        each: 0.5,
      },
      rotation: dir(gsap.utils.random(20, 30, 1)),
      x: dir(gsap.utils.random(40, 60, 1)),
      y: gsap.utils.random(-200, -220, 1),
      onComplete: () => animateNotes(els),
    });
  };
  tl.add(animateNotes(notesG1)).add(animateNotes(notesG2), ">0.05").add(animateNotes(notesG3), ">0.25");





  const App = () => {
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(1);
  
    return (
      // JSX elements and component rendering
      // ...
    );
  };
  

    const onHover = () => {
      if (Math.random() > 0.5 && count > armLimit) {
        to(bearRef.current, bearDuration / 2, { y: '40%' });
      }
    };
    const offHover = () => {
      if (!checked) {
        to(bearRef.current, bearDuration / 2, { y: '100%' });
      }
    };
    const onChange = () => {
      if (checked) return;
      setChecked(true);
    };

    useEffect(() => {
      const grabBearTL = () => {
        /**
         * Different height translations for the bear elements
         *
         * Paw will go to scaleX 0.8
         * Arm scaleX goes down to 0.7
         * Arm wrap translates to 50% or 50px
         * Bear goes 100% -> 40% -> 0
         */

        let { x: dx, y: dy } = Vector.sub(mouse.pos, this.pos)
        const dist = Math.sqrt(dx * dx + dy * dy)

        const direction = new Vector(dx / dist, dy / dist)

        const force = Math.max((mouse.radius - dist) / mouse.radius, 0)

        if (force > 0.6) this.pos.setXY(mouse.pos.x, mouse.pos.y)
        else {
          this.pos.add(vel)
          this.pos.add(direction.mult(force))
        }
      }

      drawLight(ctx) {
        ctx.drawImage(
          this.lightImg,
          this.pos.x - this.lightSize / 2, this.pos.y - this.lightSize / 2, this.lightSize, this.lightSize
        )
      }

      draw(ctx) {
        ctx.fillStyle = '#aaa'
        ctx.fillRect(this.pos.x - this.mass, this.pos.y - this.mass, this.mass * 2, this.mass * 2)
      }
    }
  
  class Stick {
        constructor(p1, p2) {
          this.startPoint = p1
          this.endPoint = p2

          this.length = this.startPoint.pos.dist(this.endPoint.pos)
          this.tension = 0.3
        }

        update() {
          const dx = this.endPoint.pos.x - this.startPoint.pos.x
          const dy = this.endPoint.pos.y - this.startPoint.pos.y

          const dist = Math.sqrt(dx * dx + dy * dy)
          const diff = (dist - this.length) / dist

          const offsetX = diff * dx * this.tension
          const offsetY = diff * dy * this.tension

          const m = this.startPoint.mass + this.endPoint.mass
          const m1 = this.endPoint.mass / m
          const m2 = this.startPoint.mass / m

          if (!this.startPoint.pinned) {
            this.startPoint.pos.x += offsetX * m1
            this.startPoint.pos.y += offsetY * m1
          }
          if (!this.endPoint.pinned) {
            this.endPoint.pos.x -= offsetX * m2
            this.endPoint.pos.y -= offsetY * m2
          }
        }

        draw(ctx) {
          ctx.beginPath()
          ctx.strokeStyle = '#999'
          ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y)
          ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y)
          ctx.stroke()
          ctx.closePath()
        }
      }
  
  class Rope {
        constructor(config) {
          this.x = config.x
          this.y = config.y
          this.segments = config.segments || 10
          this.gap = config.gap || 15
          this.color = config.color || 'gray'

          this.dots = []
          this.sticks = []

          this.iterations = 10

          this.create()
        }

        pin(index) {
          this.dots[index].pinned = true
        }

        create() {

          onComplete: () => set(swearRef.current, { display: 'none' })
        }).

      to(
        bgRef.current,
        {
          onStart: () => {
            SOUNDS.OFF.play();
          },
          duration: checkboxDuration,
          backgroundColor: '#aaa'
        },

        delay).

      to(
        indicatorRef.current,
        { duration: checkboxDuration, x: '0%' },
        delay).

      to(pawRef.current, { duration: pawDuration, scaleX: 0 }, delay).
      to(
        armRef.current,
        { duration: pawDuration, scaleX: 1 },
        delay + pawDuration).

      to(
        armWrapRef.current,
        { duration: armDuration, x: 0 },
        delay + pawDuration).

      to(
        bearRef.current,
        { duration: bearDuration, y: '100%' },
        delay + pawDuration);

    return bearTL;
  };

  const showTimeline = () => {
    timeline({
      onStart: () => SOUNDS.ON.play()
    }).

      to(
        bgRef.current,
        { duration: checkboxDuration, backgroundColor: '#2eec71' },
        0).

      to(indicatorRef.current, { duration: checkboxDuration, x: '100%' }, 0).
      add(grabBearTL(), checkboxDuration);
  };
  if (checked) showTimeline();
}, [checked, count]);

return /*#__PURE__*/(
  React.createElement(Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "bear__wrap" }, /*#__PURE__*/
      React.createElement("div", { ref: swearRef, className: "bear__swear" }, "#@$%*!"), /*#__PURE__*/


      React.createElement("svg", {
        ref: bearRef,
        className: "bear",
        viewBox: "0 0 284.94574 359.73706",
        preserveAspectRatio: "xMinYMin"
      }, /*#__PURE__*/
        React.createElement("g", { id: "layer1", transform: "translate(-7.5271369,-761.38595)" }, /*#__PURE__*/
          React.createElement("g", {
            id: "g5691",
            transform: "matrix(1.2335313,0,0,1.2335313,-35.029693,-212.83637)"
          }, /*#__PURE__*/
            React.createElement("path", {
              id: "path4372",
              d: "M 263.90933,1081.4151 A 113.96792,96.862576 0 0 0 149.99132,985.71456 113.96792,96.862576 0 0 0 36.090664,1081.4151 l 227.818666,0 z",
              style: { fill: '#784421', fillOpacity: 1 }
            }), /*#__PURE__*/

            React.createElement("path", {
              id: "path5634",
              d: "m 250.42825,903.36218 c 2e-5,66.27108 -44.75411,114.99442 -102.42825,114.99442 -57.674143,0 -98.428271,-48.72334 -98.428251,-114.99442 4e-6,-66.27106 40.754125,-92.99437 98.428251,-92.99437 57.67413,0 102.42825,26.72331 102.42825,92.99437 z",
              style: { fill: '#784421', fillOpacity: 1 }
            }), /*#__PURE__*/

            React.createElement("path", {
              id: "path5639",
              d: "m 217,972.86218 c 2e-5,21.53911 -30.44462,42.00002 -68,42.00002 -37.55538,0 -66.000019,-20.46091 -66,-42.00002 0,-21.53911 28.44464,-36 66,-36 37.55536,0 68,14.46089 68,36 z",
              style: { fill: '#e9c6af', illOpacity: 1 }
            }), /*#__PURE__*/

            React.createElement("path", {
              id: "path5636",
              d: "m 181.5,944.36218 c 0,8.28427 -20.59974,26.5 -32.75,26.5 -12.15026,0 -34.75,-18.21573 -34.75,-26.5 0,-8.28427 22.59974,-13.5 34.75,-13.5 12.15026,0 32.75,5.21573 32.75,13.5 z",
              style: { fill: '#000000', fillOpacity: 1 }
            }), /*#__PURE__*/

            React.createElement("g", { id: "g5681" }, /*#__PURE__*/
              React.createElement("ellipse", {
                style: { fill: '#784421', fillOpacity: 1 },
                id: "path5657",
                cx: "69",
                cy: "823.07269",
                rx: "34.5",
                ry: "33.289474"
              }), /*#__PURE__*/

              React.createElement("path", {
                style: { fill: '#e9c6af', fillOpacity: 1 },
                d: "M 69,47.310547 A 24.25,23.399124 0 0 0 44.75,70.710938 24.25,23.399124 0 0 0 64.720703,93.720703 c 0.276316,-0.40734 0.503874,-0.867778 0.787109,-1.267578 1.70087,-2.400855 3.527087,-4.666237 5.470704,-6.798828 1.943616,-2.132591 4.004963,-4.133318 6.179687,-6.003906 2.174725,-1.870589 4.461274,-3.611714 6.855469,-5.226563 2.394195,-1.614848 4.896019,-3.10338 7.498047,-4.46875 0.539935,-0.283322 1.133058,-0.500695 1.68164,-0.773437 A 24.25,23.399124 0 0 0 69,47.310547 Z",
                id: "ellipse5659",
                transform: "translate(0,752.36216)"
              })), /*#__PURE__*/


            React.createElement("g", { transform: "matrix(-1,0,0,1,300,0)", id: "g5685" }, /*#__PURE__*/
              React.createElement("ellipse", {
                ry: "33.289474",
                rx: "34.5",
                cy: "823.07269",
                cx: "69",
                id: "ellipse5687",
                style: { fill: '#784421', illOpacity: 1 }
              }), /*#__PURE__*/

              React.createElement("path", {
                transform: "translate(0,752.36216)",
                id: "path5689",
                d: "M 69,47.310547 A 24.25,23.399124 0 0 0 44.75,70.710938 24.25,23.399124 0 0 0 64.720703,93.720703 c 0.276316,-0.40734 0.503874,-0.867778 0.787109,-1.267578 1.70087,-2.400855 3.527087,-4.666237 5.470704,-6.798828 1.943616,-2.132591 4.004963,-4.133318 6.179687,-6.003906 2.174725,-1.870589 4.461274,-3.611714 6.855469,-5.226563 2.394195,-1.614848 4.896019,-3.10338 7.498047,-4.46875 0.539935,-0.283322 1.133058,-0.500695 1.68164,-0.773437 A 24.25,23.399124 0 0 0 69,47.310547 Z",
                style: { fill: '#e9c6af', fillOpacity: 1 }
              })), /*#__PURE__*/


            React.createElement("ellipse", {
              ry: "9.6790915",
              rx: "9.2701159",
              cy: "900.38916",
              cx: "105.83063",
              id: "path4368",
              style: { fill: '#000000', fillOpacity: 1 }
            }), /*#__PURE__*/

            React.createElement("ellipse", {
              style: { fill: '#000000', fillOpacity: 1 },
              id: "ellipse4370",
              cx: "186.89894",
              cy: "900.38916",
              rx: "9.2701159",
              ry: "9.6790915"
            }),

            count >= angerLimit && /*#__PURE__*/
            React.createElement(Fragment, null, /*#__PURE__*/
              React.createElement("path", {
                id: "path4396",
                d: "m 92.05833,865.4614 39.42665,22.76299",
                style: {
                  stroke: '#000000',
                  strokeWidth: 4.86408424,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 4,
                  strokeOpacity: 1
                }
              }), /*#__PURE__*/


              React.createElement("path", {
                style: {
                  stroke: '#000000',
                  strokeWidth: 4.86408424,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 4,
                  strokeOpacity: 1
                },

                d: "m 202.82482,865.4614 -39.42664,22.76299",
                id: "path4400"
              })))))), /*#__PURE__*/







    React.createElement("div", { ref: armWrapRef, className: "bear__arm-wrap" }, /*#__PURE__*/
      React.createElement("svg", {
        ref: armRef,
        className: "bear__arm",
        viewBox: "0 0 250.00001 99.999997",
        preserveAspectRatio: "xMinYMin"
      }, /*#__PURE__*/
        React.createElement("g", { transform: "translate(868.57141,-900.93359)", id: "layer1" }, /*#__PURE__*/
          React.createElement("path", {
            style: { fill: '#784421', fillOpacity: 1 },
            d: "m -619.43416,945.05124 c 4.18776,73.01076 -78.25474,53.24342 -150.21568,52.94118 -82.38711,-0.34602 -98.92158,-19.44459 -98.92157,-47.05883 0,-27.61424 4.78794,-42.54902 73.82353,-42.54902 69.03559,0 171.43607,-30.93764 175.31372,36.66667 z",
            id: "path4971"
          }), /*#__PURE__*/

          React.createElement("ellipse", {
            style: { fill: '#e9c6af', fillOpacity: 1 },
            id: "path4974",
            cx: "-683.02264",
            cy: "950.98572",
            rx: "29.910826",
            ry: "29.414362"
          })))), /*#__PURE__*/




    React.createElement("div", { ref: pawRef, className: "bear__paw" }), /*#__PURE__*/
    React.createElement("div", { className: "mask" }), /*#__PURE__*/
    React.createElement("div", { className: "checkbox", onMouseOver: onHover, onMouseOut: offHover }, /*#__PURE__*/
      React.createElement("input", { type: "checkbox", onChange: onChange, checked: checked }), /*#__PURE__*/
      React.createElement("div", { ref: bgRef, className: "checkbox__bg" }), /*#__PURE__*/
      React.createElement("div", { ref: indicatorRef, className: "checkbox__indicator" }))));
  
  
  
  };

render( /*#__PURE__*/React.createElement(App, null), rootNode);




class Mouse {
  constructor(canvas) {
    this.pos = new Vector(-1000, -1000)
    this.radius = 40

    canvas.onmousemove = e => this.pos.setXY(e.clientX, e.clientY)
    canvas.ontouchmove = e => this.pos.setXY(e.touches[0].clientX, e.touches[0].clientY)
    canvas.ontouchcancel = () => this.pos.setXY(-1000, -1000)
    canvas.ontouchend = () => this.pos.setXY(-1000, -1000)
  }
}

class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y)
    this.oldPos = new Vector(x, y)

    this.friction = 0.97
    this.gravity = new Vector(0, 0.6)
    this.mass = 1

    this.pinned = false

    this.lightImg = document.querySelector('#light-img')
    this.lightSize = 15
  }

  update(mouse) {
    if (this.pinned) return


    const noteEls = noteElFn(music.note);
    const music = { note: s(".music .note") };
    const notesG1 = noteEls.splice(0, numNotes);
    const notesG2 = noteEls.splice(0, numNotes);
    const pink = style.getPropertyValue("--pink");
    const blue = style.getPropertyValue("--blue");
    const green = style.getPropertyValue("--green");
    const notes = document.querySelectorAll(".note");
    const orange = style.getPropertyValue("--orange");
    const rotator = gsap.utils.random(-50, 50, 1, true);
    const style = getComputedStyle(document.documentElement);
    const noteElFn = gsap.utils.pipe(gsap.utils.toArray, gsap.utils.shuffle);
    const colorizer = gsap.utils.random([green, pink, blue, orange, cyan, "#a3a4ec", "#67b5c0", "#fd7c6e"], true);

    const d = new DeleteButton("#delete");
  });


        let onBearComplete = () => { };
if (Math.random() > 0.5 && count > angerLimit)

  const cyan = style.getPropertyValue("--cyan");
gsap.set(music.note, { scale: 0, autoAlpha: 1 });


function getPoint(point, i, a, smoothing) {
  let p = a[i - 1] || point;
  let n = a[i + 1] || point;
  let length = Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2));
  let angle = Math.atan2(n[1] - p[1], n[0] - p[0]);
  if (i === 0) {
    angle += Math.PI;
  }
  let cp1x = point[0] + Math.cos(angle - Math.PI) * length * smoothing;
  let cp1y = point[1] + Math.sin(angle - Math.PI) * length * smoothing;
  let cp2x = point[0] + Math.cos(angle) * length * smoothing;
  let cp2y = point[1] + Math.sin(angle) * length * smoothing;
  return `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point[0]},${point[1]}`;
}




function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);

    if (immediate && !timeout) {
      func();
    }
  };
}


window.onload = function () {
  var inputs = document.querySelectorAll('input');

  function handleInput(event) {
    var input = event.target;
    var parentElement = input.parentElement;
    parentElement.classList.toggle('is-filled', input.value !== '');
  }

  function handleBlur(event) {
    var input = event.target;
    var parentElement = input.parentElement;
    parentElement.classList.remove('is-focused');
    parentElement.classList.toggle('is-filled', input.value !== '');
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


function randomNumBetween(min, max) {
  return Math.random() * (max - min) + min
}

window.addEventListener('load', () => {
  const app = new App()
  app.render()
})






export default class Vector {
  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
  }
  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y)
  }
  static sub(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y)
  }
  add(x, y) {
    if (arguments.length === 1) {
      this.x += x.x
      this.y += x.y
    } else if (arguments.length === 2) {
      this.x += x
      this.y += y
    }
    return this
  }
  sub(x, y) {
    if (arguments.length === 1) {
      this.x -= x.x
      this.y -= x.y
    } else if (arguments.length === 2) {
      this.x -= x
      this.y -= y
    }
    return this
  }
  mult(v) {
    if (typeof v === 'number') {
      this.x *= v
      this.y *= v
    } else {
      this.x *= v.x
      this.y *= v.y
    }
    return this
  }
  setXY(x, y) {
    this.x = x
    this.y = y
    return this
  }
  dist(v) {
    const dx = this.x - v.x
    const dy = this.y - v.y
    return Math.sqrt(dx * dx + dy * dy)
  }
}




function getPath(update, smoothing, pointsNew) {
  let points = pointsNew ? pointsNew : [
    [4, 12],
    [12, update],
    [20, 12]
  ],
    d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
  return `<path d="${d}" />`;
}


function handleClick(e) {
  e.preventDefault();

  const button = this;
  const box = button.querySelector('.box');
  const truck = button.querySelector('.truck');

  if (!button.classList.contains('done') && !button.classList.contains('animation')) {
    button.classList.add('animation');

    gsap.to(button, {
      '--box-s': 1,
      '--box-o': 1,
      duration: .3,
      delay: .5
    });

    gsap.to(box, {
      x: 0,
      duration: .4,
      delay: .7
    });

    gsap.to(button, {
      '--hx': -5,
      '--bx': 50,
      duration: .18,
      delay: .92
    });

    gsap.to(box, {
      y: 0,
      duration: .1,
      delay: 1.15
    });

    gsap.set(button, {
      '--truck-y': 0,
      '--truck-y-n': -26
    });

    gsap.to(button, {
      '--truck-y': 1,
      '--truck-y-n': -25,
      duration: .2,
      delay: 1.25,
      onComplete() {
        gsap.timeline({
          onComplete() {
            button.classList.add('done');
          }
        }).to(truck, {
          x: 0,
          duration: .4
        }).to(truck, {
          x: 40,
          duration: 1
        }).to(truck, {
          x: 20,
          duration: .6
        }).to(truck, {
          x: 96,
          duration: .4
        });
        gsap.to(button, {
          '--progress': 1,
          duration: 2.4,
          ease: "power2.in"
        });
      }
    });
  } else {
    button.classList.remove('animation', 'done');
    gsap.set(truck, {
      x: 4
    });
    gsap.set(button, {
      '--progress': 0,
      '--hx': 0,
      '--bx': 0,
      '--box-s': .5,
      '--box-o': 0,
      '--truck-y': 0,
      '--truck-y-n': -26
    });
    gsap.set(box, {
      x: -24,
      y: -6
    });
  }
}

document.querySelectorAll('.truck-button').forEach(button => {
  button.addEventListener('click', handleClick);
});



document.querySelectorAll('.gravityButton').forEach(btn => {

  btn.addEventListener('mousemove', (e) => {

    const rect = btn.getBoundingClientRect();
    const h = rect.width / 2;

    const x = e.clientX - rect.left - h;
    const y = e.clientY - rect.top - h;

    const r1 = Math.sqrt(x * x + y * y);
    const r2 = (1 - (r1 / h)) * r1;

    const angle = Math.atan2(y, x);
    const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
    const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

    const op = (r2 / r1) + 0.25;

    btn.style.setProperty('--tx', `${tx}px`);
    btn.style.setProperty('--ty', `${ty}px`);
    btn.style.setProperty('--opacity', `${op}`);
  });

  btn.addEventListener('mouseleave', (e) => {
    btn.style.setProperty('--tx', '0px');
    btn.style.setProperty('--ty', '0px');
    btn.style.setProperty('--opacity', `${0.25}`);
  });
})


