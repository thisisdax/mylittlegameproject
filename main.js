var boxUno = [ // 1 === boundary, 2 === character, 3 === door to previous map, 4 === door to next map, 5 === npc
  [1, 1, 1, 1, 1, 1, 12, 19, 19, 19, 19, 14, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 5, 1, 11, 11, 11, 11, 11, 14, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 14, 11, 15, 13, 13, 13, 18, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 14, 11, 14, 0, 0, 0, 0, 7, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 17, 13, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 13, 13, 13, 16, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 11, 11, 11, 14, 0, 1],
  [1, 0, 0, 0, 0, 15, 13, 13, 13, 13, 18, 11, 12, 11, 14, 0, 1],
  [1, 0, 0, 0, 0, 14, 11, 11, 11, 11, 12, 11, 11, 11, 14, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1]
]

var boxDos = [
  [1, 3, 1, 1, 14, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 11],
  [1, 2, 0, 0, 14, 11, 15, 13, 13, 13, 16, 20, 20, 20, 11, 11, 11],
  [1, 0, 0, 0, 17, 13, 18, 0, 0, 0, 17, 13, 16, 21, 21, 21, 20],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 17, 13, 13, 13, 18],
  [1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 15, 13, 16, 0, 0, 0, 15, 13, 16, 0, 0, 0, 1],
  [1, 0, 0, 0, 14, 11, 14, 0, 0, 0, 14, 11, 14, 0, 0, 0, 1],
  [1, 0, 0, 0, 14, 11, 17, 13, 13, 13, 18, 11, 14, 0, 0, 0, 1],
  [1, 1, 1, 1, 14, 11, 11, 11, 11, 11, 11, 11, 14, 1, 1, 4, 1]
]

var boxTres = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 1, 0, 0, 9, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 6, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

