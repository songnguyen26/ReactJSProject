import './assets/img/apple-icon.png';
import './assets/img/favicon.ico';
import './assets/css/bootstrap.min.css';
import './assets/css/templatemo.css';
import './assets/css/custom.css';
import './assets/css/fontawesome.min.css';

import Header from './partial/header';
import Footer from './partial/footer';
import { Outlet } from 'react-router-dom';
function Index(){
   return(
    <div>

{/* <!-- Close Top Nav --> */}


{/* <!-- Header --> */}
    <Header/>
{/* <!-- Close Header --> */}

    <div className="row content">
        <Outlet/>
    </div>

{/* <!-- Start Footer --> */}
    <Footer/>
</div>
   );
}
export default Index