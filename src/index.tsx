import * as React from 'react'

interface State {
  src: string
  isLoading: boolean
  hasError: boolean
}

interface ActionisLoading {
  type: 'SUCCESS'
  src: string
}

interface ActionError {
  type: 'ERROR'
  src: string
}

type Action = ActionisLoading | ActionError

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        src: action.src,
        isLoading: false,
        hasError: false,
      }
    case 'ERROR':
      return {
        ...state,
        src: action.src,
        isLoading: false,
        hasError: true,
      }
    default:
      return state
  }
}

const spacer = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

const initialState = (placeholder: string): State => ({
  isLoading: true,
  hasError: false,
  src: placeholder,
})

export interface UseBackgroundImageProps {
  src: string
  placeholder?: string
}

export function useBackgroundImage({ src, placeholder = spacer }: UseBackgroundImageProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState(placeholder))

  React.useEffect(() => {
    let image: HTMLImageElement = new Image()
    image.onload = () => dispatch({ type: 'SUCCESS', src })
    image.onerror = () => dispatch({ type: 'ERROR', src: placeholder })
    image.src = src

    return () => {
      image.onerror = () => null
      image.onload = () => null
      // @ts-ignore
      image = null
    }
  }, [src])

  return state
}
