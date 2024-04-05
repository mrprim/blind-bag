import schemas from "../data/schemas"

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const getBag = (arg: BagType | string[]): Bag => {
  let all = typeof arg === 'string' ? schemas[arg].all() : [...arg]; 
  let contents = [...all]

  return {
    count: () => contents.length,
    draw: (number = 1) => {
      const result: string[] = []
      for (let i = 0; i < number; i++) {
        if (!contents.length) {
          continue
        }

        result.push(contents.splice(getRandomInt(contents.length), 1)[0])
      }

      return result
    },
    reset: () => {
      contents = all
    },
    discard: (...tiles) => {
      contents = contents.concat(tiles)
    },
    fill: (...tiles) => {
      all = tiles
      contents = all
    }
  }
}

export default getBag;