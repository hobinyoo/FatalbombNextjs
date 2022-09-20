import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: pink;
  border: none;
  color: white;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
export default function Menu () {
    return (    
        <nav>
            <Link href="/">
            <StyledButton>버튼</StyledButton>
            </Link>
            <Link href="/about">
            <StyledButton>어바웃</StyledButton>
            </Link> 
          

        </nav>
    )
}

