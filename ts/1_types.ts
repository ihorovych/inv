const isBool: boolean = true

const num: number = 42

const str: string = 'String'

const numberArray: number[] = [1, 2, 3]

const numberArray2: Array<number> = [1, 2, 3]

// Tuple
const contact: [string, number] = ['Roman', 2042121111]

// Any
let variable: any = 42
variable = 'aaa'

// function

function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Roman');

// Never
function throwError(message: string): never {
  throw new Error(message)
}

// Type
type Login = string

const login: Login = 'lalala'

type ID = string | number
const idS: ID = 'dsfaads'
const idN: ID = 42





