import React from 'react';
import { Dropdown, initMDB } from "mdb-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const NavBar = () => {
  initMDB({ Dropdown });


  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
        localStorage.removeItem("role");
        window.location.href = "/";
      }
    });
  };

  const handleProfile = () =>{
    window.location.href = "/profile"
  };
  


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary mr-5">
      <div className="container-fluid d-flex flex-row-reverse ">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              aria-haspopup="true"   
              data-toggle="dropdown" 
              aria-expanded="false"
              >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8LxjfQ2PIiNg0aDEY61FiwcKyoR9_Cg-u2TdLFsBbA&s"
                className="rounded-circle avatar-hover"
                height="45"
                alt="Portrait of a Woman"
                loading="lazy"
              />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#" onClick={handleProfile}>
                <FontAwesomeIcon icon={faUser} /> My profile
              </a>
              <a className="dropdown-item" href="#" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
