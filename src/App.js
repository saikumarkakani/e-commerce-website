
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routers.js';
import { WebPage } from './Components/Project/webpage.jsx';
import { MyFooter } from './Components/Project/Page-Footer/footer.component.jsx';
import Store from './Services/Storages/reduxstore.service.js';
import { useEffect, useState } from 'react';
import { UserContextVariable } from './Services/userContext.js';



function App() {

  const [userDetails, setuserDetails] = useState(null);

  useEffect(() => {
    checkUserLoggedIn();
}, [])


// function for user logged in
function checkUserLoggedIn() {
 Store.subscribe(() => {
        let user = Store.getState()?.user
        if (user != null && user != undefined) {
            setuserDetails(true);
          
        }
        else {
            setuserDetails(false);

        }
    });
};
  return (
    <div  className='myBody'>

      <UserContextVariable.Provider value={userDetails}>

      <BrowserRouter>
      <WebPage></WebPage>
      <AppRoutes></AppRoutes>
      <MyFooter></MyFooter>
      </BrowserRouter>

      </UserContextVariable.Provider>
      
    

    </div>
  );
}

export default App;
