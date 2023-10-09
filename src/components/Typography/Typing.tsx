import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

type TypingProps = {
  words: string[]
}

export const Typing: React.FC<TypingProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(words[0])
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTypingForwards, setIsTypingForwards] = useState(true)
  const [showCarat, setShowCarat] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTypingForwards) {
        if (currentCharIndex < currentWord.length) {
          setCurrentCharIndex(currentCharIndex + 1)
        } else {
          setIsTypingForwards(false)
          setTimeout(() => {
            setIsTypingForwards(true)
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
            setCurrentWord(words[(currentWordIndex + 1) % words.length])
            setShowCarat(true)
            setCurrentCharIndex(0)
          }, 5000)
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(currentCharIndex - 1)
        } else {
          setIsTypingForwards(true)
          setShowCarat(true)
        }
      }
    }, 300)

    return () => clearInterval(intervalId)
  }, [currentCharIndex, currentWord, currentWordIndex, isTypingForwards, words])

  useEffect(() => {
    const caratIntervalId = setInterval(() => {
      setShowCarat(!showCarat)
    }, 300)

    return () => clearInterval(caratIntervalId)
  }, [showCarat])

  return (
    <TypingWrapper>
      {currentWord.substring(0, currentCharIndex)}
      {showCarat && <Carat>|</Carat>}
    </TypingWrapper>
  )
}

const TypingWrapper = styled.span`
  display: inline-block;
`

const Carat = styled.span`
  animation: blink 1s infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`
