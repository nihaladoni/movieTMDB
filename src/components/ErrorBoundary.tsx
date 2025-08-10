import React from 'react'
import { Flex, HeadingTitle } from '../styles/sharedStyles'
import { HomeButton } from '../pages/notFound/NotFound.style'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          cover
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <HeadingTitle style={{ color: 'red' }}>
            {this.state.error?.message}
          </HeadingTitle>
          <HomeButton onClick={() => (window.location.href = '/')}>
            Go to Home
          </HomeButton>
        </Flex>
      )
    }
    return this.props.children
  }
}
