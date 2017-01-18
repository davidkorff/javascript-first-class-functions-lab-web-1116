function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(value){
  return function(score) {
      return (score*value)
    }
}

function multiplier(multiplier, score){
  return score*multiplier
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
