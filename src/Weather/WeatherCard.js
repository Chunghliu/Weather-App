import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CogIcon } from '../Images/cog.svg';

// STEP 1：在參數中帶入 props 即可取得外層組件傳入的資料
const WeatherCard = (props) => {
    /* const {
        lastUpdateTime,
        description,
        humidity,
        icon,
        isLoading,
    } = WeatherElement; */
    console.log('props.result');
    const {place, value, unit} = props.FindLocation;
    //const { place, value, unit } = props;
    //console.log(place + value + unit);

    // STEP 2：定義帶有 styled 的 component
    const WeatherCardWrapper = styled.div`
        position: relative;
        min-width: 360px;
        box-shadow: ${({ theme }) => theme.boxShadow};
        background-color: ${({ theme }) => theme.foregroundColor};
        box-sizing: border-box;
        padding: 30px 15px;
        `;

    const Location = styled.div`
        font-size: 28px;
        color: ${({ theme }) => theme.titleColor};
        margin-bottom: 20px;
        `;

    const Description = styled.div`
        font-size: 16px;
        color: ${({ theme }) => theme.textColor};
        margin-bottom: 30px;
        `;

    const CurrentWeather = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        `;

    const Temperature = styled.div`
        color: ${({ theme }) => theme.temperatureColor};
        font-size: 96px;
        font-weight: 300;
        display: flex;
        `;

    const Celsius = styled.div`
        font-weight: normal;
        font-size: 42px;
        `;

    /* const Rain = styled.div`
      display: flex;
      align-items: center;
      font-size: 16x;
      font-weight: 300;
      color: #828282;
    `; */

    const Icon = styled.div`
        flex-basis: 30%;
        `;
    // STEP 2：為 CogIcon 添加樣式
    const Cog = styled(CogIcon)`
        position: absolute;
        top: 30px;
        right: 15px;
        width: 15px;
        height: 15px;
        cursor: pointer;
        `;
    /* const buttonDefault = () => css`
      display: block;
      width: 120px;
      height: 30px;
      font-size: 14px;
      background-color: transparent;
      color: #212121;
    `; */

    return (
        <WeatherCardWrapper>
            <Cog />
            <Location>{place}</Location>
            < CurrentWeather >
                <Temperature>
                    {value} <Celsius>°{unit}</Celsius>
                </Temperature>
            </CurrentWeather>
            {/* <Icon><img src={WeatherElement.icon} alt="Icon" /></Icon> */}
        </WeatherCardWrapper >
    );
};

export default WeatherCard;