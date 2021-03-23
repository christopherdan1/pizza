import React from 'react'
import styled from 'styled-components'

const Search = () => {
    return (
        <div className={searchBar}>
            <h1>SearchBar</h1>
        </div>
    )
}

export default Search


const searchBar = styled.div`

                border: 1px solid #DDDDDD !important;
                border-radius: 32px !important;
                color: #222222 !important;
                display: -webkit-box !important;
                display: -moz-box !important;
                display: -ms-flexbox !important;
                display: -webkit-flex !important;
                display: flex !important;
                height: 66px !important;
                position: relative !important;
                width: 100% !important;
                box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.15), 0px 3px 8px rgba(0, 0, 0, 0.1) !important;
                --big-search-form-background: #FFFFFF !important;
                background-color: #FFFFFF !important;
`