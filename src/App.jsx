import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
    // Operador: '??', também chamado de Nullish coalescing operator(Operador de coalescência nula)
    // Novo no javascript
    // Verifica se o valor na esquerda existe ou é valido. Se for retorna esse mesmo valor
    // Senão retorna o valor da direita(geralmente utilizado como valor padrão)
    return <RepositoryList />
}