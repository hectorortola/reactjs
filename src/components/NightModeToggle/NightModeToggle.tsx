import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface NightModeToggleProps {
    toggleNightMode: () => void;
}

const NightModeToggle: React.FC<NightModeToggleProps> = () => {

    const [nightMode, setNightMode] = useState(false);

    const toggleNightMode = () => {
        setNightMode(!nightMode);
    };

    return (
        <div className="dark-mode-toggler" onClick={toggleNightMode}>
            <i className={`fa ${nightMode ? ' <FontAwesomeIcon icon={faSun}/>' : '<FontAwesomeIcon icon={faMoon}/>'}`}></i>
        </div>
    );
};

export default NightModeToggle;
