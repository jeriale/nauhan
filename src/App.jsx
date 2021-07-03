import { useState, useEffect } from "react";

import styled from "@emotion/styled";

export const App = () => {
  const [total, setTotal] = useState(0);
  const [widthOption, setWidthOption] = useState(4);
  const [formData, setFormData] = useState({
    12: 0,
    11.5: 0,
    11: 0,
    10.5: 0,
    10: 0,
    9.5: 0,
    9: 0,
    8.5: 0,
    8: 0,
    7.5: 0,
    7: 0,
    6.5: 0,
    6: 0,
    5.5: 0,
    5: 0,
    4.5: 0,
    4: 0,
    3.5: 0,
    3: 0,
    2.5: 0,
    2: 0,
  });

  useEffect(() => {
    let result = 0;
    Object.keys(formData).forEach((length) => {
      result = result + (length * formData[length]);
    });
    setTotal(result);
  }, [formData]);

  const handleCounterChange = (event, length) => {
    formData[length]
      ? setFormData({
          ...formData,
          [length]:
            event.target.name === "sub"
              ? formData[length] - 1
              : formData[length] + 1,
        })
      : setFormData({
          ...formData,
          [length]:
            event.target.name === "sub"
              ? formData[length]
              : formData[length] + 1,
        });
  };

  const widthOptions = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const sortedFormData = Object.keys(formData).sort((a, b) => b - a);

  return (
    <Container>
      <Header>
        <Heading>{total} LF</Heading>
        {total ? <Heading>{`${Math.floor(((sortedFormData.reduce((acc, length) => length >= 8 ? acc + (formData[length] * length) : acc, 0)) / total) * 100)}% 8'+`}</Heading> : null}
        {total ? <Heading>{`${Math.floor(((sortedFormData.reduce((acc, length) => length >= 9 ? acc + (formData[length] * length) : acc, 0)) / total) * 100)}% 9'+`}</Heading> : null}
        <Heading>{Math.round((widthOption / 12) * total)} SQ FT</Heading>
      </Header>
      <LengthOptions>
        {widthOptions.map((width, index) => {
          if (index === 0) {
            return (
              <LeftOption
                active={widthOption === width}
                key={index}
                onClick={() => setWidthOption(width)}
              >
                {width}"
              </LeftOption>
            );
          }

          if (index === widthOptions.length - 1) {
            return (
              <RightOption
                active={widthOption === width}
                key={index}
                onClick={() => setWidthOption(width)}
              >
                {width}"
              </RightOption>
            );
          }

          return (
            <MiddleOption
              active={widthOption === width}
              key={index}
              onClick={() => setWidthOption(width)}
            >
              {width}"
            </MiddleOption>
          );
        })}
      </LengthOptions>
      <CounterItemContainer>
        {sortedFormData.map((length, index) => {
          return (
            <CounterItem key={index}>
              <Button
                wide
                name="add"
                onClick={(event) => handleCounterChange(event, length)}
              >
                {length.includes(".5") ? `${Math.floor(length)}½` : length}'
              </Button>
              <CounterDisplay name={length} value={formData[length]} />
              <Button
                sub
                name="sub"
                onClick={(event) => handleCounterChange(event, length)}
              >
                {length.includes(".5") ? `${Math.floor(length)}½` : length}'
              </Button>
            </CounterItem>
          );
        })}
      </CounterItemContainer>
    </Container>
  );
};

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "600px",
  height: "100vh",
  padding: '1rem'
}));

const Header = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: '1rem'
}));

const Heading = styled.span((props) => ({
  fontSize: "min(5vw, 3rem)",
}));

const LengthOptions = styled.div((props) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "1rem",
}));

const LeftOption = styled.button((props) => ({
  backgroundColor: props.active ? "white" : "rgba(50, 54, 59, 1.0)",
  color: props.active ? "black" : "#fff",
  fontSize: "min(3vw, 1.3rem)",
  border: "none",
  borderRadius: "20px 0px 0px 20px",
  width: `${100 / 13}%`,
  height: "8vh",
  cursor: "pointer",
}));

const MiddleOption = styled.button((props) => ({
  backgroundColor: props.active ? "white" : "rgba(50, 54, 59, 1.0)",
  color: props.active ? "black" : "#fff",
  fontSize: "min(3vw, 1.3rem)",
  border: "none",
  width: `${100 / 13}%`,
  height: "8vh",
  cursor: "pointer",
}));

const RightOption = styled.button((props) => ({
  backgroundColor: props.active ? "white" : "rgba(50, 54, 59, 1.0)",
  color: props.active ? "black" : "#fff",
  fontSize: "min(3vw, 1.3rem)",
  border: "none",
  borderRadius: "0px 20px 20px 0px",
  width: `${100 / 13}%`,
  height: "8vh",
  cursor: "pointer",
}));

const CounterItemContainer = styled.div((props) => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

const CounterItem = styled.div((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `${100 / 3}%`,
  height: "min(30px, 12vh)",
}));

const CounterDisplay = styled.input((props) => ({
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundColor: "rgba(50, 54, 59, 1.0)",
  color: "#ffffff",
  fontSize: 'min(3vw, 2rem)',
  textAlign: 'center',
  width: "min(12vw, 100px)",
  height: "8vh",
  border: 'none',
  padding: '1rem',
  '&:focus': {
    outline: 'none'
  }
}));

const Button = styled.button((props) => ({
  backgroundColor: props.sub
    ? "rgba(147, 39, 39, 0.9)"
    : "rgba(54, 115, 54, 0.9)",
  color: "#fff",
  fontSize: "min(3vw, 1.5rem)",
  border: "none",
  borderRadius: props.sub ? "0px 10px 10px 0px" : "10px 0px 0px 10px",
  width: "min(8vw, 100px)",
  height: "8vh",
  cursor: "pointer",
}));
