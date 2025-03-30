import { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context/ModalContext"
import "./Modal.css"

interface ModalParams {
  children: ReactNode
}

export const Modal = ({ children }: ModalParams) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const {state, setState} = useModalContext()

  const closeModal = () => {setState(false)}

  const modalRoot = document.getElementById("modal")

  const handleNoModalContentClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setState(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [])

  if (!state || !modalRoot) return null

  return createPortal(
    <div className="overlay" onClick={closeModal}>
      <div className="modal" ref={modalRef} onClick={handleNoModalContentClose}>
        <button onClick={closeModal}>X</button>
        {children}
      </div>
    </div>, modalRoot
  )
}