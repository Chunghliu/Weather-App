// ./src/WeatherSetting.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import useWeatherApi from './useWeatherApi';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const WeatherSettingWrapper = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 15px;
`;

const Title = styled.div`
  font-size: 24px;
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
  const [WeatherElement, LocationsList] = useWeatherApi();
  const locations = LocationsList.locations;
  const [FindLocation, setFindLocation] = useState({
    place: '沙田',
    value: '0',
    unit: 'C',
  });

  const findLocation = (event, value) => {
    console.log('value');
    console.log(value); // should be return an object
    if (value != null) {
      var locationElement = locations.find((element) => {
        return element.place === value.place;
      });
    }

    console.log(locationElement);
    if (locationElement !== undefined) {
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

        <Autocomplete
          id="location-list"
          options={locations}
          getOptionLabel={(option) => option.place}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="地區" variant="outlined" />}
          onChange={findLocation}
        />
        {<datalist id="location-list">
          {locations.map((location, i) => (
            <option key={i} value={location.place} />
          ))}
        </datalist>}
        {/* <ButtonGroup>
          <Back>返回</Back>
          <Save>儲存</Save>
        </ButtonGroup> */}
      </WeatherSettingWrapper>
    )
  };
};

export default useWeatherSetting;