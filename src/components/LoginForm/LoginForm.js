import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Card, CardItem, Input, Button, Spinner } from '../common';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  static propTypes = {
    emailChanged: PropTypes.func.isRequired,
    passwordChanged: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    error: PropTypes.string
  };

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        buttonText='Login'
        handlePress={this.onButtonPress}
      />
    );
  }


  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}

          />
        </CardItem>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

