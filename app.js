var App = (function() {
  var App = {}

  App.element = function element() {
    var element = document.createElement("div")
    element.style.position = "fixed"
    element.style.border = `5px solid ${randomColor()}`
    translate = "translate(-50%, -50%)"
    element.style.transform = translate
    element.style["-webkit-transform"] = translate
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

  // TODO momentum. how is speed determined?
  // TODO pitch is affected by where square hits on wall? should square color change to match place it hit (and walls are colored with a rainbow gradient)?

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
      [].forEach.call(event.targetTouches, function(touch) {
        App.spawn(touch.clientX, touch.clientY)
      })
    }
  })

  return App
})()