// ============Story Variables===========
var boxArray = [boxUno, boxDos, boxTres]
var currentMap = 0
var rowLook = ''
var currentRow = 0
var currentColumn = 0
var direction = 'N'
var gamestate = 'story'
var begin = false
var counter = 0
var conversation = false
var messageboxOne = ['DING DONG BELL: DAX IS MY BESTFRIEND!', 'DING DONG BELL: I CHALLENGE YOU TO A POKEMON BATTLE!', 'DING DONG BELL: URGHHHHHHHHH! NEED! TO! POOP!']
var messageboxTwo = ['SHREK: NO CROSS CROSS!', 'SHREK: ME BEAT YOU!', 'SHREK: YOU MARRY ME!']
var messageboxThree = ['THE WIZARD WITH A BEARD: I AM THE WIZARD WITH A BEARD!', 'THE WIZARD WITH A BEARD: EVERYONE LOVES MY BEARD!', 'THE WIZARD WITH A BEARD: WIN ME AND YOU GET MY BEARD!']
var messageboxFour = ['DAX: I AM THE BOSS OF THIS GAME!', 'DAX: WIN ME AND YOU BEAT THE GAME!', 'DAX: TOO BAD YOU WILL NEVER WIN ME!']
var messageArray = [messageboxOne, messageboxTwo, messageboxThree, messageboxFour]
var npcNumber
var mySound = new Audio('fightbgm.mp3')
// ===========Battle Variables===========
function Player (name) {
  this.points = 0
  this.y = undefined
  this.x = undefined
  this.height = 80
  this.width = 80
  this.name = name
  this.xposition = 0
  this.x2position = 0
  this.xvelocity = 0
  this.x2velocity = 0
  this.xacceleration = 1
  this.x2acceleration = 1
  this.position = 0
  this.velocity = 10
  this.acceleration = -3
  this.checkIfCanDoubleJump = false
  this.checkJumping = false
  this.newPosition = 0
  this.up = undefined
  this.doubleUp = undefined
  this.runningRight = undefined
  this.runningLeft = undefined
  this.awayFromTop = 520
  this.omg = undefined
  this.deceleration = undefined
  var that = this
  this.jump = function () {
    // var that = this
    if (this.checkIfCanDoubleJump === false && this.checkJumping === false) {
      this.checkJumping = true
      this.up = setInterval(function () {
        that.position += that.velocity
        that.velocity += that.acceleration
        if (that.position < 20) {
          that.acceleration = 10
        }
        if (that.position > 20 && that.position < 100) {
          that.acceleration = -2
          that.checkIfCanDoubleJump = true
        }
        if (that.position > 100) {
          that.acceleration = -3
        }
        if (that.position < 0) {
          clearInterval(that.up)
          that.position = 0
          that.velocity = 10
          that.acceleration = -3
          that.checkJumping = false
          that.checkIfCanDoubleJump = false
        }
      }, 1000 / 60)
    }
  }
  this.doubleJump = function () {
    // var that = this
    var counter = 0
    if (this.checkIfCanDoubleJump) {
      clearInterval(this.up)
      this.velocity = 10
      this.acceleration = 1
      this.checkIfCanDoubleJump = false
      this.doubleUp = setInterval(function () {
        that.newPosition += that.velocity
        that.velocity += that.acceleration
        if (that.newPosition < 20 && counter === 0) {
          that.acceleration = 15
          counter++
        }
        if (that.newPosition > 20 && that.newPosition < 100 && counter === 1) {
          that.acceleration = -2
        }
        if (that.newPosition > 100) {
          that.acceleration = -3
          counter++
        }
        if (that.newPosition < 0 - that.position) {
          clearInterval(that.doubleUp)
          that.position = 0
          that.newPosition = 0
          that.velocity = 10
          that.acceleration = 1
          that.checkJumping = false
        }
      }, 1000 / 60)
    }
  }
  this.runRight = function () {
    // var that = this
    clearInterval(this.runningRight)
    clearInterval(this.runningLeft)
    clearInterval(this.deceleration)
    this.x2velocity = 0
    this.runningRight = setInterval(function () {
      if (parseInt($('.' + that.name).css('left')) < 1278) {
        if (that.xvelocity < 20) {
          that.xvelocity += that.xacceleration
        }
        that.xposition += that.xvelocity
      } else {
        clearInterval(that.omg)
        clearInterval(that.runningRight)
        if (that.xvelocity > 0) {
          that.rebound(that.name, 'rightwall')
        }
      }
    }, 1000 / 60)
  }
  this.runLeft = function () {
    // var that = this
    clearInterval(this.runningLeft)
    clearInterval(this.runningRight)
    clearInterval(this.deceleration)
    this.xvelocity = 0
    this.runningLeft = setInterval(function () {
      if (parseInt($('.' + that.name).css('left')) > 0) {
        if (that.x2velocity < 20) {
          that.x2velocity += that.x2acceleration
        }
        that.x2position += that.x2velocity
      } else {
        clearInterval(that.runningLeft)
        clearInterval(that.omg)
        if (that.x2velocity > 0) {
          that.rebound(that.name, 'leftwall')
        }
      }
    }, 1000 / 60)
  }
  this.brake = function () {
    // var that = this
    var hello = setInterval(function () {
      that.xvelocity -= 1
      if (parseInt($('.' + that.name).css('left')) < 1278) {
        that.xposition += that.xvelocity / 2
      } else {
        clearInterval(that.omg)
        that.rebound(that.name, 'rightwall')
        clearInterval(hello)
      }
      if (that.xvelocity <= 0) {
        clearInterval(that.runningRight)
        that.xvelocity = 0
        clearInterval(hello)
      }
    }, 1000 / 60)
    clearInterval(that.runningRight)
  }
  this.secondbrake = function () {
    // var that = this
    var hello = setInterval(function () {
      that.x2velocity -= 1
      if (parseInt($('.' + that.name).css('left')) > 0) {
        that.x2position += that.x2velocity / 2
        console.log('is this looping?');
      } else {
        clearInterval(that.omg)
        that.rebound(that.name, 'leftwall')
        clearInterval(hello)
      }
      if (that.x2velocity <= 0) {
        console.log('this is looping omg...');
        clearInterval(that.runningLeft)
        that.x2velocity = 0
        console.log('inside:',that.deceleration);
        clearInterval(hello)
      }
    }, 1000 / 60)
    console.log('outside:',this.deceleration);
    clearInterval(that.runningLeft)
  }
  this.rebound = function (player, object) {
    // var that = this
    if (player === that.name && object === 'leftwall') {
      this.omg = setInterval(function () {
        if (that.x2velocity >= 0) {
          that.x2position -= that.x2velocity
          that.x2velocity -= 1
          clearInterval(that.runningLeft)
        } else if (that.x2velocity < 0) {
          clearInterval(that.omg)
        }
      }, 1000 / 60)
    }
    if (player === that.name && object === 'rightwall') {
      that.omg = setInterval(function () {
        if (that.xvelocity >= 0) {
          that.xposition -= that.xvelocity
          that.xvelocity -= 1
          clearInterval(that.runningRight)
        } else if (that.xvelocity < 0) {
          clearInterval(that.omg)
        }
      }, 1000 / 60)
    }
  }
}

