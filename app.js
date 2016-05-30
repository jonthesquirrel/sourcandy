var App = (function() {
  var App = {}

  App.element = function element() {
    var element = document.createElement("div")
    element.style.border = `5px solid ${randomColor()}`
    return element
  }

  App.spawn = function spawn() {
    var element = App.element()
    document.body.appendChild(element)
  }

  var randomColor = function randomColor() {
    var color = new RColor
    return color.get(true)
  }

  return App
})()
