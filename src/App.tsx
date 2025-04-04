import './App.css'
import { getCharacter } from './services';
import { Character } from './models';
import { useApi } from './hooks';

function App() {
  const { data, loading, error, fetchData } = useApi<Character>(getCharacter(2), {autoFetch: false})

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <>
      {JSON.stringify(data)}
      <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default App
