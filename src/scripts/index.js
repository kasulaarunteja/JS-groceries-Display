// The items should be stored in local storage with key :- “items”

async function datafetch() {
  const response = await fetch(
    'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries',
  )
  const res = await response.json()
  //console.log(res.data)
  AppendDate(res)
}

datafetch()

let Cart = JSON.parse(localStorage.getItem('cart')) || []

document.querySelector('#item_count').innerText = Cart.length

function AppendDate(arr) {
  console.log(arr)
  document.querySelector('#items').innerHTML = null
  arr.data.map((el, id) => {
    console.log(arr)
    let div = document.createElement('div')
    div.className = 'item'

    let img = document.createElement('img')
    img.src = el.image

    let h3 = document.createElement('h3')
    h3.innerText = el.name

    let h4 = document.createElement('h4')
    h4.innerText = el.price

    let btn = document.createElement('button')
    btn.addEventListener('click', cartFun)
    btn.className = 'add_to_cart'
    btn.textContent = 'add_to_cart'

    function cartFun() {
      Cart.push(el)
      document.querySelector('#item_count').innerHTML = Cart.length
      localStorage.setItem('cart', JSON.stringify(Cart))
    }

    div.append(img, h3, h4, btn)
    document.querySelector('#items').append(div)
  })
}
