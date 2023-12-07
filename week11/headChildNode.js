const rootNode = document
console.log(rootNode)
console.log(rootNode.nodeName) //#document
console.log(rootNode.nodeType) //9
console.log(rootNode.nodeValue) //null

console.log(document.documentElement) //html element
console.log(document.documentElement.nodeName) //HTML
console.log(document.documentElement.nodeType) //1
console.log(document.documentElement.nodeValue) //null

console.log(document.body) //body element
console.log(document.body.nodeName) //BODY
console.log(document.body.nodeType) //1
console.log(document.body.nodeValue) //null

console.log(document.head) //head elementx
console.log(document.head.nodeName) //HEAD
console.log(document.head.nodeType) //1
console.log(document.head.nodeValue) //null

console.log(document.title) //head element
console.log(document.title.nodeName) //undefined
console.log(document.title.nodeType) //undefined
console.log(document.title.nodeValue) //undefined

// const headElement = document.head
// console.log(headElement)

//Child relationship
//1. childNodes (NodeList data type) = query children with all node types
const headChildren = headElement.childNodes
console.log(headChildren)
console.log('length:', headChildren.length)
headChildren.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})
//2. children (HTMLCollection data type) = query children wiht ELEMENT type only
//convert array-like to array before using foreach function
console.log('length:', headElement.children.length)
Array.from(headElement.children).forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})







