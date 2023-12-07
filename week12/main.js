// ----------------- querySelector ---------------------
// select a node with its ID
// const ulStudents1 = document.getElementById('students')
// console.log(ulStudents1)
// // select the first node with CSS selector
// const ulStudents2 = document.querySelector('#students')
// console.log(ulStudents2)

// const programmingLect = document.querySelector('.programming') // class selector
// console.log(programmingLect)

// const ulStudents3 = document.querySelector('ul[id="students"]') // tag with attribute selector
// console.log(ulStudents3)

// const ulEle = document.querySelector('ul') // tag name
// console.log(ulEle)

// const divUl = document.querySelector('div>ul')
// console.log(divUl)


// ---------------- querySelectorAll ------------------
// select a collection of specified condition

// const programmingLect = document.getElementsByClassName('programming')
// // return HTMLCollection data type - array-like ( can use index or lenght, cannot use array function (filter, map, ...))
// console.log(programmingLect)
// console.log(programmingLect.length)

// const ulTagname = document.getElementsByTagName('ul')
// console.log(ulTagname)
// console.log(ulTagname.length)

// const courseEle = document.querySelectorAll('.courses')
// console.log(courseEle)
// // NodeList data type - array-like (can use index or lenght) but NodeList implements only forEach but cannot use other array function

// const divEle = document.getElementById('bscit-courses')
// const courseUnderDiv = divEle.querySelectorAll('.courses')
// console.log(courseUnderDiv)

// const courseUnderDoc = document.querySelectorAll('.courses')
// console.log(courseUnderDoc)


// ---------------- correctQuerySelector ------------------
// //correct, give one string selector
// const firstNode1 = document.querySelector('#int101, .courses, #p-01')
// console.log(firstNode1)
// //incorrect, give more than one string selector
// const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
// console.log(firstNode2)


// ---------------- attributes ------------------
// const programmingLect = document.querySelectorAll('.programming')
// // NodeList, implement only forEach
// console.log(programmingLect)
// programmingLect.forEach((pl) => {
//     console.log(pl)
//     console.log(pl.nodeName)
//     console.log(pl.nodeType)
//     console.log(pl.nodeValue)
//     console.log(pl.attributes) // get all attibutes of element //NameNodeMap
//     Array.from(pl.attributes).forEach((attr) => console.log(attr))
// })

// const pEle = document.getElementById('p-01')
// const pEleAttributes = pEle.attributes
// console.log(pEleAttributes)
// console.log(pEleAttributes.length)
// Array.from(pEleAttributes).forEach((attr) => {
//     console.log(attr.name)
//     console.log(attr.value)
// })
// console.log(pEle.getAttribute('id'))


// const ulEle = document.getElementsByTagName('ul')
// // return HTMLCollection - array-like, not implement forEach

// const ulEleArray = Array.from(ulEle)
// ulEleArray.forEach((ul) => console.log(ul))

// const divEle = document.getElementById('exampleElement')
// console.log(divEle.textContent)
// console.log(divEle.innerText)
// console.log(divEle.innerHTML)


// ---------------- CreateNewElement ------------------
// // CRUD on any element node
// // 1. create element, <li></li>
// const newLiEle = document.createElement('li')
// // 2. create atrribute <li class="devops" name= "devopsLect"
// newLiEle.setAttribute('class', 'devops')
// newLiEle.setAttribute('name', 'devopsLect')

// // 3. add text value to element,
// // <li class="devops name=devopsLect">Siam Yamsangsung</li>
// newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</ span>'

// // 4. add new li element to a parent node
// const divParent = document.querySelector('div.lecturers>ul')
// console.log(divParent)
// // divParent.appendChild(newLiEle)

// const liEle = document.querySelectorAll('div.lecturers>ul>li')
// console.log(liEle)
// const refNode = liEle[1]
// console.log(refNode)

// // divParent.insertBefore(newLiEle, refNode)
// // divParent.replaceChild(newLiEle, refNode)

// divParent.removeChild(refNode)


// ---------------- CreateNewElement ------------------
// window.alert, window.prompt, window.comfirm
window.alert('Do you want to exit?')

const userName = window.prompt('Please enter your name', 'ex., Somchai Jaidee')
console.log(userName) // return user input, ok=user input, cancel=null

const isExit = window.confirm(`GoodBye, ${userName}`)
console.log(isExit) // return boolean, ok=true, cancel=false
































