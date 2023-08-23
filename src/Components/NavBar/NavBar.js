import './NavBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClickOutside from 'react-click-outside';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function NavBar() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    return (
        <ClickOutside
            onClickOutside={() => setExpanded(false)}
        >
            <SideNav
                className="mySideNav"
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
                onSelect={(selected) => {
                    navigate('/' + selected);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="datatable">
                        <NavIcon>
                            <i className="fa fa-fw fa-table" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            DataTable
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="admin">
                        <NavIcon>
                            <i className="fa fa-fw fa-pen" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Admin
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </ClickOutside>
    )
}

export default NavBar;