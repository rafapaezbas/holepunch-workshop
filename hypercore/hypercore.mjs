import Hypercore from 'hypercore'

const hypercore = new Hypercore('./storage')
await hypercore.ready()

await hypercore.append(Buffer.from('hello world'))
console.log((await hypercore.get(0)).toString())

console.log(hypercore)
