import React, { useState, useEffect } from "react"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TextField from "@material-ui/core/TextField"
import { Link } from "gatsby"
import axios from "axios"
import "./sheet.scss"

const columns = [
  { id: "char_id", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "birthday", label: "Date of Birth", minWidth: 180 },
  { id: "occupation", label: "Occupation", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 80,
  },
]

export default function Sheet() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [data, setData] = useState({ characters: [] })
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  useEffect(() => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?category=${category}&name=${name}`)
      .then(res => setData({ characters: res.data }))
  })
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleCategoryChange = event => {
    setCategory(event.target.value)
  }
  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className="sheet">
      <div className="filter-row">
        <TextField
          id="category-filter"
          label="Filter by category"
          value={category}
          onChange={handleCategoryChange}
          type="search"
        />
        <TextField
          id="name-search"
          label="Search by name"
          value={name}
          onChange={handleNameChange}
          type="search"
        />
      </div>
      <TableContainer className="sheet-container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.characters
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                    <TableCell key={columns[3].id}>
                      <Link
                        to="../detail"
                        state={{
                          url: `https://www.breakingbadapi.com/api/characters/${row[columns[0].id]}`,
                        }}
                      >
                        View details
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.characters.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
