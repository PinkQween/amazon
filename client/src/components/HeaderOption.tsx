import styled from "styled-components";
import { HeaderOptionType } from "./types";

const HeaderOptionComponent = ({ small, large }: HeaderOptionType) => {
  return (
    <HeaderOption>
      <span className="text-[10px]">
            {small}
        </span>
      <span className="text-[13px] font-extrabold">
            {large}
        </span>
    </HeaderOption>
  )
}

export default HeaderOptionComponent;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`