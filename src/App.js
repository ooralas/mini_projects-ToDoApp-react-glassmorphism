import List from './Component/list/list'

function App() {
  let task = [
    { title: 'React-Aufgabe bearbeiten ..', done: false, id: 1 },
    { title: 'Tanken gehen', done: false, id: 2 },
    { title: 'React Kurs weiter machen', done: false, id: 3 },
  ]
  return (
    <div className='App'>
      <List className='list' tasks={task} />
    </div>
  )
}

export default App
