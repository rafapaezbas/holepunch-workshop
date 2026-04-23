import DHT from 'hyperdht'
import FramedStream from 'framed-stream'

console.log('====Peer A====')

const node = new DHT()
const server = node.createServer()

server.on('connection', function (connection) {
  const stream = new FramedStream(connection)
  stream.on('data', (data) => {
    console.log('Peer B says:', data.toString())
  })
  stream.write('hello I am Peer A')
})

const keyPair = DHT.keyPair()
await server.listen(keyPair)

console.log('Public key:', keyPair.publicKey.toString('hex'))
