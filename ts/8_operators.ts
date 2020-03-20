interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person

let key: PersonKeys = 'age'
key = 'name'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta2 = Pick<keyof User, 'name' | 'email'>

let u1: UserKeysNoMeta2 = 'name'