import { getProviders, signIn} from 'next-auth/react'


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
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}


export default signin
