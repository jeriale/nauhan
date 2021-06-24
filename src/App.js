import { useState } from 'react';

import styled from '@emotion/styled';

export const App = () => {
  
  const [formData, setFormData] =
    useState({
      "required": 0,
      "12": 0,
      "11-1/2": 0,
      "11": 0,
      "10-1/2": 0,
      "10": 0,
      "9-1/2": 0,
      "9": 0,
      "8-1/2": 0,
      "8": 0,
      "7-1/2": 0,
      "7": 0,
      "6-1/2": 0,
      "6": 0,
      "5-1/2": 0,
      "5": 0,
      "4-1/2": 0,
      "4": 0,
      "3-1/2": 0,
      "3": 0,
      "2-1/2": 0,
      "2": 0
    });

    const handleCounterChange = (event, property) => {
      console.log(property)
      event.target.name === "sub"
        ? setFormData({
            ...formData,
            [property]: formData[property] - 1
          })
        : setFormData({
            ...formData,
            [property]: formData[property] + 1
          });
    }

  return (
    <Container>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "12")}>-</Button>
        <CounterDisplay>{formData["12"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "12")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "11-1/2")}>-</Button>
        <CounterDisplay>{formData["11-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "11-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "11")}>-</Button>
        <CounterDisplay>{formData["11"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "11")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "10-1/2")}>-</Button>
        <CounterDisplay>{formData["10-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "10-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "10")}>-</Button>
        <CounterDisplay>{formData["10"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "10")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "9-1/2")}>-</Button>
        <CounterDisplay>{formData["9-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "9-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "9")}>-</Button>
        <CounterDisplay>{formData["9"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "9")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "8-1/2")}>-</Button>
        <CounterDisplay>{formData["8-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "8-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "8")}>-</Button>
        <CounterDisplay>{formData["8"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "8")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "7-1/2")}>-</Button>
        <CounterDisplay>{formData["7-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "7-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "7")}>-</Button>
        <CounterDisplay>{formData["7"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "7")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "6-1/2")}>-</Button>
        <CounterDisplay>{formData["6-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "6-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "6")}>-</Button>
        <CounterDisplay>{formData["6"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "6")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "5-1/2")}>-</Button>
        <CounterDisplay>{formData["5-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "5-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "5")}>-</Button>
        <CounterDisplay>{formData["5"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "5")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "4-1/2")}>-</Button>
        <CounterDisplay>{formData["4-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "4-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "4")}>-</Button>
        <CounterDisplay>{formData["4"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "4")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "3-1/2")}>-</Button>
        <CounterDisplay>{formData["3-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "3-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "3")}>-</Button>
        <CounterDisplay>{formData["3"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "3")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "2-1/2")}>-</Button>
        <CounterDisplay>{formData["2-1/2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "2-1/2")}>+</Button>
      </CounterItem>
      <CounterItem>
        <Button name="sub" onClick={event => handleCounterChange(event, "2")}>-</Button>
        <CounterDisplay>{formData["2"]}</CounterDisplay>
        <Button name="add" onClick={event => handleCounterChange(event, "2")}>+</Button>
      </CounterItem>
    </Container>
  );
}

const Container = styled.div(props => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '50vw',
  height: '100vh'
}));

const CounterItem = styled.div(props => ({
  display: 'flex',
  justifyContent: props.right && 'flex-end',
  padding: '1rem'
}));

const CounterDisplay = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
  width: '125px',
  height: '70px'
}));

const Button = styled.button(props => ({
  fontSize: '3rem',
  border: 'none',
  borderRadius: '10px',
  width: '70px',
  height: '70px'
}));