
function formatTime(date: string) {

  if(date){
    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day = date.slice(8,10)
    const newDate = `${day}/${month}/${year}`
    return newDate
  } else {
    return ''
  }
  
}

export default formatTime