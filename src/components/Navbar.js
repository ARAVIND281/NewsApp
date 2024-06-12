import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => navigate("/")
    },
    {
      label: 'Politics',
      icon: 'pi pi-fw pi-briefcase',
      command: () => navigate("/politics")
    },
    {
      label: 'Sports',
      icon: 'pi pi-fw pi-globe',
      command: () => navigate("/sports")
    },
    {
      label: 'Technology',
      icon: 'pi pi-fw pi-desktop',
      command: () => navigate("/technology")
    },
    {
      label: 'Search',
      icon: 'pi pi-fw pi-search',
      command: () => navigate("/search")
    }
  ];

  const start = <Link to="/" className="navbar-brand">NewsApp</Link>;

  return (
    <div className="card">
      <Menubar model={items}  />
    </div>
  );
};

export default Navbar;
