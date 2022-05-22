
var numberOfButtons = document.querySelectorAll("button").length;
var screenContent = document.querySelector(".screen");
for (var i = 0; i < numberOfButtons; i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
  var buttonInnerHTML = this.textContent;
  switch (buttonInnerHTML) {
    case "AC":  screenContent.innerHTML = ""
      break;
      case "1": screenContent.innerHTML += buttonInnerHTML

        break;
        case "2": screenContent.innerHTML += buttonInnerHTML
          break;
          case "3": screenContent.innerHTML += buttonInnerHTML
            break;
            case "4": screenContent.innerHTML += buttonInnerHTML
              break;
              case "5": screenContent.innerHTML += buttonInnerHTML
                break;
                        case "6": screenContent.innerHTML += buttonInnerHTML
                          break;
                          case "7": screenContent.innerHTML += buttonInnerHTML
                            break;
                            case "8": screenContent.innerHTML += buttonInnerHTML
                              break;
                              case "9": screenContent.innerHTML += buttonInnerHTML
                                break;
                                case "0": screenContent.innerHTML += buttonInnerHTML
                                  break;
                                  case "+": screenContent.innerHTML += buttonInnerHTML
                                    break;
                                    case "-": screenContent.innerHTML += buttonInnerHTML
                                      break;
                                      case "(": screenContent.innerHTML += buttonInnerHTML
                                        break;
                                        case ")": screenContent.innerHTML += buttonInnerHTML
                                          break;
                                          case ".": screenContent.innerHTML += buttonInnerHTML
                                            break;
                                            case "/": screenContent.innerHTML += buttonInnerHTML
                                              break;
                                              case "*": screenContent.innerHTML += buttonInnerHTML
                                                break;
                                              case "=": screenContent.innerHTML = eval(screenContent.innerHTML);
                                                break;
                                                case "Del": shoot();
                                                  break;
                                                // case " ":)
                                                //   break;





  };

});
// screenContent = return screenContent.slice(0,10);
// screenContent = screenContent.innerHTML.slice(0,12);

}
// var colorCodes = (Math.floor((Math.random()*255), (Math.floor(Math.random()*255), Math.floor(Math.random()*255);
// var numbers = 300;
// // var i = 0;
// // while (i <= numbers) {
// //   i += 1;
// for (var i = 0; i < numbers; i++){
// // var colorcode1 = Math.floor(Math.random()*255);
// // var colorcode2 = Math.floor(Math.random()*255);
// // var colorcode3 = Math.floor(Math.random()*255);
// // var colorCodes = "rgb" + "(" + colorcode1 +","+ colorcode2 + "," + colorcode3 +")"
// };
 setInterval(function(){
   var colorcode1 = 255
   var colorcode2 = 229
   var colorcode3 = 157
   var colorcode4 = Math.random()*1;
   var colorCodes = "rgba" + "(" + colorcode1 +","+ colorcode2 + "," + colorcode3 +  "," + colorcode4 + ")"
   document.body.style.backgroundColor = colorCodes }, 1000);

addEventListener("keypress", function() {alert("key was pressed");});// document.querySelector.body.backgroundColor = colorCodes;
function shoot(){
  var first = screenContent.innerHTML.length
  var second = first - 1
var newstuff = screenContent.innerHTML.slice(0,second)
screenContent.innerHTML = newstuff;
};
// SetInterval(function() {
//   screenContent.innerHTML = screenContent.innerHTML.slice(0,10);
// }, 400);
// var InnerHTML = document.querySelector(".clear").innerHTML;
// alert(InnerHTML);
// screenContent = screenContent.slice(0,12);
// screenContent.innerHTML.length
