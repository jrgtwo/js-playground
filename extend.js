class Tester extends Array {
  shout() {
    console.log('HEYO', this)
  }
}

const boom = new Tester()

boom.shout()
console.log(boom.push('a'))
console.log(boom[0])
boom.shout()
console.log(boom.pop())
boom.shout()

const bam = [];
bam?.shout?.();