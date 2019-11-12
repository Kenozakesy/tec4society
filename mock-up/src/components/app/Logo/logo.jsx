import React, {Component} from 'react';
import LogoImage from "../../../assets/images/logo-groen.png"

class Logo extends Component {


    handleShowLogo = () => {
        return <img src={LogoImage} alt="Logo" width="5%" className="m-2"/>;
    }

    render() {
        return (
            <div>
                {this.handleShowLogo()}
                {/*<h1>Dataplan</h1>*/}
            </div>
        );
    }
}

Logo.propTypes = {};

export default Logo;