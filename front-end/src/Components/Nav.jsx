import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  const Dropdown = ({ linkText, dropdownContent }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };

    return (
      <div>
        <Link className='' onClick={toggleDropdown}>
          {linkText} <FontAwesomeIcon icon={faAngleDown} />
        </Link>
        {dropdownVisible && (
          <div className="dropdown">
            {dropdownContent}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="top flex flex-row justify-center items-center gap-8 py-8 border-b-2 border-black roboto">
        <Link>Find a Pro</Link>
        <Link className='text-[#ECA460]'>Set Up My Business</Link>
      </div>
      <div className="bottom flex flex-row justify-center items-center gap-8 py-8 roboto">
        <Dropdown linkText="CATEGORIES">
          {/* Add dropdown content for "Categories" */}
        </Dropdown>
        <Dropdown linkText="ALL POSTS">
          {/* Add dropdown content for "ALL POSTS" */}
        </Dropdown>
        <Dropdown linkText="HAIR">
          {/* Add dropdown content for "HAIR" */}
        </Dropdown>
        <Dropdown linkText="SKIN">
          {/* Add dropdown content for "SKIN" */}
        </Dropdown>
        <Dropdown linkText="MAKEUP">
          {/* Add dropdown content for "MAKEUP" */}
        </Dropdown>
        <Dropdown linkText="FOR PROS">
          {/* Add dropdown content for "FOR PROS" */}
        </Dropdown>
        <Dropdown linkText="OUR COMMUNITY">
          {/* Add dropdown content for "OUR COMMUNITY" */}
        </Dropdown>
      </div>
    </div>
  );
};

export default Nav;
