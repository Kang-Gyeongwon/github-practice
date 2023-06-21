// This
// = 호츌패턴에 따라 달라지는 값

// 1. 함수 호출
// 기본 값이 window, strict mode = undefined
const add = () => {
  console.log(this) // 브라우저 = window, node = global
}

add()

// 2. 객체
const calc = {
  value: 10,
  add: function() {
    console.log(this)  // calc
    console.log(this.value)  // 10
  }
}

calc.add()

// 3. 객체 안에서의 함수 호출 패턴
const calc2 = {
  value: 10,
  add: function() {
    console.log(this)  // calc
    console.log(this.value)  // 10
    
    function foo () {
      console.log(this)  // window, global
      console.log(this.value)  // undefined
    }
    foo()
  }
}

calc2.add()

// 3. 객체 안에서의 함수 호출 패턴(화살표 함수)
const calc3 = {
  value: 10,
  add: function() {
    console.log(this)  // calc
    console.log(this.value)  // 10
    
    const foo = () => {
      console.log(this)  // calc
      console.log(this.value)  // 10
    }
    foo()
  }
}

calc3.add()

// call, apply

const p1 = {
  name: '짱구'
}
const p2 = {
  name: '철수'
}
function printName () {
  console.log(this.name)
}

printName() // undefined

// this binding
printName.apply(p1) // 짱구


// git hub에 javascript 로 만들어서 올리기