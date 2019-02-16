import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withTaskstoreService } from '../../components/hoc'
import { fetchTasks } from '../../actions'
import { compose } from '../../utils'

import Pagination from '../../components/pagination'

class PaginationContainer extends Component {
  constructor (props) {
    super(props)

    this.onChangePage = (page) => {
      this.props.fetchTasks(Number(page), this.props.sortField)
    }

    this.handleFirstPageButtonClick = () => {
      this.onChangePage(1)
    }

    this.handleBackButtonClick = () => {
      this.onChangePage(this.props.currentPage - 1)
    }

    this.handleNextButtonClick = () => {
      this.onChangePage(this.props.currentPage + 1)
    }

    this.handleLastPageButtonClick = () => {
      this.onChangePage(
        Math.max(1, Math.ceil(this.props.totalTaskCount / this.props.itemsPerPage))
      )
    }
  }

  render () {
    let { currentPage, itemsPerPage, totalTaskCount } = this.props

    return (
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalTaskCount={totalTaskCount}
        handleFirstPageButtonClick={this.handleFirstPageButtonClick}
        handleBackButtonClick={this.handleBackButtonClick}
        handleNextButtonClick={this.handleNextButtonClick}
        handleLastPageButtonClick={this.handleLastPageButtonClick}
      />
    )
  }
}

const mapStateToProps = ({ totalTaskCount, currentPage, itemsPerPage, sortField }) => {
  return { totalTaskCount, currentPage, itemsPerPage, sortField }
}

const mapDispatchToProps = (dispatch, { taskstoreService }) => {
  return {
    fetchTasks: fetchTasks(taskstoreService, dispatch)
  }
}

export default compose(
  withTaskstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PaginationContainer)
