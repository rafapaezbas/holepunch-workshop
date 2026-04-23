import Hyperswarm from 'hyperswarm'
import Hypercore from 'hypercore'
import Hyperbee from 'hyperbee'

console.log('====Peer C====')

const swarm = new Hyperswarm()
const hypercore = new Hypercore('./storage-c', Buffer.from(process.argv[2], 'hex'))
await hypercore.ready()

console.log('Hypercore public key:', hypercore.key.toString('hex'))

const db = new Hyperbee(hypercore, { keyEncoding: 'utf-8', valueEncoding: 'utf-8'})
await db.ready()

swarm.on('connection', (connection) => {
  console.log('connection')
  hypercore.replicate(connection)
})

swarm.join(hypercore.discoveryKey)
await swarm.flush()

await db.update()
console.log('get:', await db.get('hello'))
