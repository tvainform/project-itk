import React, {Component} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                    <NavItem className="menu-open">
                        <NavLink to="#" activeClassName="" className="nav-link">
                            <i className="nav-icon fas fa-users" />
                            <p>Команда<i className="right fas fa-angle-left" /></p>
                        </NavLink>
                        <Nav className="nav-treeview">
                            <NavItem>
                                <NavLink activeClassName="active" to="/users" className="nav-link">
                                    <i className="nav-icon fas fa-users" />
                                    <p>Участники</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/coveralls" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Спецодежда</p>
                                </NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink activeClassName="active" to="/vacation" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Отпуск</p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink activeClassName="" to="#" className="nav-link">
                            <i className="nav-icon fas fa-copy" />
                            <p>Заявки и инциденты<i className="fas fa-angle-left right" /></p>
                        </NavLink>
                        <Nav className="nav-treeview">
                            <li className="nav-item">
                                <NavLink to="/incidents" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Все инциденты</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Последний отчет</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/boxed.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Boxed</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Fixed Sidebar</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Fixed Navbar</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/fixed-footer.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Fixed Footer</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Collapsed Sidebar</p>
                                </a>
                            </li>
                        </Nav>
                    </NavItem>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie" />
                            <p>
                                Charts
                                <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/charts/chartjs.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>ChartJS</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/charts/flot.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Flot</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/charts/inline.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Inline</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-tree" />
                            <p>
                                UI Elements
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/UI/general.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>General</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/icons.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Icons</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/buttons.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Buttons</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/sliders.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Sliders</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/modals.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Modals &amp; Alerts</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/navbar.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Navbar &amp; Tabs</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/timeline.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Timeline</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/UI/ribbons.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Ribbons</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-edit" />
                            <p>
                                Forms
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/forms/general.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>General Elements</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/forms/advanced.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Advanced Elements</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/forms/editors.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Editors</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/forms/validation.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Validation</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-table" />
                            <p>
                                Tables
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/tables/simple.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Simple Tables</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/tables/data.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>DataTables</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/tables/jsgrid.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>jsGrid</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-header">EXAMPLES</li>
                    <NavItem className="nav-item">
                        <NavLink to="/calendar" className="nav-link">
                            <i className="nav-icon fas fa-calendar-alt" />
                            <p>
                                Calendar
                                <span className="badge badge-info right">2</span>
                            </p>
                        </NavLink>
                    </NavItem>
                    <li className="nav-item">
                        <a href="pages/gallery.html" className="nav-link">
                            <i className="nav-icon far fa-image" />
                            <p>
                                Gallery
                            </p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon far fa-envelope" />
                            <p>
                                Mailbox
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/mailbox/mailbox.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Inbox</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/mailbox/compose.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Compose</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/mailbox/read-mail.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Read</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-book" />
                            <p>
                                Pages
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/examples/invoice.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Invoice</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/profile.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Profile</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/e-commerce.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>E-commerce</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/projects.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Projects</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/project-add.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Project Add</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/project-edit.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Project Edit</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/project-detail.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Project Detail</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/contacts.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Contacts</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon far fa-plus-square" />
                            <p>
                                Extras
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/examples/login.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Login</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/register.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Register</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/forgot-password.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Forgot Password</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/recover-password.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Recover Password</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/lockscreen.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Lockscreen</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Legacy User Menu</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/language-menu.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Language Menu</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/404.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Error 404</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/500.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Error 500</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/pace.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Pace</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/blank.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Blank Page</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="starter.html" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Starter Page</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-header">MISCELLANEOUS</li>
                    <li className="nav-item">
                        <a href="https://adminlte.io/docs/3.0/" className="nav-link">
                            <i className="nav-icon fas fa-file" />
                            <p>Documentation</p>
                        </a>
                    </li>
                    <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-circle nav-icon" />
                            <p>Level 1</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-circle" />
                            <p>
                                Level 1
                                <i className="right fas fa-angle-left" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Level 2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>
                                        Level 2
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-dot-circle nav-icon" />
                                            <p>Level 3</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-dot-circle nav-icon" />
                                            <p>Level 3</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-dot-circle nav-icon" />
                                            <p>Level 3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Level 2</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="fas fa-circle nav-icon" />
                            <p>Level 1</p>
                        </a>
                    </li>
                    <li className="nav-header">LABELS</li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">Important</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-warning" />
                            <p>Warning</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-info" />
                            <p>Informational</p>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
