import styled from "styled-components";


const StyledInput = styled.input`
  background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0;
  transition: background 0s ease-out 0s;
  color: #bfbfbf;
  min-height: 35px;
  display: initial;
  width: 50%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #525252;
    }
`;

const CustomInput = ({ ...props }) => {
    return (       
                <StyledInput
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                ></StyledInput>
           
    )
}


export default CustomInput 