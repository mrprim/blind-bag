const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max))

const getRandomItem = <T>(value: T[]): T => {
  const index =  getRandomInt(value.length) - 1
  return value[index];
}


export { getRandomInt, getRandomItem };