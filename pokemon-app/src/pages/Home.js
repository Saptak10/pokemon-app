import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/user/userSlice'
import Spinner from '../components/Spinner/Spinner'

import Pokemons from "./Pokemons";

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.user
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <Pokemons /> 
    </div>
  )
}

export default Home