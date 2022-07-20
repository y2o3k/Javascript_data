//ECMAScript 2017(ES8)에서 소개된 async 함수 
//- await 키워드는 반드시 async 함수 안에서만 유효함.
function doJob(name, person) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (person.stamina > 50) {
          resolve({
            result: `${name} success`,
            loss: 30,
          })
        } else {
          reject(new Error(`${name} failed`))
        }
      }, 1000)
    })
  }
  
  const john = { stamina: 100 }
  
  doJob("work", john)
    .then((value) => {
      console.log(value.result)
      john.stamina -= value.loss
      return doJob("study", john)
    })
    .then((value) => {
      console.log(value.result)
      john.stamina -= value.loss
      return doJob("work", john)
    })
    .then((value) => {
      console.log(value.result)
      john.stamina -= value.loss
      return doJob("study", john)
    })
    .catch((e) => console.error(e))