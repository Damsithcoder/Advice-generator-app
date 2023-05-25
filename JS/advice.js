
const advice  = document.querySelector('.advice')
const adviceId = document.querySelector(' span')
const btn  = document.querySelector('.btn')
var devide = document.querySelector('.devide_img img')


var element ;
var adviceArr = []
const httpreq = new XMLHttpRequest()
httpreq.open('GET','https://type.fit/api/quotes',true)
httpreq.onreadystatechange = ()=>{
  const responseArr = JSON.parse(httpreq.responseText)
  for (let index = 0; index < responseArr.length; index++) {
    element = responseArr[index];
    adviceArr.push(element.text)
  }
  const randomQuote = ()=>{
    advice.innerHTML = '"' +adviceArr[Math.floor(Math.random()* adviceArr.length)]+ '"' ;
    adviceId.innerHTML =  [Math.floor(Math.random()* adviceArr.length)]
  }
  btn.addEventListener('click',randomQuote)
  

}
httpreq.send()
