var App = (function() {
  var App = {}

  App.element = function element() {
    var element = document.createElement("div")
    element.style.position = "fixed"
    element.style.border = `5px solid ${randomColor()}`
    element.setPos = function setPos(x, y) {
      element.style.top = `${x}px`
      element.style.left = `${y}px`
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

  return App
})()
