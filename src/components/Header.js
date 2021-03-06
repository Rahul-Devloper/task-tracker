import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className = 'header'>
            <h1>Task Tracker {title}</h1>
            <Button color = {showAdd?'red':'green'} text= {showAdd ? 'Close':'Add'} 
            onClick = {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Rahul',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color:'green', 
//     backgroundColor:'black'
// }

export default Header
