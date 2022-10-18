import React, { useContext, useState } from 'react'
import styles from '../styles/Chats.module.css';
import { collection,doc,getDoc,getDocs,query,serverTimestamp,setDoc,updateDoc,where } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const SearchBar = () => {
  const [userName,setUserName] = useState(null);
  const [user,setUser] = useState(false);
  const [error,setError] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const handleSearch = async () =>{
    const q = query(collection(db,"users"),where("displayName","==",userName))
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        setUser(doc.data());
      })
    }catch(error){
      setError(true)
    }
  }
  const handleKey =(e) =>{
    e.code == "Enter" && handleSearch();
  }

  const handleSelect = async()=>{
    // check whether chat exist with the user,if not create new chat
    const combinedId = 
    currentUser.uid > user.uid 
      ? currentUser.uid+user.uid 
      : user.uid+currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    }catch (error) {}
    console.log('error in selecting user')
    setUser(null);
    setUserName("")
    // create new user chat
  };


  return (
    <div style={{marginTop:'10px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input 
            style={{ width:'90%',background:'#222E35',border:'none',outline:'none',borderRadius:'25px',color:'white',fontWeight:'500',marginBottom:'10px' }}
            type="text" 
            name="search" 
            id="search"
            placeholder='Search a user'
            onKeyDown={handleKey}
            value={userName}
            onChange={(e)=>setUserName(e.target.value)} />
        </div>
        {/* For displaying search result */}
        {error && <span>User not found</span>}
        {user && <div onClick={handleSelect}>
        <div className={styles.chatsContainer} style={{marginBottom:"0"}}>
            <img style={{height: "40px",width: "40px",borderRadius:'50%'}} src={user.photoURL} alt="" />
            <div className="chatInfo">
                <span>{user.displayName}</span>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default SearchBar