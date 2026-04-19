const Cell = ({ content, index, markCell }) => {
  return (
    <div className="cell" onClick={() => markCell(index)}>
      {content}
    </div>
  )
}

export default Cell
