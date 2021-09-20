import { render } from 'react-dom'
import { App } from './App'

// O babel fica responsável por compilar o js para um javascript q o navegador entenda
// O webpack compila os outros arquivos q são importados em arquivos .js ou .jsx

render(<App />, document.getElementById('root'))
