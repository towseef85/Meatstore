import { observer } from 'mobx-react-lite'
import { Modal } from 'semantic-ui-react'
import { useStore } from '../store/store'

export default observer( function ModalContainer() {
    const { modelStore } = useStore()
    return (
       <Modal open={modelStore.modal.open} onClose={modelStore.closeModal} size="small">
           <Modal.Content>
               {modelStore.modal.body}
           </Modal.Content>
       </Modal>
    )
})
