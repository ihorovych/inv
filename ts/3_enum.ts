enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Premium
const membershipReverse = Membership[membership]
console.log(membershipReverse, membership)