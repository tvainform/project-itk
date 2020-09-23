import React, { Component } from 'react';
import Menu from "./Menu";
import Logo from "./Logo";
import UserPanel from "./UserPanel";
export default class Aside extends Component {
    render() {
        return (
<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
<Logo/>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
<UserPanel/>
      {/* Sidebar Aside */}
<Menu/>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