function Platform (color, name) {
  this.color = color
  this.name = name
  this.y = undefined
  this.x = undefined
  this.height = undefined
  this.width = undefined
  this.randomizeX = 660
  this.randomizeY = 250
  this.randomizeValueOne = 500
  this.randomizeValueTwo = 30
  this.value = 0
}

var playerOne = new Player('playerOne')
var playerTwo = new Player('playerTwo')
var platform = [new Platform('yellow','platform0'), new Platform('blue', 'platform1'), new Platform('red', 'platform2')]
// this is not referring to the object in some functions
// probably should try renaming all 'this' to objectName

function drawBox () {
  // console.clear();
  for (var row = 0; row < boxArray[currentMap].length; row++) {
    for (var column = 0; column < boxArray[currentMap][row].length; column++) {
      rowLook += boxArray[currentMap][row][column]
      if (column === boxArray[currentMap][row].length - 1) {
        console.log(rowLook)
        rowLook = ''
      }
    }
  }
}

function findPosition () { // find position using the dom
  currentRow = $('.row').find('._2').parent().index()
  currentColumn = $('.row.' + currentRow).find('._2').index()
}

function rePosition () { // only executed when map level change, else dom isn't updated to box array. gives position to dom
  for (var row = 0; row < boxArray[currentMap].length; row++) {
    for (var column = 0; column < boxArray[currentMap][row].length; column++) {
      if (boxArray[currentMap][row][column] === 2) {
        currentRow = row
        currentColumn = column
      }
    }
  }
}

function popDOM () {
  for (var i = 0; i < boxTres.length; i++) {
    var newArray = $.makeArray($('.row.' + i).children()) // returns an array-like object and forces into it into an array.
    newArray.forEach(function (value1, index1) {
      boxArray[currentMap][i].forEach(function (value2, index2) {
        if (index1 === index2) { // without this if-statement, it would just pass every boxTres value, into every grid.
          $(value1).removeClass() // refreshing the page.
          $(value1).addClass('_' + value2.toString() + ' column' + index2) // added '_' so that it works with css grammar.
        }
      })
    })
  }
}

function battleInit (npcNumber) {
  window.cancelAnimationFrame(render)
  $('.sandbox').remove()
  $('body').append('<div class="sandbox"></div>')
  $('.sandbox').append('<div class="healthbox"><div class="playerHealthOneBar">Player One<div class="playerHealthOne"></div</div>')
  $('.healthbox').append('<div class="playerHealthTwoBar">Player Two<div class="playerHealthTwo"></div></div>')
  $('.healthbox').append('<div class="timer">100</div>')
  $('.sandbox').append('<div class="battlebox"></div>')
  $('.battlebox').css('background-color', 'white')
  $('.battlebox').append('<div class="playerOne"></div>')
  $('.battlebox').append('<div class="playerTwo"></div>')
  if (npcNumber === 0) {
    $('.playerTwo').css('background', 'url(img/character_copy.png) -84px -324px')
    $('.battlebox').css('background-image', 'url(img/gkKviRB.gif)')
  }
  if (npcNumber === 1) {
    $('.playerTwo').css('background', 'url(img/character_copy.png) -567px -646px')
    $('.battlebox').css('background-image', 'url(img/OACf5cL.gif)')
  }
  if (npcNumber === 2) {
    $('.playerTwo').css('background', 'url(img/character_copy.png) -809px -970px')
    $('.battlebox').css('background-image', 'url(img/MHWLac7.gif)')
  }
  $('.battlebox').append('<div class="platform1"></div>')
  $('.battlebox').append('<div class="platform2"></div>')
  $('.battlebox').append('<div class="platform0"></div>')
  $('.sandbox').css('background-color', 'black')
  $('.sandbox').append('<div class="whoWin"></div>')
  gamestate = 'battle'
  clearInterval(startTimerIntervalTimer)
  // startTimer()
  begin = false
  mySound.play()
  render()
}

