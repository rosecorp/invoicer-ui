import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/img/logo.png';

class SideBar extends React.Component {
    render() {
        return (
					<div className="sidebar">
						<div className="brand">
							<a href="index.html"><img src={logo} alt="" className="img-responsive logo"/></a>
						</div>
						<div className="sidebar-scroll">
							<nav>
								<ul className="nav">
									<li><Link to="/"><i className="fa fa-tachometer"></i> <span>Dashboard</span></Link></li>
                  <li><Link to="/customer/list"><i className="fa fa-user"></i> <span>Customers</span></Link></li>
								</ul>
							</nav>
						</div>
					</div>
        );
    }
}

export default SideBar;
