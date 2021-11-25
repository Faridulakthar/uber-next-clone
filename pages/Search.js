import { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const Search = () => {

    const [ pickup, setPickup ] = useState("")
    const [ dropoff, setDropoff ] = useState("")

  return (
    <Wrapper>
      <BtnContainer>
        <Link href="/">
          <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BtnContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input 
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            />
          <Input 
            placeholder="where to?" 
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link href={{
          pathname: "/Confirmed",
          query: {
              pickup: pickup,
              dropoff: dropoff
          }
      }}>
            <ConfirmBtn>Confirm Locations</ConfirmBtn>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;
const BtnContainer = tw.div`
    bg-white px-4 
`;
const BackBtn = tw.img`
    h-12 cursor-pointer
`;
const InputContainer = tw.div`
     bg-white flex items-center px-4 mb-2
`;
const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`;
const Circle = tw.img`
    h-2
`;
const Line = tw.img`
    h-10
`;
const Square = tw.img`
    h-3
`;
const InputBoxes = tw.div`
    flex flex-col flex-1
`;
const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-sm p-2 outline-none border-none
`;
const PlusIcon = tw.img`
    w-10 h-10 rounded-full bg-gray-200 ml-3 cursor-pointer
`;
const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2 mb-4 rounded-sm
`;
const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmBtn = tw.div`
    bg-black text-white text-center mx-4 px-4 py-3 text-xl rounded-md uppercase tracking-wide cursor-pointer
`;