function storyInit () {
  window.cancelAnimationFrame(render)
  $('.sandbox').remove()
  $('body').append('<div class="sandbox"></div>')
  for (var i = 0; i < 10; i++) {
    $('.sandbox').append('<div class="row ' + i + '"></div>')
    for (var j = 0; j < 17; j++) {
      $('.' + i).append('<div></div>')
    }
  }
  $('.sandbox').append('<div class="messagebox"></div>')
  gamestate = 'story'
  popDOM()
  rePosition()
  findPosition()
}

function gameInit () {
  drawBox()
  storyInit()
  popDOM()
  findPosition()
}

function loadMapChange () {
  rePosition()
  storyInit()
  drawBox()
}

function moveUp () {
  if (boxArray[currentMap][currentRow - 1][currentColumn] === 3) {
    currentMap--
    loadMapChange()
    return
  } else if (boxArray[currentMap][currentRow - 1][currentColumn] === 4) {
    currentMap++
    loadMapChange()
    return
  }
  if (boxArray[currentMap][currentRow - 1][currentColumn] === 0) {
    boxArray[currentMap][currentRow][currentColumn] = 0
    currentRow -= 1
    boxArray[currentMap][currentRow][currentColumn] = 2
    $('.row.' + (currentRow + 1)).children().eq(currentColumn).removeClass().addClass('_0 column' + currentColumn)
    $('.row.' + currentRow).children().eq(currentColumn).removeClass().addClass('_2 column' + (currentColumn))
  }
  direction = 'N'
}

function moveLeft () {
  if (boxArray[currentMap][currentRow][currentColumn - 1] === 3) {
    currentMap--
    loadMapChange()
    return
  } else if (boxArray[currentMap][currentRow][currentColumn - 1] === 4) {
    currentMap++
    loadMapChange()
    return
  }
  if (boxArray[currentMap][currentRow][currentColumn - 1] === 0) {
    boxArray[currentMap][currentRow][currentColumn] = 0
    currentColumn -= 1
    boxArray[currentMap][currentRow][currentColumn] = 2
    $('.row.' + currentRow).children().eq(currentColumn + 1).removeClass().addClass('_0 column' + (currentColumn + 1))
    $('.row.' + currentRow).children().eq(currentColumn).removeClass().addClass('_2 column' + (currentColumn))
  }
  direction = 'W'
}

function moveRight () {
  if (boxArray[currentMap][currentRow][currentColumn + 1] === 3) {
    currentMap--
    loadMapChange()
    return
  } else if (boxArray[currentMap][currentRow][currentColumn + 1] === 4) {
    currentMap++
    loadMapChange()
    return
  }
  if (boxArray[currentMap][currentRow][currentColumn + 1] === 0) {
    boxArray[currentMap][currentRow][currentColumn] = 0
    currentColumn += 1
    boxArray[currentMap][currentRow][currentColumn] = 2
    $('.row.' + currentRow).children().eq(currentColumn - 1).removeClass().addClass('_0 column' + (currentColumn - 1))
    $('.row.' + currentRow).children().eq(currentColumn).removeClass().addClass('_2 column' + (currentColumn))
  }
  direction = 'E'
}

function moveDown () {
  if (boxArray[currentMap][currentRow + 1][currentColumn] === 3) {
    currentMap--
    loadMapChange()
    return
  } else if (boxArray[currentMap][currentRow + 1][currentColumn] === 4) {
    currentMap++
    loadMapChange()
    return
  }
  if (boxArray[currentMap][currentRow + 1][currentColumn] === 0) {
    boxArray[currentMap][currentRow][currentColumn] = 0
    currentRow += 1
    boxArray[currentMap][currentRow][currentColumn] = 2
    $('.row.' + (currentRow - 1)).children().eq(currentColumn).removeClass().addClass('_0 column' + currentColumn)
    $('.row.' + currentRow).children().eq(currentColumn).removeClass().addClass('_2 column' + (currentColumn))
  }
  direction = 'S'
}

