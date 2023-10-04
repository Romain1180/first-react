import WrapperComponent from "./components/WrapperComponent"
import NotificationComponent from "./components/NotificationComponent"


function App(){
  return(
      <div className="container">
          <div className="columns">
              <div className="column">
                <WrapperComponent/>
                <NotificationComponent></NotificationComponent>
              </div>
          </div>
      </div>
  )
}

export default App