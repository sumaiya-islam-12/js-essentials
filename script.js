function set (){
   let elements =
   document.getElementsByName('cssProperty') ;
  for (let index =0; index< elements.length;index++)
  {
    let cssProperty = elements[index

    ].getAttribute('id');
    let cssValue = elements[index]  .value;
    let div = document.getElementById('modify');
    div.style[cssProperty]=cssValue;
  }
}
document.getElementById('set').addEventListener('click',set);