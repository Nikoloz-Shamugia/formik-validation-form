const formStyles = {
    formStyle :{
        height: '100%',
        width: '510px',
        borderRadius: '10px',
        background: "#FFF",
        boxShadow: "0px 8px 0px 0px rgba(0, 0, 0, 0.15)",
        padding: '50px 45px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputStyle :{
        width: '100%',
        height: '56px',
        border: '1px solid #5E54A4',
        padding: '0px 20px',
        margin: '0px 0px 30px 0px'
    },
    submitButtonStyles: {
        width :'100%',
        height: '56px',
        borderRadius :'15px',
        background :'#38CC8B',
        color :'white' ,
        boxShadow :'0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset',
        border:'none'
    },
    inputContainerStyle : {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position :'relative'
    },
    iconStyles :{
        width :'30px',
        position :'absolute',
        transform :'translate(0%,-50%)',
        right :'10px',
        top :'35%'
    },
    errorMessageStyle: {
        color :'red' ,
        fontSize :'15px' ,
        textAlign :'left',
        margin :'-30px 0px 10px -22px',
        width :'100%'
    }
}

export default formStyles