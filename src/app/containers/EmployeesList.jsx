import React from 'react';
import EmployeeData from './EmployeeData.jsx';
import { connect } from 'react-redux';
import { getList } from '../actions/employeeListActions';
import { I18n, Trans } from 'react-i18next';

export class EmployeesList extends React.Component {

  componentDidMount() {
    this.props.getList();
  }

  render() {
    if (this.props.loading) {
      return null;
    } else {
      const employeeData = this.props.employeeList.map(employee => {
        return <EmployeeData key={ employee.id } id={ employee.id } employee={ employee } />
      });
      return (
        <I18n ns="translations">
          {
            (t) => (
              <section className='employee-list'>
                <div className='row'>
                  <div className='container'>
                    <table className='employee-list_table col-12'>
                      <caption>{t('employeeList.header')}</caption>
                      <thead className='employee-list_table-heading'>
                        <tr>
                          <th>{t('employeeList.full-name')}</th>
                          <th>{t('employeeList.role')}</th>
                          <th>{t('employeeList.experience')}</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className='employee-list_table-body'>
                        { employeeData }
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )
          }
        </I18n>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    employeeList: state.employeeListReducer.employeeList,
    loading: state.employeeListReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
