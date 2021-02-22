document.getElementById('click').addEventListener('click', dayAge)

let day = ''
let age = 18

function dayAge () {
  age = document.getElementById('table').value
  day = document.getElementById('table-two').value
  if (age > 18 && day != 'Saturday' && day != 'Sunday') {
    document.getElementById('name').innerHTML = ('Time to work')
  } else if ((day === 'Saturday') || (day === 'Sunday')) {
    document.getElementById('name').innerHTML = ('Weekend!')
  } else {
    document.getElementById('name').innerHTML = ('Time for school')
  }
}
