const branchDetails = {
  legend: 'Branch Name',
  rows: [{
    span: 1,
    fields: [
      {
        label: 'Branch Name',
        key: 'branch',
        type: 'text',
        span: 1,
        value: 'Globex Headquarters'
      }
    ]
  }]
}

const personalDetails = {
  legend: 'Personal Details',
  rows: [
    {
      span: 5,
      fields: [
        {
          label: 'Title',
          key: 'title',
          type: 'select',
          options: ['Mr.', 'Mrs.'],
          span: 1,
          value: 'Mr.'
        },
        {
          label: 'First Name',
          key: 'fname',
          type: 'text',
          span: 1,
          value: 'Lance'
        },
        {
          label: 'Last Name',
          key: 'lname',
          type: 'text',
          span: 3,
          value: 'Uppercut'
        },
      ]
    },
    {
      span: 5,
      fields: [
        {
          label: 'Date of Birth',
          key: 'dob',
          type: 'date',
          span: 1,
          value: '1986-01-16'
        },
        {
          label: 'Email Address',
          key: 'email',
          type: 'email',
          span: 4,
          value: 'luppercut@globex.com'
        }
      ]
    }
  ]
}

module.exports = { branchDetails: branchDetails, personalDetails: personalDetails }