import React from 'react'

const SearchBar = () => {
  return (
    <div style={{height:'8vh' ,width:'100%',color:'#fff'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%' ,width:'100%'}}>
            <input 
            style={{ height:'70%',width:'90%',background:'#222E35',border:'none',outline:'none',borderRadius:'25px',color:'white',fontWeight:'500' }}
            type="text" 
            name="search" 
            id="search"
            placeholder='Search a user' />
        </div>
    </div>
  )
}

export default SearchBar