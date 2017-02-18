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
									<li><a href="index.html" className="active"><i className="fa fa-tachometer"></i> <span>Dashboard</span></a></li>
                  <li><Link to="/customer/list"><span>Customers</span></Link></li>
								</ul>
							</nav>
						</div>
					</div>
        );
    }
}

export default SideBar;
