import React from 'react'
interface Column {
  header: string; // Corrected from "haeder" to "header"
  accessor: string;
  className?: string; // Optional property
}
const Table = ({columns}:{columns:Column[]}) => {
  return (
    <div>
      <table></table>
    </div>
  )
}

export default Table
