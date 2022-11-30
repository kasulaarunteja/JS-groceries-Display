let cartcheck = JSON.parse(localStorage.getItem('cart')) || []
displayproduct(cartcheck)
function displayproduct(cartcheck) {
  let totalpr = 0

  document.querySelector('#cart').innerHTML = null
  cartcheck.map((el, id) => {
    let div = document.createElement('div')

    let img = document.createElement('img')
    img.src = el.image

    let h3 = document.createElement('h3')
    h3.innerText = el.name

    let h4 = document.createElement('h4')
    h4.innerText = el.price

    totalpr += el.price

    let btn = document.createElement('button')
    btn.className = 'remove'
    btn.textContent = 'remove'
    btn.addEventListener('click', function () {
      DeleteItem(id)
    })
    div.append(img, h3, h4, btn)
    document.querySelector('#cart').append(div)
  })
  document.getElementById('cart_total').innerText = totalpr

  function DeleteItem(id) {
    cartcheck.splice(id, 1)
    localStorage.setItem('cart', JSON.stringify(cartcheck))
    displayproduct(cartcheck)
  }
}
