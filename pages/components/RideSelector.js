import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../../data/carList';

const RideSelector = ({ pickupCoords, dropoffCoords }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${dropoffCoords[0]},${dropoffCoords[1]}?access_token=pk.eyJ1IjoiZmFyaWR1bGFrdGhhciIsImEiOiJja3c1MXMydXkxc3o1MzBybzh6djlmaW14In0.c9e-XSDn1pDHIDFuKILj9w`
    )
    .then(res => res.json())
    .then(data => {
        setRideDuration(data.routes[0].duration / 100)
    })
  }, [pickupCoords, dropoffCoords]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more.</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImg src={car.imgUrl} />
            <Details>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </Details>
            <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))} 
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1 overflow-y-scroll flex flex-col
`;
const Title = tw.div`
    text-gray-500  text-center text-xs py-2 border-b
`;
const CarList = tw.div`
    overflow-y-scroll
`;
const Car = tw.div`
    flex p-4 items-center
`;
const CarImg = tw.img`
    h-14 mr-4
`;
const Details = tw.div`
    flex-1 
`;
const Service = tw.div`
    font-medium
`;

const Time = tw.div`
    text-xs text-blue-500
`;
const Price = tw.div`
    text-sm font-medium
`;
