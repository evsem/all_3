//console.log('Hello JS')

let url_1 = 'https://jsonplaceholder.typicode.com/posts'
let url_2 = 'https://jsonplaceholder.typicode.com/users'

const ob_0 = {
  server: 'soua-ta',
  port: 1200,
  adressServer: {
    country: 'Spain',
    town: 'Madrid',
  },
  code: 429600846,
  dev: 'evsem',
}

const array_All = [76, 34, 0, 1, 771]

let prom_Pr = new Promise((res, rej) => {
  console.log('Start...')
  const a = 13
  let b = 27

  let ob_inProm = {
    name: 'Alex',
    age: 22,
    colorSholders: 'lightblack',
    hasChild: false,
  }
  let array_inProm = [90, 325, 9001, 1, 44]

  setTimeout(() => {
    const fun_inProm_1 = (a = 4) => {
      if (b > array_inProm[3]) {
        console.log(a)
      } else {
        function err_Fun(err) {
          console.error(err)
        }
        err_Fun()
      }
    }
    fun_inProm_1(91)
    res()
  }, 3000)
})
