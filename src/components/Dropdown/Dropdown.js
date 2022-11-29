import React, { useState } from 'react'
import styled from "styled-components";


const DropdownMenu = styled.div`
    position: relative;

    & > button {
        position: relative;
        z-index: 2;
        transition: 0.3s;
    }

    & > button:hover {
        background: #3a3a3a;
    }

    &.open > button {
        background: #15a480;
    }

    & button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 16px;
        width: ${props => props.width};
        height: 64px;
        border-radius: 6px;
        color: #f9f9f9;
        background: #252525;
        border: 0;
        cursor: pointer;
        font-size: 16px;
    }

    & button #icon {
        margin-left: auto;
    }
`;
const Menu = styled.div`
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 61px;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 0;
    background: #3e3e3e;
    translate: 0 -20px;
    transition: 0.4s;

    & button {
        border: 0;
        width: 100%;
        height: 56px;
        border-radius: 0;
    }
    & button:hover {
        background: #383838;
    }

    ${DropdownMenu}.open &{
        opacity: 1;
        translate: 0;
        visibility: visible;
    }
`;
function Dropdown({ values }) {

    const [selected, setSelected] = useState("More Actions");

    const Handle_Change = val => {
        setSelected(val)
    }
    const toggleDropdown = (shouldOpen) => {
        const dropdown = document.getElementById("dropdown");
        const icon = document.getElementById("icon");

        if (shouldOpen) {
            dropdown.classList.add("open");
        } else {
            dropdown.classList.remove("open");
        }

        icon.innerText = dropdown.classList.contains("open")
            ? "close"
            : "expand_more";
    };

    const handleDropClick = event => {
        event.stopPropagation();
        const dropdown = document.getElementById("dropdown");
        toggleDropdown(!dropdown.classList.contains("open"));
    }
    document.body.addEventListener("click", () => toggleDropdown());

    return (
        <>
            <DropdownMenu className='dropdown' id='dropdown' onClick={handleDropClick}>
                <button>
                    {selected}
                    <span id="icon" className="material-symbols-outlined">
                        expand_more
                    </span>
                </button>
                <Menu>
                    {values.map((el, index) => <button key={index} onClick={() => Handle_Change(el)}>{el}</button>)}
                </Menu>
                <input value={selected} type="hidden" id="drop-value" />
            </DropdownMenu>
        </>
    )
}

export default Dropdown