import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  background-color: #01af9b;
  height: 62px;
  width: 365px;
  position: relative;
`

export const Card = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export const Ava = styled.div`
  align-self: center;
  padding-left: 5px;
`

export const Sign = styled.div`
  background-color: slategray;
  color:white;
  height: 15px;
  font-size: 10px;
  width: fit-content;
  position: absolute;
  padding: 20px;
`

export const Label = styled.p`
  color: white;
  font-size: 10px;
  margin-left: 5px;
  padding-right: 5px;
`
