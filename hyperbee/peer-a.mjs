import Hyperswarm from 'hyperswarm'
import Hyperbee from 'hyperbee'
import Hypercore from 'hypercore'

console.log('====Peer A====')

const swarm = new Hyperswarm()
const hypercore = new Hypercore('./storage-a')
await hypercore.ready()

swarm.on('connection', (connection) => {
  console.log('connection')
  hypercore.replicate(connection)
})

swarm.join(hypercore.discoveryKey)
await swarm.flush()

console.log('Hypercore public key:', hypercore.key.toString('hex'))

const db = new Hyperbee(hypercore, { keyEncoding: 'utf-8', valueEncoding: 'utf-8'})
await db.ready()

await db.put('hello', 'world')