document.onkeydown = function (e) {
  e = e || window.event
  switch (e.which || e.keyCode) {
    case 37: // left
      if (gamestate === 'story' && conversation === false) {
        $('._2').css('background', '')
        moveLeft()
        drawBox()
        $('._2').css('background', 'url(img/character_copy.png) -80px -81px')
      } else if (gamestate === 'battle' && conversation === false) {
        playerOne.runLeft()
      }
      break

    case 38: // up
      if (gamestate === 'story' && conversation === false) {
        $('._2').css('background', '')
        moveUp()
        drawBox()
        $('._2').css('background', 'url(img/character_copy.png) -84px -244px')
      } else if (gamestate === 'battle' && conversation === false) {
        playerOne.jump()
        playerOne.doubleJump()
      }
      break

    case 39: // right
      if (gamestate === 'story' && conversation === false) {
        $('._2').css('background', '')
        moveRight()
        drawBox()
        $('._2').css('background', 'url(img/character_copy.png) -84px -161px')
      } else if (gamestate === 'battle' && conversation === false) {
        playerOne.runRight()
      }
      break

    case 40: // down
      if (gamestate === 'story' && conversation === false) {
        $('._2').css('background', '')
        moveDown()
        drawBox()
        $('._2').css('background', 'url(img/character_copy.png) -82px 0px')
      } else if (gamestate === 'battle' && conversation === false) {

      }
      break

    case 65: // a
      if (gamestate === 'battle' && conversation === false) {
        playerTwo.runLeft()
      }
      break

    case 68: // d
      if (gamestate === 'battle' && conversation === false) {
        playerTwo.runRight()
      }
      break

    case 87: // w
      if (gamestate === 'battle' && conversation === false) {
        playerTwo.jump()
        playerTwo.doubleJump()
      }
      break

    case 83: // s
      if (gamestate === 'battle' && conversation === false) {

      }
      break

    case 32: // space
      if (gamestate === 'story' && conversation === false) {
        counter = 0
        npc(6)
        npc(7)
        npc(8)
        npc(9)
      } else if (conversation === true) {
        if (counter < messageArray[npcNumber].length) {
          $('.messagebox').css('visibility', 'visible').text(messageArray[npcNumber][counter])
          counter++
          console.log('this is running');
        } else if (counter = messageArray[npcNumber].length) {
          conversation = false
          $('.messagebox').css('visibility', 'hidden').text('')
          conversation = false
          if (npcNumber !== 3) {
            battleInit(npcNumber);
          }
        }
      }
      break

    default: return // exit this handler for other keys
  }
  e.preventDefault() // prevent the default action (scroll / move caret)
}

$(document).keyup(function (e) {
  if (e.which === 39) {
    if (gamestate === 'battle') {
      playerOne.brake()
    }
  }
  if (e.which === 37) {
    if (gamestate === 'battle') {
      playerOne.secondbrake()
    }
  }
  if (e.which === 68) {
    if (gamestate === 'battle') {
      playerTwo.brake()
    }
  }
  if (e.which === 65) {
    if (gamestate === 'battle') {
      playerTwo.secondbrake()
    }
  }
})

