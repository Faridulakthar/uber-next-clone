import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { useRouter  } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirmed = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [ pickupCoords, setPickupCoords ] = useState([0, 0]);
    const [ dropoffCoords, setDropoffCoords ] = useState([0, 0]);

    const getPickupCoords = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiZmFyaWR1bGFrdGhhciIsImEiOiJja3c1MXMydXkxc3o1MzBybzh6djlmaW14In0.c9e-XSDn1pDHIDFuKILj9w",
            limit: 1
        })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoords(data.features[0].center)
        })
    }

    const getDropoffCoords = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiZmFyaWR1bGFrdGhhciIsImEiOiJja3c1MXMydXkxc3o1MzBybzh6djlmaW14In0.c9e-XSDn1pDHIDFuKILj9w",
            limit: 1
        })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoords(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoords(pickup)
        getDropoffCoords(dropoff)
    }, [pickup, dropoff])


    return (
        <Wrapper>
            <BtnContainer>
                <Link href="/Search">
                    <BackBtn src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </BtnContainer>
            <Map 
                pickupCoords = {pickupCoords}
                dropoffCoords = {dropoffCoords}
            />
            <RideContainer>
                <RideSelector 
                    pickupCoords = {pickupCoords}
                    dropoffCoords = {dropoffCoords}
                />
                <ConfirmBtnContainer>
                    <ConfirmBtn>Confirm UberX</ConfirmBtn>
                </ConfirmBtnContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirmed

const Wrapper = tw.div`
    flex flex-col h-screen
`
const RideContainer = tw.div`
    flex flex-col flex-1 h-1/2
`
const ConfirmBtnContainer = tw.div`
    border-t-2
`
const ConfirmBtn = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center rounded-md text-xl 
`
const BtnContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
const BackBtn = tw.img`
    h-10 object-contain
`;