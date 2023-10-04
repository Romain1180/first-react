import WrapperComponent from "./components/WrapperComponent"
import NotificationComponent from "./components/NotificationComponent"
// import { useState } from "react"

function App(){
  return(
      <div className="container">
          <div className="columns">
              <div className="column">

                <WrapperComponent>
                  <NotificationComponent
                    content='test 1'
                    type='is-danger'
                  />
                  <NotificationComponent
                    content='test 2'
                    type='is-warning'
                  />
                  <NotificationComponent
                    content='test 3'
                    type='is-info'
                  />
                  <NotificationComponent
                    content='test 4'
                    type='is-success'
                  />
                </WrapperComponent>

              </div>
          </div>
      </div>
  )
}

export default App