function checkDirection (a, direction) {
  if (direction === 'S') {
    if (a === 6) {
      $('._'+a).css('background', 'url(img/character_copy.png) -84px -566px')
    }
    if (a === 7) {
      $('._'+a).css('background', 'url(img/character_copy.png) -567px -890px')
    }
    if (a === 8) {
      $('._'+a).css('background', 'url(img/character_copy.png) -809px -1210px')
    }
    if (a === 9) {
      $('._'+a).css('background', 'url(img/character_copy.png) -325px -1210px')
    }
  }
  if (direction === 'E') {
    if (a === 6) {
      $('._'+a).css('background', 'url(img/character_copy.png) -84px -406px')
    }
    if (a === 7) {
      $('._'+a).css('background', 'url(img/character_copy.png) -567px -726px')
    }
    if (a === 8) {
      $('._'+a).css('background', 'url(img/character_copy.png) -809px -1050px')
    }
    if (a === 9) {
      $('._'+a).css('background', 'url(img/character_copy.png) -325px -1050px')
    }
  }
  if (direction === 'N') {
    if (a === 6) {
      $('._'+a).css('background', 'url(img/character_copy.png) -84px -326px')
    }
    if (a === 7) {
      $('._'+a).css('background', 'url(img/character_copy.png) -567px -646px')
    }
    if (a === 8) {
      $('._'+a).css('background', 'url(img/character_copy.png) -809px -970px')
    }
    if (a === 9) {
      $('._'+a).css('background', 'url(img/character_copy.png) -325px -970px')
    }
  }
  if (direction === 'W') {
    if (a === 6) {
      $('._'+a).css('background', 'url(img/character_copy.png) -84px -486px')
    }
    if (a === 7) {
      $('._'+a).css('background', 'url(img/character_copy.png) -567px -807px')
    }
    if (a === 8) {
      $('._'+a).css('background', 'url(img/character_copy.png) -804px -1130px')
    }
    if (a === 9) {
      $('._'+a).css('background', 'url(img/character_copy.png) -325px -1130px')
    }
  }
}

function npc (a) {
  if (direction === 'S' && $('.row.' + (currentRow + 1)).find($('._'+a)).index() === $('.row.' + currentRow).find($('.column' + currentColumn)).index()) {
    checkDirection(a, direction)
    $('.messagebox').css('visibility', 'visible').text('YOU: ...')
    npcNumber = a - 6
    conversation = true
  } else if (direction === 'N' && $('.row.' + (currentRow - 1)).find($('._'+a)).index() === $('.row.' + currentRow).find($('.column' + currentColumn)).index()) {
    checkDirection(a, direction)
    $('.messagebox').css('visibility', 'visible').text('YOU: ...')
    npcNumber = a - 6
    conversation = true
  } else if (direction === 'W' && $('.row.' + currentRow).find($('._'+a)).index() === $('.row.' + currentRow).find($('.column' + (currentColumn - 1))).index()) {
    checkDirection(a, direction)
    $('.messagebox').css('visibility', 'visible').text('YOU: ...')
    npcNumber = a - 6
    conversation = true
  } else if (direction === 'E' && $('.row.' + currentRow).find($('._'+a)).index() === $('.row.' + currentRow).find($('.column' + (currentColumn + 1))).index()) {
    checkDirection(a, direction)
    $('.messagebox').css('visibility', 'visible').text('YOU: ...')
    npcNumber = a - 6
    conversation = true
  }
}
gameInit()
$(document).keydown(function (e) {
  console.log(e.which + ' pressed')
})

// =========Battle Mode=========
function isCollide (a, b) {
  a.y = $('.' + a.name).offset().top
  a.x = $('.' + a.name).offset().left
  b.y = $('.'+b.name).offset().top
  b.x = $('.'+b.name).offset().left
  b.height = 10
  b.width = 10
  // if statement to check which ball collided and then regenerate
  return !(
    ((a.y + a.height) < (b.y)) ||
    (a.y > (b.y + b.height)) ||
    ((a.x + a.width) < b.x) ||
    (a.x > (b.x + b.width))
  )
}

