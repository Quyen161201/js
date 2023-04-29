// goi ID
var headingNote= document.getElementById('heading');
console.log([headingNote]);
// gọi class
var headingNotes= document.getElementsByClassName('headings');
console.log([headingNotes]);
// tagName
var tagname=document.getElementsByTagName('p');
console.log(tagname);
//css selector
var cssSelect=document.querySelector('.heading3 .heading4:nth-child(2)');
console.log(cssSelect);
var cssSelects=document.querySelectorAll('.heading4')
console.log(cssSelects);
console.log(cssSelects[0]);
//html selector
console.log(document.forms['form-1']);
//gọi element của elemen cha
var box1= document.querySelector('.box1');
console.log(box1);
console.log(box1.querySelector('ul li:nth-child(2)'));

//DOM attribute

var box1s= document.querySelector('.box1 ul');
box1s.className='list__box1';
// set attribute thêm thuộc tính vào elment kể cả những attribute k phải là của elemnet đó
box1s.setAttribute('href','box1name');
//get attribute lấy ra value
console.log(box1s.getAttribute('class'));
Setheading4=document.querySelector('.heading4');
Setheading4.setAttribute('style','color: blue;'); // thay đổi màu của css
// innnerText, textcontent
var textHeading3= document.querySelector('.heading5');
textHeading3.innerText='newHello';
console.log(textHeading3.innerText);
textHeading3.textContent='New_hello';
console.log(textHeading3.textContent);
// khác nhau giữu inner text và text content
// innerText: trả lại những gì mà ta nhìn thấy
//textContent: trả lại tất cả những gì trong textnote
// cả hai k thay đổi element chỉ thay đổi được textnote
// --------------------

//innerHTML, outerHTML: là 2 thuộc tính của elementnote
 var innerhtmls=document.querySelector('.div_inner');
 innerhtmls.innerHTML='<p style="color: red;">InnerHTML</p>';
 console.log(innerhtmls.innerHTML);
 //outer: thay đổi tính từ ngay thẻ gọi
 var outhtmls=document.querySelector('.div_inner');
 innerhtmls.outerHTML='<p style="color: red;">InnerHTML</p>';
 console.log(innerhtmls.outerHTML);

 //node properties
 

