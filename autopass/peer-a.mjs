import Autopass from 'autopass'
import Corestore from 'corestore'

console.log('====Peer A====')

const pass = new Autopass(new Corestore('./storage-a'))
await pass.ready()

const invite = await pass.createInvite()
console.log('invite (pass to peer-b):', invite)

await pass.add('key-a', 'value-a')
await pass.add('key-a-2', 'value-a-2')

pass.on('update', async () => {
  for await (const { key, value } of pass.list()) {
    console.log(key, '->', value)
  }
  console.log('----------------')
})