function checkWin () {
  if (parseInt($('.playerHealthOne').css('width')) <= 5) { // put this in a function
    clearInterval(startTimerIntervalTimer)
    $('.whoWin').text('Player 2 wins!')
    $('.whoWin').fadeIn()
    setTimeout(function () {
      storyInit()
      mySound.pause()
      mySound.currentTime = 0
      conversation = false
      $('.whoWin').hide()
      $('.whoWin').text('')
    }, 3000)
    console.log('game over, player 2 win')
  }
  if (parseInt($('.playerHealthTwo').css('width')) <= 5) { // put this in a function
    clearInterval(startTimerIntervalTimer)
    $('.whoWin').text('Player 1 wins!')
    $('.whoWin').fadeIn()
    setTimeout(function () {
      storyInit()
      mySound.pause()
      mySound.currentTime = 0
      conversation = false
      $('.whoWin').hide()
      $('.whoWin').text('Player 1 ')
    }, 3000)
    console.log('game over, player 1 win')
  }
  if (timer === 0) {
    console.log('times up, check who win');
    if (parseInt($('.playerHealthTwo').css('width')) < parseInt($('.playerHealthOne').css('width'))) {
      console.log('Player 1 Win!');
      setTimeout(function () {
        storyInit()
        mySound.pause()
        mySound.currentTime = 0
        conversation = false
        $('.whoWin').css({visibility: hidden})
      }, 3000)
      $('.whoWin').css({visibility: visible})
      $('.whoWin').text('Player 1 wins!')
    } else if (parseInt($('.playerHealthOne').css('width')) < parseInt($('.playerHealthTwo').css('width'))) {
      console.log('Player 2 Win!');
      setTimeout(function () {
        storyInit()
        mySound.pause()
        mySound.currentTime = 0
        conversation = false
        $('.whoWin').css({visibility: hidden})
      }, 3000)
      $('.whoWin').css({visibility: visible})
      $('.whoWin').text('Player 2 wins!')
      console.log('game over, player 2 win')
    }
  }
}
var startTimerIntervalTimer
var timer = 100
function startTimer () {
  timer = 100
  startTimerIntervalTimer = setInterval(function () {
    if (timer !== 0) {
      timer--
      console.log('how many times?');
      $('.timer').text('' + timer)
    } else if (timer === 0) {
      checkWin()
      begin = false
      clearInterval(startTimerIntervalTimer)
    }
  }, 1000)
}

function minusHp (playerOne, playerTwo) {
  for (var i = 0; i < platform.length; i++) {
    if (isCollide(playerOne, platform[i])) { // put this in a function
      counter = 0
      clearInterval(startTimerInterval)
      if (i === 1) {
        $('.playerHealthTwo').removeClass('red')
        var startTimerInterval = setInterval(function () {
            if ($('.playerHealthTwo').hasClass('red')) {
              $('.playerHealthTwo').removeClass('red')
              counter++
            } else {
              $('.playerHealthTwo').addClass('red')
            }
            if (counter > 3) {
              clearInterval(startTimerInterval)
              $('.playerHealthTwo').removeClass('red')
            }
        },200)
      } else if (i === 2) {
        $('.playerHealthOne').removeClass('red')
        var startTimerInterval = setInterval(function () {
            if ($('.playerHealthOne').hasClass('red')) {
              $('.playerHealthOne').removeClass('red')
              counter++
            } else {
              $('.playerHealthOne').addClass('red')
            }
            if (counter > 3) {
              clearInterval(startTimerInterval)
              $('.playerHealthOne').removeClass('red')
            }
        },200)
      }
      if (i === 0) {
        $('.playerHealthOne').css({width: '+=' + platform[i].value + '%'})
        if (parseInt($('.playerHealthOne').css('width')) > 680) {
          $('.playerHealthOne').css({width: 680})
        }
      }
      if (i === 1) {
        $('.playerHealthTwo').css({width: '-=' + platform[i].value + '%'})
      }
      if (i === 2) {
        $('.playerHealthOne').css({width: '-=' + platform[i].value + '%'})
      }
    }
    if (isCollide(playerTwo, platform[i])) { // put this in a function
      counter = 0
      clearInterval(startTimerInterval)
      if (i === 1) {
        $('.playerHealthOne').removeClass('red')
        var startTimerInterval = setInterval(function () {
            if ($('.playerHealthOne').hasClass('red')) {
              $('.playerHealthOne').removeClass('red')
              counter++
            } else {
              $('.playerHealthOne').addClass('red')
            }
            if (counter > 3) {
              clearInterval(startTimerInterval)
              $('.playerHealthOne').removeClass('red')
            }
        },200)
      } else if (i === 2) {
        $('.playerHealthTwo').removeClass('red')
        var startTimerInterval = setInterval(function () {
            if ($('.playerHealthTwo').hasClass('red')) {
              $('.playerHealthTwo').removeClass('red')
              counter++
            } else {
              $('.playerHealthTwo').addClass('red')
            }
            if (counter > 3) {
              clearInterval(startTimerInterval)
              $('.playerHealthTwo').removeClass('red')
            }
        },200)
      }
      if (i === 0) {
        $('.playerHealthTwo').css({width: '+=' + platform[i].value + '%'})
        if (parseInt($('.playerHealthTwo').css('width')) > 680) {
          $('.playerHealthTwo').css({width: 680})
        }
      }
      if (i === 1) {
        $('.playerHealthOne').css({width: '-=' + platform[i].value + '%'})
      }
      if (i === 2) {
        $('.playerHealthTwo').css({width: '-=' + platform[i].value + '%'})
      }
    }
  }
}

