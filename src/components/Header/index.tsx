import { HeaderContainer } from "./styles";
import igniteLogo from '../../assets/Logo.svg'
import { ScrollIcon, TimerIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header () {
    return (
        <HeaderContainer>
            <img src={igniteLogo} alt="Logo do ignite, dois triângulos sobrepostos" />
            <nav>
                <NavLink to="/" title="timer">
                    <TimerIcon size={24} />
                </NavLink>

                <NavLink to="/history" title="Histórico">
                    <ScrollIcon size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}