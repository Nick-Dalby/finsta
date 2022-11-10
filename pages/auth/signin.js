import { getProviders, signIn} from 'next-auth/react'
import Header from '../../components/Header'


export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

const signin = ({ providers }) => {
  return (
    <>
    <Header />

    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-44 text-center'>
    <img src="/logo.svg" alt="" className='w-60'/>

    <div className='mt-14'>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-indigo-600 rounded-lg text-white' onClick={() => signIn(provider.id, { callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
      </div>
    </>
  )
}


export default signin
