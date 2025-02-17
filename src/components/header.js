import { Link, useNavigate } from 'react-router-dom';
import amazon_logo from '../assets/logo/amazon_logo.png'

const Header = () => {
    const navigate =  useNavigate();
    return ( 
        <header id="navbar_main" className="text-white">
            <div id="nav_left">
                <a onClick={()=>navigate('/')} href="">
                    <div id="logo">
                        <img width={90} src={amazon_logo} alt="" />
                    </div>
                </a>
                <div id="nav_global_location" className='ms-2'>
                    <div className="d-flex">
                        <i className="d-flex align-items-end fa-solid fa-location-dot me-1 mb-1"></i>
                        <div className="d-flex flex-column">
                            <span className="txt-deliver text-secondary">Deliver to</span>
                            <span className="txt-country">Cambodia</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="nav_middle" className='w-100'>
                <div className="search-bar">
                    <div className="position-relative">
                        <form>
                            <button  className='search_category p-1 pe-2 ps-2 border-0 rounded-start position-absolute dropdown-toggle top-50 start-0 translate-middle-y'>All</button>
                            <div className="btn-group">
                                <button style={{fontSize:'12px'}} className="search_category btn btn-secondary dropdown-toggle p-1 pe-2 ps-2 border-0 rounded-start position-absolute dropdown-toggle top-50 start-0 translate-middle-y" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    All
                                </button>
                                <ul className="dropdown-menu rounded-0" data-bs-spy="scroll">
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    <li><a className="dropdown-item" href="#">Menu item</a></li>
                                </ul>
                            </div>
                            <input style={{fontSize:'14px'}} className="input_search rounded bg-white w-100" type="search" placeholder="Search Amazon"/>
                            <button type="button" className="btn_search rounded-end position-absolute top-50 end-0 translate-middle-y border-0">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div id="nav_right">
                <div className="nav_tools ms-2 d-flex align-items-center mb-2">
                    <a href="" className='d-flex ms-4 mt-2 text-white'>
                        <span className='me-1 fi fi-us'></span>
                        <span className='dropdown-toggle'>EN</span>
                    </a>
                    <a href="" className='right_nav_item d-flex flex-column ms-4 mt-2 text-white'>
                        <span className='line-1'>Hello, sign in</span>
                        <span className='line-2 dropdown-toggle'>Account & Lists</span>
                    </a>
                    <a href="" className='right_nav_item d-flex flex-column ms-4 mt-2 text-white'>
                        <span className='line-1'>Returns</span>
                        <span className='line-2'>&Orders</span>
                    </a>
                    <Link to="/shopping_cart" href="" className='right_nav_item d-flex ms-4 mt-2 text-white'>
                        <span className='line-1 position-relative'>
                            {/* <img width={30} src={icon_shopping} alt="" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span className='position-absolute top-0 start-100 text-warning fw-bold fs-6'>0</span>
                        </span>
                        <div className='ms-2 mt-2'>
                            <span className='line-2'>Cart</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;