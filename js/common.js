$('#maincals').on('change input', calcAndShow);
function calcAndShow() {
  var v1 = parseFloat($('#plant1').val());
  var v2 = ($("#crop").val());
  var v3 = parseFloat($("#prochent").val());
 console.log(v1)
 
  var text, text2, summa, text3, straw, straw1, straw2, straws ;
  console.log(1)
  switch(v2) {
    case '1':  // if (x === 'value1')
      text2 = v1 * 890 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straw = v1 * 3680 ;
      straw1 = straw * v3;
      straw2 = straw1/100;
      straws = straw2 + straw;
      break;
  
    case '2':  // if (x === 'value2')
    text2 = v1 * 960 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straw = v1 * 3680 ;
      straw1 = straw * v3;
      straw2 = straw1/100;
      straws = straw2 + straw;
      break;
    case '3':  // if (x === 'value1')
      text2 = v1 * 570 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straw = v1 * 3680 ;
      straw1 = straw * v3;
      straw2 = straw1/100;
      straws = straw2 + straw;
      break;
  
    case '4':  // if (x === 'value2')
    text2 = v1 * 520 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '5':  // if (x === 'value1')
      text2 = v1 * 580 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    case '6':  // if (x === 'value2')
    text2 = v1 * 820 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '7':  // if (x === 'value1')
      text2 = v1 * 920 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    case '8':  // if (x === 'value2')
    text2 = v1 * 450 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '9':  // if (x === 'value1')
      text2 = v1 * 497 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    case '10':  // if (x === 'value2')
    text2 = v1 * 920 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '11':  // if (x === 'value1')
      text2 = v1 * 920 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    case '12':  // if (x === 'value2')
    text2 = v1 * 5570 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '13':  // if (x === 'value1')
      text2 = v1 * 4370 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    case '14':  // if (x === 'value2')
    text2 = v1 * 4130 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '15':  // if (x === 'value1')
      text2 = v1 * 8460 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    case '16':  // if (x === 'value2')
    text2 = v1 * 7177 ;
    text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
    case '17':  // if (x === 'value1')
      text2 = v1 * 11340 ;
      text = text2 * v3
      text3 = text/100
      summa = text3 + text2
      straws = "не дает соломы";
      straw = "не дает соломы";
      break;
  
    
  
    
  }
  if (text2 === text2) {} else {
    return 0;
  }
  console.log(text2)
  
  document.getElementById("tons").innerHTML = text2;
  document.getElementById("hay").innerHTML = summa;
  document.getElementById("bale").innerHTML = straw;
  document.getElementById("bale1").innerHTML = straws;
  
}