import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Skicka gärna till ett loggsystem här
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-4 rounded-xl border">
          <h2 className="font-semibold mb-2">Något gick fel</h2>
          <pre className="text-sm opacity-80 whitespace-pre-wrap">
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
