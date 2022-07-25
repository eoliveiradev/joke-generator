
import axios from "axios";
import { useEffect, useState, useRef } from 'react';
import { NewJokeButtonContainer, Container, JokeContent, UserProfile } from './styles';

const USER_DATA_API_URL = "https://api.github.com/users/oZoiko"
const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart"
let alreadyShown: string[] = []

interface USER_DATA_FORMAT {
  "avatar": string;
  "name": string;
  "profile_url": string;
}

export function JokeGenerator() {

  const [jokeSetup, setJokeSetup] = useState('')
  const [jokeCatch, setJokeCatch] = useState('')
  const [userData, setUserData] = useState<USER_DATA_FORMAT>({ "avatar": "", "name": "", "profile_url": "" })
  const [isFetching, setIsFetching] = useState(false)

  let callbackCount: number = 0
  function getJoke() {
    setIsFetching(true)
    axios.get(JOKE_API_URL)
      .then(response => {
        if (!alreadyShown.includes(response.data.id) || callbackCount > 2) {
          setJokeSetup(response.data.setup)
          setJokeCatch(response.data.delivery)
          alreadyShown.push(response.data.id)
          console.log("Already shown: ", alreadyShown)
          setIsFetching(false)
          callbackCount = 0;
        }
        else {
          callbackCount++;
          getJoke()
        }
      })
      .catch(err => console.error(err))
  }

  function getUserData() {
    axios.get(USER_DATA_API_URL)
      .then(response => {
        let data = {
          "avatar": response.data.avatar_url,
          "name": response.data.name,
          "profile_url": response.data.html_url
        }
        setUserData(data)
      })
  }

  const componentFirstLoad = useRef(true);
  useEffect(() => {
    if (componentFirstLoad.current === true) {
      getJoke();
      getUserData();
      componentFirstLoad.current = false;
    }
  }, [])


  return (
    <Container>
      <div className='joke__wrapper'>
        <UserProfile>
          <div className='user__info'>
            <a href={userData.profile_url}><img src={userData.avatar}></img></a>
            <span className='user__name'>
              <h1>{userData.name}</h1>
              <a href={userData.profile_url}>@{userData.name}</a>
            </span>
          </div>
        </UserProfile>
        <JokeContent>
          <p>{jokeSetup}</p>
          <p>{jokeCatch}</p>
        </JokeContent>
      </div>
      <NewJokeButtonContainer>
        <button
          disabled={isFetching}
          onClick={() => getJoke()}
        >
          New Joke
        </button>
      </NewJokeButtonContainer>
    </Container>
  )
}