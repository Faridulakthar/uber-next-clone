import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase/firebase'

const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>Login to access your account</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInBtn onClick={() => {signInWithPopup(auth, provider)}}>
                Sign in with Google
            </SignInBtn>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`
const SignInBtn = tw.button`
    bg-black text-white text-center w-full py-4 mt-8 self-centered rounded-sm shadow-sm
`
const UberLogo = tw.img`
    h-10 w-auto  object-contain self-start
`
const Title = tw.div`
    text-5xl pt-8 text-gray-500
` 
const HeadImage = tw.img`
    object-contain w-full
`