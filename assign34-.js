// section A selecting elements (1-10)
// 1) question one 
// let x=document.getElementById("mainTitle");
// x.textContent="welcome to the DOM laboratory";

// // 2) question two
let change_color=document.getElementsByClassName("info");
for (let x=0;x<change_color.length;x++){
    change_color[x].style.color="red"
}

// // 3) question three 
let section11=document.getElementById("section1")
let tag=section1.getElementsByTagName("p");
for (let i=0;i<tag.length;i++){
    tag[i].style.background="lightblue";
}

// // 4) question four
let query=document.querySelector("#section1 p");
query.style.fontWeight="bold";

// // 5) question five 
let querySelectorAll=document.querySelectorAll("#myList li");
for (let i=0;i<querySelectorAll.length;i++){
    querySelectorAll[i].style.border="1px solid black"
}

// // 6) question six
let link=document.querySelector("#myLink");
link.textContent="Visit Google";
console.log(link)

// // 7) question seven 
let card=document.querySelector("#section4.card");
card.style.background="orange";

// // 8) question eight 1
let info=document.querySelectorAll(".info");
info[1].style.fontSize="20px";

// // 9) question nine  2
let divs=document.getElementsByTagName("div");
for (let i=0;i<divs.length;i++){
    divs[i].classList.add("highlight")
} 

// // 10) question ten
let h2_change=document.querySelector("#output h2");
h2_change.textContent="DOM output Area";

// // section B 
// // 11) question eleven
let p1=document.querySelector("#p1");
p1.textContent="this text was updated using textContent()";

// // 12) question twelve
let inner_html=document.querySelector("#section2");
inner_html.innerHTML="<a href='#'> new dynamic link </a>";

// // 13) question thirdteenc 3
let mylink=document.querySelector("#myLink");
let get_attribute=mylink.getAttribute('href');
console.log(get_attribute)

// // 14) question fourteen 4
let mylink11=document.querySelector("#myLink");
mylink11.setAttribute("href","https://example.com")

// // 15) question fifteen
let section1=document.getElementById("section1");
let section3=document.getElementById("section3");
section1.style.background="green";
section3.style.color="blue";

// // 16) question sixteen  5
let highlight=document.getElementById("section1");
highlight.classList.add("highlight");

// // 17) question seventeen 6
let highlight_1=document.getElementById("section1");
highlight_1.classList.remove("highlight")

// // section C creating and inserting element 
// // 18) question eighteen 7
let createElement=document.createElement("p");
createElement.textContent="New paragraph created";
let add_output=document.getElementById("output");
add_output.appendChild(createElement)

// // 19) question ninteen
let creat_list=document.createElement("li");
creat_list.textContent="item D";
let list=document.getElementById("myList");
list.append(creat_list)

// // 20) question twenty 8
let div=document.createElement("div");
div.className="card";
div.textContent="Dynamically Added Box";
document.body.appendChild(div)

// // 21) question twenty one  9
let get_items=document.getElementById("myList");
let second_item=get_items.children[1]
let create_item=document.createElement("li");
create_item.textContent="item X";
get_items.insertBefore(create_item,second_item)

// // 22) question twenty two 
let section1=document.getElementById("section1");
let first_paragraph=section1.children[1];
let new_p=document.createElement("p");
new_p.textContent="new paragraph";
section1.insertBefore(new_p,first_paragraph)

// // 23) question twenty three 9
let create_button=document.createElement("button");
create_button.textContent="Alert";
create_button.onclick=function(){alert("Hello!")};
let section44=document.getElementById("section4");
section44.appendChild(create_button)

// // 24) question twenty four  10
let ouput=document.getElementById("output");
ouput.innerHTML+="<h2>Exatra Output</h2>";

// // 25) question twenty five 11
let p1=document.getElementById("p1");
let clone=p1.cloneNode(true);
document.getElementById("section3").appendChild(clone)

// // section D Removing and replacing element 
// // 26) question twenty six 12
let mylist12=document.getElementById("myList")
let item=mylist12.children[0];
mylist12.removeChild(item)

// // 27) question twenty seven 13
let section45=document.getElementById("section4");
section45.remove()

// // 28) question twenty eight  14
let mylist=document.getElementById("myList");
let last_list=mylist.children[2];
mylist.removeChild(last_list)

// // 29) question twenty nine 15
let section4=document.getElementById("section4");
let p=section4.children[2];
p.remove();

// // 30) question thirty 16
let items=document.getElementById("myList");
let itemB=items.children[1];
let new_item=document.createElement("li");
new_item.textContent="Replaced item";
items.replaceChild(new_item,itemB);

// // 31) question thirty one  17
// let first_head=document.getElementById("mainTitle");
// let new_head=document.createElement("h1");
// new_head.textContent="DOM Master in Progress";
// first_head.replaceWith(new_head)

// // 32) question thirty two 
let info=document.getElementsByClassName("info");
for(let i=1;i>=0;i--){
    let new_paragraph=document.createElement("p");
    new_paragraph.innerHTML="<p>Replaced Info Paragraph</p>";
    info[i].parentNode.replaceChild(new_paragraph,info[i])
}

// // 33) question thirty three 18
let a=document.getElementById("myLink");
let button=document.createElement("button");
button.textContent="click here";
a.replaceWith(button)

// // 34) question thirty four 
let output=document.getElementById("output");
let h2=output.children[0];
let new_h2=document.createElement("h2");
new_h2.textContent="this is last question";
output.replaceChild(new_h2,h2)