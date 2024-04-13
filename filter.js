const filterIt = (arr) => {

  let filtered
  const faves = arr.filter((item) => {
    return item.favorite === true
  })
  const notFaves = arr.filter((item) => {
    return item.favorite === false
  })

  filtered = [
    ...faves, ...notFaves
  ]

  return filtered
}



console.log(
  filterIt([
    {
      id: 1,
      name: 'cool1',
      favorite: false
    },
    {
      id: 2,
      name: 'cool2',
      favorite: true
    },
    {
      id: 3,
      name: 'cool3',
      favorite: true
    },
    {
      id: 4,
      name: 'cool4',
      favorite: false
    }
  ])
)