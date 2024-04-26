import { createPortal } from 'react-dom'
import styles from './PolicyModal.module.sass'
import { FC, useEffect, useRef } from 'react'
import useBodyLock from '../../../hooks/useBodyLock'

interface PolicyModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PolicyModal: FC<PolicyModalProps> = ({ isOpen, setIsOpen }) => {
  const policyRef = useRef<HTMLDialogElement>(null)
  const { toggleBodyLock } = useBodyLock()

  useEffect(() => {
    if (isOpen) {
      policyRef.current?.showModal()
    } else {
      policyRef.current?.close()
    }
  }, [isOpen])
  
  const handleCloseBtnClick = () => { 
    setIsOpen((prev) => !prev)
    toggleBodyLock()
   }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>): void => { 
    if (e.target === policyRef.current) {
      setIsOpen((prev) => !prev)
      toggleBodyLock()
    }
   }
   
  const handleEscKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => { 
    if (e.key === "Escape") {
      setIsOpen((prev) => !prev)
      toggleBodyLock()
    }
   }

  return createPortal (
    <dialog onKeyDown={handleEscKeyDown} onClick={handleBackdropClick} ref={policyRef}>
      <div style={{padding: '50px'}}>
        <button onClick={handleCloseBtnClick}>X</button>
        <p>Policy</p>
        
      </div>
    </dialog>,
    document.getElementById('policy-modal') as HTMLDivElement
  )
}

export default PolicyModal