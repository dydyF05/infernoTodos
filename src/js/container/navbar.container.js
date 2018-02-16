import { connect } from 'inferno-redux'

import NavbarComponent from '../ui/Navbar';


const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => ({
})

const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent)
export default Navbar
