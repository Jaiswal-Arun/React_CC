import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-100 text-black p-4 text-3xl'>Github followers: {data.followers}
    <img className="mx-auto my-3" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
