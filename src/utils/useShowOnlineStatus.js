const useShowOnlineStatus = ({onlinestatus}) =>{
    if(onlinestatus == true){
      return(
        <span className="greendot"></span>
      )
    }
    else{
      return(
        <span className="reddot"></span>
      )
    }
} 

export default useShowOnlineStatus;