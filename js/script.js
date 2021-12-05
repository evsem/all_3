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
    res(array_inProm)
  }, 3000)
})
  .then((array_inThem_1) => {
    setTimeout(() => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          let array_filt = array_inThem_1.filter((item) => {
            return item > 30 && item < 300
          })
          console.log(array_filt)
          res()
        }, 2000)
      })
    })
  })
  .then(() => {
    setTimeout(() => {
      function fun_inThem_1(a, b, c) {
        let arrayFunThem = [a, b, c]
        const a_Fun = a

        for (let i = 3; i < a_Fun; i++) {
          if (i == 9) {
            continue
          }
          console.log(i)
        }

        arrayFunThem.unshift('aEx', 56, 101)
        console.log(arrayFunThem)

        const ob_FunThem = {
          number_1: a_Fun,
          number_2: b,
          number_3: c,
          arr: [0, 1],
        }

        if (ob_FunThem.number_3 > b) {
          console.log(ob_FunThem.number_3)
        } else {
          console.error('Error in array')
        }
      }
      fun_inThem_1(13, 12, 22)
    }, 3000)
  })
  .catch((err) => {
    console.error(err)
  })
