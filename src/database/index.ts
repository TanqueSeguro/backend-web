import { AppDataSource } from './data-source'

AppDataSource.initialize()
  .then(async () => {
    console.log('\n=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    console.log('    INICIALIZANDO BANCO')
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\n')
  })
  .catch(error => console.log(error))
