import styled from 'styled-components';

export const FilterContainer = styled.div`
display:flex;
flex-direction:column;
`

export const FilterLable = styled.label`
font-size:45px;
margin-bottom: 10px;
`

export const FilterInput = styled.input`
width: 450px;
height: 40px;
font-size: 32px;
border-radius: 8px;
padding-left: 15px;
cursor:pointer;

&:hover{
    background-color: #fff;
    animation: pulsare 2s ease-in-out;
    border-color:#9bf7fa;
}

@keyframes pulsare {
    0% {
        box-shadow: 0 0 10px #5ddcff,
            0 0 20px #4e00c2;
            background-color: #9bf7fa;
    }
}

`