function render (a) {
  for (var i = 0; i < platform.length; i++) {
    if (isCollide(playerOne, platform[i]) || isCollide(playerTwo, platform[i])) {
      if (begin === false) {
        startTimer()
        console.log('is this logging? starttimer');
        begin = true
      }
      minusHp(playerOne, playerTwo)
      checkWin()
      platform[i].randomizeY = Math.floor(Math.random() * 310) + 240
      platform[i].randomizeX = Math.floor(Math.random() * 1320)
      platform[i].randomizeValueOne = Math.floor(Math.random() * 1000) + 500
      platform[i].randomizeValueTwo = Math.floor(Math.random() * 200) + 400
      platform[i].value = Math.floor(Math.random() * 10) + 10 //change this number for testing
      if (i === 0) {
        $('.platform0').css({top: platform[0].y, left: platform[0].x})
        $('.platform0').css("background-color", "yellow")
      }

      if (i === 1) {
        $('.platform1').css({top: platform[1].y, left: platform[1].x})
        $('.platform1').css("background-color", "blue")
      }

      if (i === 2) {
        $('.platform2').css({top: platform[2].y, left: platform[2].x})
        $('.platform2').css("background-color", "red")
      }
    }
  }
  $('.playerOne').css({top: playerOne.awayFromTop - (playerOne.position + playerOne.newPosition)})
  $('.playerTwo').css({top: playerTwo.awayFromTop - (playerTwo.position + playerTwo.newPosition)})
  $('.playerOne').css({left: playerOne.xposition - playerOne.x2position})
  $('.playerTwo').css({left: playerTwo.xposition - playerTwo.x2position})
  if (platform[0].x < 30 || platform[0].x > 1390 || platform[0].y < 0 || platform[0].y > 800) {
    $('.platform0').css('visibility', 'hidden')
  } else {
    $('.platform0').css('visibility', 'visible')
  }
  if (platform[1].x < 30 || platform[1].x > 1390 || platform[1].y < 0 || platform[1].y > 800) {
    $('.platform1').css('visibility', 'hidden')
  } else {
    $('.platform1').css('visibility', 'visible')
  }
  if (platform[2].x < 30 || platform[2].x > 1390 || platform[2].y < 0 || platform[2].y > 800) {
    $('.platform2').css('visibility', 'hidden')
  } else {
    $('.platform2').css('visibility', 'visible')
  }
  console.log(platform[0].y);
  platform[0].x = (platform[0].randomizeX + Math.cos(a / platform[0].randomizeValueOne) * platform[0].randomizeValueTwo) + 'px'
  platform[0].y = (platform[0].randomizeY + Math.sin(a / (platform[0].randomizeValueOne / 2)) * (platform[0].randomizeValueTwo / 2)) + 'px'
  platform[1].x = (platform[1].randomizeX + Math.cos(a / platform[1].randomizeValueOne) * platform[1].randomizeValueTwo) + 'px'
  platform[1].y = (platform[1].randomizeY + Math.sin(a / (platform[1].randomizeValueOne / 2)) * (platform[1].randomizeValueTwo / 2)) + 'px'
  platform[2].x = (platform[2].randomizeX + Math.cos(a / platform[2].randomizeValueOne) * platform[2].randomizeValueTwo) + 'px'
  platform[2].y = (platform[2].randomizeY + Math.sin(a / (platform[2].randomizeValueOne / 2)) * (platform[2].randomizeValueTwo / 2)) + 'px'
  $('.platform0').css({top: platform[0].y, left: platform[0].x})
  $('.platform0').css("background-color", "yellow")
  $('.platform1').css({top: platform[1].y, left: platform[1].x})
  $('.platform1').css("background-color", "blue")
  $('.platform2').css({top: platform[2].y, left: platform[2].x})
  $('.platform2').css("background-color", "red")
  window.requestAnimationFrame(render)
}
