import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import NoResultText from "./NoResultText";
import SearchResult from "./SearchResult";

export default function SearchSection() {
    return (
        <div className="search_section">
            <div className="search_section_input">
                <IoSearchOutline />
                <input type="text" name="" id="" placeholder="Search..." />
            </div>
            <div className="search_section_input_result">
                {/* <NoResultText /> */}
                <SearchResult/>
            </div>
        </div>
    );
}
