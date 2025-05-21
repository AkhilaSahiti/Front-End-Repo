import PropTypes from 'prop-types'
import Button from './Button'
// const Header = (props) => {
//     return (
//         <header>
//             <h1>Hello from React {props.title}</h1>
//         </header>
//     )
// }
const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.info('button is lcicked')
    // }
    return (
        <header>
            <h1 style={{color: 'red', backgroundColor: 'black'}}>Hello from React {title}</h1>
            <h2 style={headingStyle}>Sahiti</h2>
            <Button color={showAdd ? 'red' : 'green'} text = {showAdd ? 'Close': 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'default title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
const headingStyle = {color: 'white', backgroundColor: 'blue'}
export default Header