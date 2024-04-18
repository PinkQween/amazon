import styled from "styled-components";
import { HeaderOptionType } from "./types";

const HeaderOptionComponent = ({ large, small }: HeaderOptionType) => {
  return (
    <HeaderOption>
        <span>
            {large}
        </span>
        <span>
            {small}
        </span>
    </HeaderOption>
  )
}

export default HeaderOptionComponent;

const HeaderOption = styled.div`

`