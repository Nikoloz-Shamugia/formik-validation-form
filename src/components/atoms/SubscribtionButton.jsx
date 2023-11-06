const SubscribtionButton = () =>{
    const subscribtionButtonStyle = {
        width :'100%',
        background :'#5E54A4',
        padding :'15px 30px',
        borderRadius :'10px' ,
        color:'white' ,
        margin :'0px 0px 25px 0px',
        boxShadow :'0px 8px 0px 0px rgba(0, 0, 0, 0.15)'
      }
    return(
        <button style={subscribtionButtonStyle}>Try it free 7 days then $20/mo. thereafter</button>
    )
}

export default SubscribtionButton