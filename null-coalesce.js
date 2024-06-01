const obj = {
  person: {
    name: 'Chewie',
    address: {
      city: 'PuppyTown'
    }
  }
}

console.log(obj?.person?.name)
console.log(obj?.person?.address)
console.log(obj?.person?.address?.city)
console.log(obj?.person?.address?.state || 'CA')
obj.person.address.state = false
console.log(obj?.person?.address?.state || 'CA')
console.log(obj?.person?.address?.state ?? 'CA')