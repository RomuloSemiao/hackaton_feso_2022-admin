const Historic = () => {
    fetch("https://sodafront-ehealth-backend.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((json) => {
        console.log({json})
      })

  return (
    <>Historic</>
  )
}

export { Historic }
