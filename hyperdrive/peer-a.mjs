import Hyperdrive from 'hyperdrive'
import Corestore from 'corestore'
import Hyperswarm from 'hyperswarm'

console.log('====Peer A====')

const store = new Corestore('./storage-a')
const drive = new Hyperdrive(store)
const swarm = new Hyperswarm()

await drive.ready()

await drive.put('/hello.txt', Buffer.from('Hello from peer-a!'))
await drive.put('/data.json', Buffer.from(JSON.stringify({ peer: 'a', ts: Date.now() })))

swarm.on('connection', (connection) => store.replicate(connection))
swarm.join(drive.discoveryKey)

await swarm.flush()

console.log('drive key:', drive.key.toString('hex'))
