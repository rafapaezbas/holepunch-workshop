import Autopass from 'autopass'
import Corestore from 'corestore'

console.log('====Peer B====')

const invite = process.argv[2]

const pair = Autopass.pair(new Corestore('./storage-b'), invite)
const pass = await pair.finished()
await pass.ready()

console.log('paired!')

for await (const { key, value } of pass.list()) {
  console.log(key, '->', value)
}

await pass.add('key-b', 'value-b')
