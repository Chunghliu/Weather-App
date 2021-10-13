// ./src/WeatherSetting.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import useWeatherApi from './useWeatherApi';
import WeatherCard from './WeatherCard';

const WeatherSettingWrapper = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
`;

const StyledInputList = styled.input`
  display: block;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  outline: none;
  width: 100%;
  max-width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  padding: 7px 10px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    margin: 0;
    letter-spacing: 0.3px;
    line-height: 1;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    border: 1px solid transparent;
    background-color: transparent;
    height: 35px;
    width: 80px;
    border-radius: 5px;

    &:focus,
    &.focus {
      outline: 0;
      box-shadow: none;
    }

    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
  }
`;

const Back = styled.button`
  && {
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.textColor};
  }
`;

const Save = styled.button`
  && {
    color: white;
    background-color: #40a9f3;
  }
`;

const useWeatherSetting = () => {
  //const [WeatherElement] = useWeatherApi();
  const [LocationsList] = useWeatherApi();
  const locations = LocationsList.locations;
  //const setFindLocation = props.FindLocation;
  const [FindLocation, setFindLocation] = useState({
    place: '沙田',
    value: '0',
    unit: 'C',
  });

  const findLocation = (e) => {
    console.log(e.target.value);
    const locationElement = locations.find((element) => {
      return element.place === e.target.value;
    });
    console.log(locationElement);
    if (locationElement != undefined) {
      setFindLocation({
        place: locationElement.place,
        value: locationElement.value,
        unit: locationElement.unit,
      });
    } else {
      //console.log('undefined');
    }
  }

  return {
    FindLocation,
    render: (
      <WeatherSettingWrapper>
        <Title>設定</Title>
        <StyledLabel htmlFor="location">地區</StyledLabel>
        <StyledInputList list="location-list" id="location" name="location" onChange={findLocation} />
        <datalist id="location-list">
          {/* 定義 datalist 中的 options*/}
          {locations.map((location, i) => (
            <option key={i} value={location.place} />
          ))}
        </datalist>
        <ButtonGroup>
          <Back>返回</Back>
          <Save>儲存</Save>
        </ButtonGroup>
      </WeatherSettingWrapper>
    )
  };
};

export default useWeatherSetting;