<template>
  <!--------------- Header -------------->
  <header id='top-header' class='top-header section-bg'>
    <div class='verticle-center'>
      <div class='container'>
        <div class='row'>
          <div class='display-flex'>
            <div class='col-lg-7 col-md-6'>
              <h1>
                <b>Medellin JS</b>
              </h1>
              <p>Somos una comunidad de apasionados cuyo fin es el de fortalecer y articular el ecosistema tecnológico de la ciudad de Medellín, Colombia.</p>
              <p>Cada mes nos reunimos en las instalaciones de Ruta N y realizamos dos charlas o conferencias relacionadas con JavaScript.</p>
              <p class='disclaimer'>Todo el contenido del grupo es propuesto por los miembros de la comunidad, si tienes alguna charla, conferencia o experiencia que quieras compartir puedes enviar tu propuesta <a class="bold" href="#contact-area">aquí</a></p>.
            </div>
            <div class='col-lg-5 col-md-6'>
              <div id='wrapper'>
                <div class='viewport'>
                  <div class='cube'>
                    <div class='side' v-for="(value, key) in values" :key="key">
                      <div class='cube-image'>{{value}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      values: {
        face1: '',
        face2: 'MED',
        face3: '.JS',
        face4: 'MED',
        face5: '.JS',
        face6: 6
      }
    }
  }
}
//   mounted () {
//     let events = new Events()
//     events.add = function (obj) {
//       obj.events = {}
//     }
//     events.implement = function (fn) {
//       fn.prototype = Object.create(Events.prototype)
//     }

//     function Events () {
//       this.events = {}
//     }
//     Events.prototype.on = function (name, fn) {
//       let events = this.events[name]
//       if (events === undefined) {
//         this.events[name] = [fn]
//         this.emit('event:on', fn)
//       } else {
//         if (events.indexOf(fn) === -1) {
//           events.push(fn)
//           this.emit('event:on', fn)
//         }
//       }
//       return this
//     }
//     Events.prototype.once = function (name, fn) {
//       let events = this.events[name]
//       fn.once = true
//       if (!events) {
//         this.events[name] = [fn]
//         this.emit('event:once', fn)
//       } else {
//         if (events.indexOf(fn) === -1) {
//           events.push(fn)
//           this.emit('event:once', fn)
//         }
//       }
//       return this
//     }
//     Events.prototype.emit = function (name, args) {
//       let events = this.events[name]
//       if (events) {
//         let i = events.length
//         while (i--) {
//           if (events[i]) {
//             events[i].call(this, args)
//             if (events[i].once) {
//               delete events[i]
//             }
//           }
//         }
//       }
//       return this
//     }
//     Events.prototype.unbind = function (name, fn) {
//       if (name) {
//         let events = this.events[name]
//         if (events) {
//           if (fn) {
//             let i = events.indexOf(fn)
//             if (i !== -1) {
//               delete events[i]
//             }
//           } else {
//             delete this.events[name]
//           }
//         }
//       } else {
//         delete this.events
//         this.events = {}
//       }
//       return this
//     }

//     let userPrefix

//     let prefix = (function () { // eslint-disable-line no-unused-vars
//       let styles = window.getComputedStyle(document.documentElement, '')
//       let pre = (Array.prototype.slice
//         .call(styles)
//         .join('')
//         .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
//       )[1]
//       let dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1]
//       userPrefix = {
//         dom: dom,
//         lowercase: pre,
//         css: '-' + pre + '-',
//         js: pre[0].toUpperCase() + pre.substr(1)
//       }
//     }())

//     function bindEvent (element, type, handler) {
//       if (element.addEventListener) {
//         element.addEventListener(type, handler, false)
//       } else {
//         element.attachEvent('on' + type, handler)
//       }
//     }

//     function Viewport (data) {
//       events.add(this)

//       let self = this

//       this.element = data.element
//       this.fps = data.fps
//       this.sensivity = data.sensivity
//       this.sensivityFade = data.sensivityFade
//       this.touchSensivity = data.touchSensivity
//       this.speed = data.speed

//       this.lastX = 0
//       this.lastY = 0
//       this.mouseX = 0
//       this.mouseY = 0
//       this.distanceX = 0
//       this.distanceY = 0
//       this.positionX = 1122
//       this.positionY = 136
//       this.torqueX = 0
//       this.torqueY = 0

//       this.down = false
//       this.upsideDown = false

//       this.previousPositionX = 0
//       this.previousPositionY = 0

//       this.currentSide = 0
//       this.calculatedSide = 0

//       bindEvent(document, 'mousedown', function () {
//         self.down = true
//       })

//       bindEvent(document, 'mouseup', function () {
//         self.down = false
//       })

//       bindEvent(document, 'keyup', function () {
//         self.down = false
//       })

//       bindEvent(document, 'mousemove', function (e) {
//         self.mouseX = e.pageX
//         self.mouseY = e.pageY
//       })

//       bindEvent(document, 'touchstart', function (e) {
//         self.down = true
//         e.touches = (e = e.touches[0]) || null
//         self.mouseX = e.pageX / self.touchSensivity
//         self.mouseY = e.pageY / self.touchSensivity
//         self.lastX = self.mouseX
//         self.lastY = self.mouseY
//       })

//       bindEvent(document, 'touchmove', function (e) {
//         if (e.preventDefault) {
//           e.preventDefault()
//         }

//         if (e.touches.length === 1) {
//           e.touches = (e = e.touches[0]) || null

//           self.mouseX = e.pageX / self.touchSensivity
//           self.mouseY = e.pageY / self.touchSensivity
//         }
//       })

