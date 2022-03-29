import styled from 'styled-components'

const Container = styled.div`
  margin: 10rem auto;
  padding: 1rem;
  height: 30rem;
  width: 28rem;
  text-align: center;
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  div {
    padding: 1rem;
    height: 20rem;
    width: 26rem;
    font-size: 1.6rem;
    font-style: italic;
    word-wrap: break-word;
  }

  button {
    height: 2rem;
    width: 8rem;
    background: palevioletred;
    border-radius: 3px;
    border: 2px solid palevioletred;
    font-size: 1rem;
    font-weight: 700;
    color: white;
  }

  button:hover {
    cursor: pointer;
  }
`

const Card = ({ content, author, onNewQuote }) => {
  return (
    <Container>
      <h1>Quote</h1>
      <div>
        <p>{`"${content}"`}</p>
        <p>{author}</p>
      </div>
      <button onClick={onNewQuote}>New Quote</button>
    </Container>
  )
}

export default Card
