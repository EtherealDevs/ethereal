import React from 'react';
import PropTypes from 'prop-types';
import './Background.css'; // archivo de estilos

class Background extends React.Component {
    render() {
      const { color, children } = this.props;
      const styles = {
        backgroundColor: color,
      };
      return (
        <div className="background" style={styles}>
          {children}
        </div>
      );
    }
  }

  Background.propTypes = {
    color: PropTypes.string.isRequired,
  };