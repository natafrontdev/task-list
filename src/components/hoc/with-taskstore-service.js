import React from 'react'
import { TaskstoreServiceConsumer } from '../taskstore-service-context'

const withTaskstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <TaskstoreServiceConsumer>
        {
          (taskstoreService) => {
            return (
              <Wrapped {...props}
                taskstoreService={taskstoreService} />
            )
          }
        }
      </TaskstoreServiceConsumer>
    )
  }
}

export default withTaskstoreService
