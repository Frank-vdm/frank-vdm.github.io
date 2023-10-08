import styled from 'styled-components'

interface GridProps {
  columns: number
  gutter?: number
}

// const Grid: React.FC<GridProps> = ({ columnCount, gutterWidth, children }) => {
//     return <GridContainer columnCount={columnCount} gutterWidth={gutterWidth}>{children}</GridContainer>;
// };

// export default Grid;

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: ${(props) => props.gutter}px;
`
