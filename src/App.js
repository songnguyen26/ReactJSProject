import logo from './logo.svg';
import './App.css';
import Bai1 from './Components/bai1';
import Index from './Frontend/index';
import {BrowserRouter as BrowserRouter,Routes,Route} from 'react-router-dom';
import FrontendRoute from './routes/frontend';
import { UserProvider } from './Frontend/context/userContext';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import IndexAdmin from './backend';
import BackendRoute from './routes/backend';
function App() {
  return (
    <Provider store={store}>
        <UserProvider>
          <BrowserRouter>
            <ToastContainer/>
              <Routes>
                <Route path="/" element={<Index/>}>
                  {
                    FrontendRoute.map((route,index)=>{
                      const Page=route.component;
                      return <Route key={index} path={route.path} element={<Page/>}/>
                    })
                  }
                </Route>
                 {/* //backend route */}
                <Route path="/admin" element={<IndexAdmin />}>
                    {
                    BackendRoute.map((router, index) => {
                        const Page = router.component;
                        return <Route key={index} path={router.path} element={<Page />} />
                      })
                    }
                </Route>
              </Routes>
          </BrowserRouter>
        </UserProvider>
      </Provider>

  );
  
  
}

export default App;
