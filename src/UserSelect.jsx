import React from 'react'

const UserSelect = ({current, userList, changeUser, boxType}) => {

  let selectOptions = userList.map((user, i) =>
    <option key={i} value={user.id}>{user.name}</option>
  )

  if (selectOptions.length === 0) {
    return (<div />)
  }

  return (<div>
    <h3>{boxType}</h3>
    <select selected={current} onChange={changeUser} className="form-control">
        <option value="" selected disabled hidden>--- select ---</option>
      {selectOptions}
    </select>
    </div>
  )
}

export default UserSelect
