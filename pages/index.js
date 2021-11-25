import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'



export default function Home() {

  const router = useRouter()

  const [user, setUser] = useState(null)

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage 
            src={user && user.photoUrl} 
            onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/Search">
          <ActionButton>
            <ActionBtnImg src="https://i.ibb.co/cyvcpfF/uberx.png"/>
            Ride</ActionButton>
            </Link>
          <ActionButton>
          <ActionBtnImg src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels</ActionButton>
          <ActionButton>
          <ActionBtnImg src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve</ActionButton>
        </ActionButtons>
        <InputBtn>Where to?</InputBtn>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen overflow-visible
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div `
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div` 
  flex items-center 
`

const Name = tw.div`
mr-4 w-12 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div` 
  flex
`

const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionBtnImg = tw.img`
  h-3/5
`

const InputBtn = tw.div`
  h-20 bg-gray-200 p-4 flex items-center text-xl mt-8 rounded-lg
`