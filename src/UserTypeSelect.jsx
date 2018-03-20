import React from 'react'

const UserTypeSelect = ({userTypeList, changeUserType}) => {

  let selectOptions = userTypeList.map((user, i) =>
    <option key={i} value={user.name}>{user.name}</option>
  )

  return (
    <select onChange={changeUserType} className="form-control">
      {selectOptions}
    </select>
  )
}

export default UserTypeSelect
