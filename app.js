var App = (function() {
  var App = {}

  App.element = function element() {
    var element = document.createElement("div")
    element.style.position = "fixed"
    element.style.border = `5px solid ${randomColor()}`
    element.setPos = function setPos(x, y) {
      element.style.left = `${x}px`
      element.style.top = `${y}px`
    }
    return element
  }

  App.spawn = function spawn(x, y) {
    var element = App.element()
    element.setPos(x, y)
    document.body.appendChild(element)
  }

  var randomColor = function randomColor() {
    var color = new RColor
    return color.get(true)
  }

  document.body.addEventListener("mousedown", function(event) {
    if (event.target == document.body) {
      App.spawn(event.clientX, event.clientY)
    }
  })

  document.body.addEventListener("touchstart", function(event) {
    if (event.target == document.body) {
      // event.targetTouches.forEach(function(touch) {
      //   App.spawn(touch.clientX, touch.clientY)
      // })
      // ^BROKEN
      // for (var touch of event.targetTouches) {
      //   App.spawn(touch.clientX, touch.clientY)
      // }
      // ^BROKEN
      [].forEach.call(event.targetTouches, function(touch) {
        App.spawn(touch.clientX, touch.clientY)
      })
    }
  })

  return App
})()