//       bindEvent(document, 'touchend', function (e) {
//         self.down = false
//       })

//       setInterval(this.animate.bind(this), this.fps)
//     }

//     events.implement(Viewport)
//     Viewport.prototype.animate = function () {
//       this.distanceX = this.mouseX - this.lastX
//       this.distanceY = this.mouseY - this.lastY

//       this.lastX = this.mouseX
//       this.lastY = this.mouseY

//       if (this.down) {
//         this.torqueX =
//           this.torqueX * this.sensivityFade +
//           (this.distanceX * this.speed - this.torqueX) * this.sensivity
//         this.torqueY =
//           this.torqueY * this.sensivityFade +
//           (this.distanceY * this.speed - this.torqueY) * this.sensivity
//       }

//       if (Math.abs(this.torqueX) > 1.0 || Math.abs(this.torqueY) > 1.0) {
//         if (!this.down) {
//           this.torqueX *= this.sensivityFade
//           this.torqueY *= this.sensivityFade
//         }

//         this.positionY -= this.torqueY

//         if (this.positionY > 360) {
//           this.positionY -= 360
//         } else if (this.positionY < 0) {
//           this.positionY += 360
//         }

//         if (this.positionY > 90 && this.positionY < 270) {
//           this.positionX -= this.torqueX

//           if (!this.upsideDown) {
//             this.upsideDown = true
//             this.emit('upsideDown', { upsideDown: this.upsideDown })
//           }
//         } else {
//           this.positionX += this.torqueX

//           if (this.upsideDown) {
//             this.upsideDown = false
//             this.emit('upsideDown', { upsideDown: this.upsideDown })
//           }
//         }

//         if (this.positionX > 360) {
//           this.positionX -= 360
//         } else if (this.positionX < 0) {
//           this.positionX += 36
//         }

//         if (
//           !(this.positionY >= 46 && this.positionY <= 130) &&
//           !(this.positionY >= 220 && this.positionY <= 308)
//         ) {
//           if (this.upsideDown) {
//             if (this.positionX >= 42 && this.positionX <= 130) {
//               this.calculatedSide = 3
//             } else if (this.positionX >= 131 && this.positionX <= 223) {
//               this.calculatedSide = 2
//             } else if (this.positionX >= 224 && this.positionX <= 314) {
//               this.calculatedSide = 5
//             } else {
//               this.calculatedSide = 4
//             }
//           } else {
//             if (this.positionX >= 42 && this.positionX <= 130) {
//               this.calculatedSide = 5
//             } else if (this.positionX >= 131 && this.positionX <= 223) {
//               this.calculatedSide = 4
//             } else if (this.positionX >= 224 && this.positionX <= 314) {
//               this.calculatedSide = 3
//             } else {
//               this.calculatedSide = 2
//             }
//           }
//         } else {
//           if (this.positionY >= 46 && this.positionY <= 130) {
//             this.calculatedSide = 6
//           }

//           if (this.positionY >= 220 && this.positionY <= 308) {
//             this.calculatedSide = 1
//           }
//         }

//         if (this.calculatedSide !== this.currentSide) {
//           this.currentSide = this.calculatedSide
//           this.emit('sideChange')
//         }
//       }

//       this.element.style[userPrefix.js + 'Transform'] =
//         'rotateX(' + this.positionY + 'deg) rotateY(' + this.positionX + 'deg)'

//       if (
//         this.positionY !== this.previousPositionY ||
//         this.positionX !== this.previousPositionX
//       ) {
//         this.previousPositionY = this.positionY
//         this.previousPositionX = this.positionX

//         this.emit('rotate')
//       }
//     }

//     let viewport = new Viewport({
//       element: document.getElementsByClassName('cube')[0],
//       fps: 20,
//       sensivity: 0.1,
//       sensivityFade: 0.93,
//       speed: 2,
//       touchSensivity: 1.5
//     })

//     function Cube (data) {
//       let self = this

//       this.element = data.element
//       this.sides = this.element.getElementsByClassName('side')

//       this.viewport = data.viewport
//       this.viewport.on('rotate', function () {
//         self.rotateSides()
//       })
//       this.viewport.on('upsideDown', function (obj) {
//         self.upsideDown(obj)
//       })
//       this.viewport.on('sideChange', function () {
//         self.sideChange()
//       })
//     }
//     Cube.prototype.rotateSides = function () {
//       let viewport = this.viewport
//       if (viewport.positionY > 90 && viewport.positionY < 270) {
//         this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] =
//           'rotate(' + (viewport.positionX + viewport.torqueX) + 'deg)'
//         this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] =
//           'rotate(' + -(viewport.positionX + 180 + viewport.torqueX) + 'deg)'
//       } else {
//         this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] =
//           'rotate(' + (viewport.positionX - viewport.torqueX) + 'deg)'
//         this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] =
//           'rotate(' + -(viewport.positionX + 180 - viewport.torqueX) + 'deg)'
//       }
//     }
//     Cube.prototype.upsideDown = function (obj) {
//       let deg = obj.upsideDown === true ? '180deg' : '0deg'
//       let i = 5

//       while (i > 0 && --i) {
//         this.sides[i].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] =
//           'rotate(' + deg + ')'
//       }
//     }
//     Cube.prototype.sideChange = function () {
//       for (let i = 0; i < this.sides.length; ++i) {
//         this.sides[i].getElementsByClassName('cube-image')[0].className =
//           'cube-image'
//       }
//     }

//     Cube({
//       viewport: viewport,
//       element: document.getElementsByClassName('cube')[0]
//     })
//   }
// }
</script>

