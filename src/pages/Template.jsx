import './Template.css'
import { useState,useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const Template = ({ children }) => {
    
    const [scrollPos, setScrollPos] = useState(0);
    const [scrollPer, setScrollPer] = useState(0);
    const [isDark, setIsDark] = useState(false);
    
    const updateScroll = () => {
        setScrollPos(window.scrollY || document.documentElement.scrollTop);
        const result = scrollPos / document.documentElement.scrollHeight;
        setScrollPer(result * 100);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    const presentHeader = () => {
        console.log(scrollPos);
        if (scrollPos < 465) {
            return ("");
        }
        else if (scrollPos < 666) {
            return ("Font");
            
        }
        else if (scrollPos <1920) {
             return ("Font : Contents");
        }
        else {
            return("Font : tester")
        }
    }

    const onClick = () => {
        isDark ? setIsDark(false) : setIsDark(true);
    }
    return (
        <div className={!isDark ? "isLight" : "isDark"}>
            <div className="header">
                <span>{presentHeader()}</span>
                <button type="button" onClick={onClick} >
                    {!isDark ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </button>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
export default Template;