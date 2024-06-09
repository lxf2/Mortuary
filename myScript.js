// JavaScript Document  
  
"use strict";  
  
// 获取页面元素  
var header = document.getElementById('myHeader');  
var footer = document.getElementById('myFooter');  
var nav = document.getElementById('myNav');  
var main = document.querySelector('main'); // 或者使用具体的ID选择器  
  
// 函数用于生成随机颜色（十六进制颜色）  
function getRandomColor() {  
  var letters = '0123456789ABCDEF';  
  var color = '#';  
  for (var i = 0; i < 6; i++) {  
    color += letters[Math.floor(Math.random() * 16)];  
  }  
  return color;  
}  
  
// 辅助函数，用于将十六进制颜色转换为rgba格式，增加透明度  
function hexToRgbA(hex, alpha) {  
  var r = parseInt(hex.slice(1, 3), 16);  
  var g = parseInt(hex.slice(3, 5), 16);  
  var b = parseInt(hex.slice(5, 7), 16);  
  return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';  
}  
  
// 设置页面元素的背景色  
function setElementBackgroundColors() {  
  var headerColor = getRandomColor(); // 生成随机颜色  
    
  // 设置 header 和 footer 的背景色  
  header.style.backgroundColor = headerColor;  
  footer.style.backgroundColor = headerColor; // 使用相同的颜色，或者你也可以为 footer 生成另一个随机颜色  
    
  // 设置 nav 和 main 的背景色，与 header 相同但透明度降低  
  var navMainColor = hexToRgbA(headerColor, 0.5); // 50% 透明度  
  nav.style.backgroundColor = navMainColor;  
  main.style.backgroundColor = navMainColor;  
}  
  
// 当文档加载完成后设置随机颜色  
window.onload = function() {  
  setElementBackgroundColors(); // 调用函数以设置颜色  
    
  // 使用 setTimeout 来为页面元素添加 show 类，实现渐显效果  
  setTimeout(function() {  
    nav.classList.add('show');  
  }, 200);  
    
  setTimeout(function() {  
    main.classList.add('show');  
  }, 800);  
    
  setTimeout(function() {  
    footer.classList.add('show');  
  }, 1200);  
};