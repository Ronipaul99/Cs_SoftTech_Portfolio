import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './components/About';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard/index';
import Footer from './components/Footer';
import Service from "./pages/sarvice";
import './css/app.css'
import './icon/style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ServiceDetails from "./pages/sarvice/service-details";

function App() {
  return (
    <div className="App">
       <Router>
       <header className="header">
          <div className="container">
            <div className="wrapper">
              <div className="header-item-left">
                <h1>
                  <Link to="./" className="brand">
                      <img src='./logo.png' alt=""/>
                  </Link>
                </h1>
              </div>
					{/* <!-- Section: Navbar Menu --> */}
                <div className="header-item-center">
                  <div className="overlay"></div>
                  <nav className="menu">
                    <div className="menu-mobile-header">
                      <button type="button" className="menu-mobile-arrow"><i className="bi bi-arrow-left"></i></button>
                      <div className="menu-mobile-title"></div>
                      <button type="button" className="menu-mobile-close"><i className="bi bi-x"></i></button>
                    </div>
                    <ul className="menu-section">
                      <li className="menu-item-has-children">
                        <Link to="/Services">Service <i className="ion ion-ios-arrow-down"></i></Link>
                        <div className="menu-subs">
                                              <div className="menu-mega">
                          <div className="list-item">
                            <h4 className="title">WEB DEVELOPMENT</h4>
                            <ul>
                              <li><Link to="/inner-services">PHP</Link></li>
                              <li><Link to="/inner-services">Laravel</Link></li>
                              <li><Link to="/inner-services">.NET</Link></li>
                              <li><Link to="/inner-services">AngularJS</Link></li>
                              <li><Link to="/inner-services">UI/UX</Link></li>
                              <li><Link to="/inner-services">Zend</Link></li>
                              <li><Link to="/inner-services">Python</Link></li>
                              <li><Link to="/inner-services">Node.Js</Link></li>
                              <li><Link to="/inner-services">Vue.Js</Link></li>
                            </ul>
                          </div>
                          <div className="list-item">
                            <h4 className="title">CMS AND OPENSOURCE</h4>
                            <ul>
                              <li><Link to="/inner-services">Wordpress</Link></li>
                              <li><Link to="/inner-services">Codeigniter</Link></li>
                              <li><Link to="/inner-services">CakePHP</Link></li>
                              <li><Link to="/inner-services">Yii</Link></li>
                              <li><Link to="/inner-services">Drupal</Link></li>
                              <li><Link to="/inner-services">Kentico</Link></li>
                              <li><Link to="/inner-services">SharePoint</Link></li>
                              <li><Link to="/inner-services">Joomla</Link></li>
                            </ul>
                          </div>
                          <div className="list-item">
                            <h4 className="title">ECOMMERCE</h4>
                            <ul>
                              <li><Link to="/inner-services">Magento</Link></li>
                              <li><Link to="/inner-services">Woocommerce</Link></li>
                              <li><Link to="/inner-services">Shopify</Link></li>
                              <li><Link to="/inner-services">Prestashop</Link></li>
                              <li><Link to="/inner-services">Opencart</Link></li>
                              <li><Link to="/inner-services">Zencart</Link></li>
                            </ul>
                            {/* <!-- <h4 className="title">MOBILE APP DEVELOPMENT</h4>
                            <ul>
                              <li><Link to="/inner-services">IPhone Application</Link></li>
                              <li><Link to="/inner-services">Android Application</Link></li>
                              <li><Link to="/inner-services">PhoneGap Application</Link></li>
                              <li><Link to="/inner-services">Swift Application</Link></li>
                              <li><Link to="/inner-services">Xamarin Application</Link></li>
                              <li><Link to="/inner-services">Progressive Web Application</Link></li>
                            </ul> --> */}
                          </div>
                          <div className="list-item">
                            <h4 className="title">DIGITAL MARKETING</h4>
                            <ul>
                              <li><Link to="/inner-services">Search Engine Optimization</Link></li>
                              <li><Link to="/inner-services">Social Media Optimization</Link></li>
                              <li><Link to="/inner-services">Search Engine Marketing</Link></li>
                              <li><Link to="/inner-services">Social Media Marketing</Link></li>
                              <li><Link to="/inner-services">Content Marketing</Link></li>
                              <li><Link to="/inner-services">Paid Ad Campaigns</Link></li>
                            </ul>
                                                  {/* <!-- <h4 className="title">CLOUD COMPUTING</h4>
                                                  <ul>
                                                      <li><Link to="/inner-services">Amazon Web Services</Link></li>
                                                      <li><Link to="/inner-services">Microsoft Azure</Link></li>
                                                      <li><Link to="/inner-services">Google Cloud</Link></li>
                                                      <li><Link to="/inner-services">Rack Space</Link></li>
                                                      <li><Link to="/inner-services">Liquidweb</Link></li>
                                                      <li><Link to="/inner-services">WIX</Link></li>
                                                  </ul> --> */}
                          </div>
                        </div>
                      </div>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="/inner-services">Industry <i className="ion ion-ios-arrow-down"></i></Link>
                        <div className="menu-subs">
                            <div className="menu-mega">
                                <div className="list-item">
                                  <ul>
                                    <li><Link to="/inner-services">Banking & Financial Services</Link></li>
                                    <li><Link to="/inner-services">Communications, Media & Technology</Link></li>
                                    <li><Link to="/inner-services">Energy, Resources & Utilities</Link></li>
                                    <li><Link to="/inner-services">Information Services</Link></li>
                                    <li><Link to="/inner-services">Life Sciences & Healthcare</Link></li>
                                    <li><Link to="/inner-services">Public Services</Link></li>												
                                  </ul>
                                </div>
                                <div className="list-item">
                                  <ul>
                                    <li><Link to="/inner-services">Travel, Transportation & Hospitality</Link></li>
                                    <li><Link to="/inner-services">Consumer Goods & Distribution</Link></li>
                                    <li><Link to="/inner-services">Education</Link></li>
                                    <li><Link to="/inner-services">HiTech</Link></li>
                                    <li><Link to="/inner-services">Insurance</Link></li>
                                    <li><Link to="/inner-services">Manufacturing</Link></li>
                                    <li><Link to="/inner-services">Retail</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li><Link to="/inner-services">Products </Link></li>
                          <li><Link to="/inner-services">Case Studies </Link></li>
                          <li><Link to="/inner-services">About</Link></li>
                          <li><Link to="/inner-services">Contact Us</Link></li>
                        </ul>
                      </nav>
                    </div>

                    <div className="header-item-right">
                      <Link to="/login" className="login">Login</Link>
                      <button type="button" className="menu-mobile-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>

                  </div>
                </div>
		        </header>

                   
                    
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Profile" component={Profile}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/Services" component={Service}></Route>
          <Route exact path="/inner-services" component={ServiceDetails}></Route>
          <Route path="/**" render={() => <Redirect to="/register" />}></Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
