import React from "react";
import axios from "axios";

interface P {}

interface S {
  password: string;
}

export default class Password extends React.Component<P, S> {
  constructor(props: P) {
    super(props);

    this.state = {
      password: ""
    };
  }

  componentDidMount = async () => {
    this.refreshPassword();
  };

  render() {
    return (
      <div>
        <h2>{this.state.password}</h2>
        <button onClick={this.refreshPassword}>Refresh</button>
      </div>
    );
  }

  private refreshPassword = async () => {
    const res = await axios.post(
      "http://localhost:8080/graphql",
      "{ password }"
    );
    const password = res.data.data.password;

    this.setState({ password });
  };
}
