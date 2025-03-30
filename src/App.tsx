import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/context/ModalContext'

function App() {
  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  return (
    <>
      <Modal>
        <h2>Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil et officiis soluta ex praesentium dolorum esse facilis consequuntur aliquam dignissimos animi voluptatem nesciunt optio, suscipit qui perspiciatis necessitatibus! Aliquam.</p>
      </Modal>
      <button onClick={openModal}>open</button>
    </>
  )
}

export default App
