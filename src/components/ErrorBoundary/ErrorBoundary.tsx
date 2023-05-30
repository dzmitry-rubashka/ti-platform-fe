import React from "react";
import Fallback from "components/Fallback";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <Fallback />;
    }
    return children;
  }
}

export default ErrorBoundary;
