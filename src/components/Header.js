import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'


const Header = ({title}) => {
    const onClick=()=>{
        console.log('clicked')
    }
    return (
        <header className = 'header'>
            <h1>Task Tracker {title}</h1>
            <Button color = 'green' text= 'Add' 
            onClick = {onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'rahul',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color:'green', 
//     backgroundColor:'black'
// }

export default Header
