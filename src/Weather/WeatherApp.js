import { React } from 'react';
// STEP 1：載入 emotion 的 styled 套件
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react'
import WeatherCard from './WeatherCard';
import useWeatherApi from './useWeatherApi';
import useWeatherSetting from './WeatherSetting';

//定義主題配色
const theme = {
  light: {
    backgroundColor: '#ededed',
    foregroundColor: '#f9f9f9',
    boxShadow: '0 1px 3px 0 #999999',
    titleColor: '#212121',
    temperatureColor: '#757575',
    textColor: '#828282',
  },
  dark: {
    backgroundColor: '#1F2022',
    foregroundColor: '#121416',
    boxShadow:
      '0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    titleColor: '#f9f9fa',
    temperatureColor: '#dddddd',
    textColor: '#cccccc',
  },
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherApp = () => {
  console.log('invoke function component')
  const [Temperature] = useWeatherApi();
  const {FindLocation, render} = useWeatherSetting();
  //const [currentWeather, setCurrentWeather] = useState({})

  /* const [currentTheme, setCurrentTheme] = useState('light'); */

 /*  useEffect(() => {
    console.log('Theme changed');
    changeTheme();
  },currentTheme);

  const changeTheme = (() => {
    if(currentTheme === 'light'){
      setCurrentTheme('dark');
    }
    if(currentTheme === 'dark'){
      setCurrentTheme('light');
    }
  }); */

  return (
    <ThemeProvider theme={theme.light}>
      <Container>
        {render}
        <WeatherCard FindLocation={FindLocation}/> 
      </Container>
    </ThemeProvider>
  );
};

export default WeatherApp;