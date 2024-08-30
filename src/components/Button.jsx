const classes = {
    width: '250px',
    height: '50px',
    border: '#5EFFFF solid 2px',
    borderRadius: '25px',
    backgroundColor: 'transparent',
}

export default function Button({children}) {
    return(
        <button style={classes}><a className="buttonLink" href="#aboutMe"><p style={{margin: '0 auto'}}>{children}</p></a></button>
    )
}