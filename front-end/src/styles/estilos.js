import styled from "styled-components"

export const Container = styled.div` 
   width: 100%;
   max-width: 800px;
   paddingLeft: 100px;
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
`;

export const Title = styled.h2 `
    margin-top: 20px;
    text-align: center;
`;

export const FormActionContainer = styled.form`
    max-width: 100%;
    display: flex;
    gap: 10px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 20px auto;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 450px;
	padding: 0 10px;
	border: 1px solid #bbb;
	border-radius: 5px;
	height: 40px;
`;

export const Label = styled.label``;

export const Button = styled.button `
    padding: 20px;
	cursor: pointer;
    border-radius: 5px;
    border: none;
	background-color: #2c73d2;
	color: white;
	height: 62px;
    justify-content: center;  
`;

export const Table = styled.table `
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    
    margin: 20px auto;
    word-break: break-all;
    grid-template-rows: repeat(30, 30px);

`;

export const Tbody = styled.tbody`
    Tr:nth-child(odd) { background-color: lightgray; color: black; font-weight:bold};
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
   padding-left: 15px;
   text-align: start;
   border-bottom: inset;
   padding-bottom: 5px;
   padding-top: 20px;

`;

export const Td = styled.td`
   padding-left: 15px;
   padding-top: 15px;
   hover:{background-color:#CCC;color:#fff;};
   width: ${(props) => (props.width ? props.width : "auto")}; 
`;
