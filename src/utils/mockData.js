const requests = [
  {
    id: 1,
    user_id: 1,
    from: "2019-09-01",
    to: "2019-09-05",
    period: 5,
    type: "anual",
    status: "approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "approved"
      }
    ]
  },
  {
    id: 2,
    user_id: 1,
    from: "2019-09-15",
    to: "2019-09-22",
    period: 7,
    type: "medical",
    status: "not-approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "not-approved"
      }
    ]
  },
  {
    id: 4,
    user_id: 1,
    from: "2019-09-26",
    to: "2019-09-26",
    period: 7,
    type: "compensatedFreeTime",
    status: "pending",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "pending"
      }
    ]
  },
  {
    id: 10,
    user_id: 1,
    from: "2019-07-26",
    to: "2019-07-26",
    period: 7,
    type: "anual",
    status: "not-approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "not-approved"
      }
    ]
  },
  {
    id: 11,
    user_id: 1,
    from: "2019-08-06",
    to: "2019-08-12",
    period: 7,
    type: "anual",
    status: "approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "approved"
      }
    ]
  },
  {
    id: 12,
    user_id: 1,
    from: "2019-06-26",
    to: "2019-07-02",
    period: 7,
    type: "anual",
    status: "not-approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "not-approved"
      }
    ]
  },
  {
    id: 5,
    user_id: 2,
    from: "2019-08-22",
    to: "2019-08-23",
    period: 2,
    type: "emergency",
    status: "not-approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "not-approved"
      }
    ]
  },
  {
    id: 2,
    user_id: 2,
    from: "2019-09-01",
    to: "2019-09-01",
    period: 1,
    type: "medical",
    status: "pending",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "pending"
      }
    ]
  },
  {
    id: 6,
    user_id: 2,
    from: "2019-09-20",
    to: "2019-09-26",
    period: 7,
    type: "emergency",
    status: "pending",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "pending"
      }
    ]
  },
  {
    id: 7,
    user_id: 3,
    from: "2019-08-30",
    to: "2019-09-06",
    period: 7,
    type: "anual",
    status: "pending",
    requestApprovals: []
  },
  {
    id: 8,
    user_id: 3,
    from: "2019-09-01",
    to: "2019-09-01",
    period: 1,
    type: "medical",
    status: "approved",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "pending"
      },
      {
        id: 2,
        type: "pm",
        status: "pending"
      }
    ]
  },
  {
    id: 9,
    user_id: 3,
    from: "2019-09-20",
    to: "2019-09-26",
    period: 7,
    type: "emergency",
    status: "pending",
    requestApprovals: [
      {
        id: 1,
        type: "hr",
        status: "pending"
      }
    ]
  }
];

const loggedUser = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiQWRtaW4iLCJsYXN0TmFtZSI6IklzdHJhdG9yIiwicm9sZXMiOlsiZW1wbG95ZWUiLCJwcm9qZWN0LW1hbmFnZXIiLCJodW1hbi1yZXNvdXJjZXMiLCJtYW5hZ2VyIiwiYWRtaW5pc3RyYXRvciJdLCJyZXF1ZXN0SWQiOiJjOTQwMDE2ZC1kODVhLTQ1YjItODk2ZS0xMzQzNzQwNGY3MzYiLCJpYXQiOjE1NjYzOTExMDYsImV4cCI6MTU2Njk5NTkwNn0.XW9r2tIXIduVJWjXvmSYGb0-yWV9L7hePufVo3JzxHE",
  id: 1,
  firstName: "Admin",
  lastName: "Istrator",
  image:
    "https://t2.ea.ltmcdn.com/en/images/6/8/9/happy_dog_names_male_and_female_2986_600.jpg",
  email: "admin@aroundy.com",
  status: "active",
  createdAt: "2019-08-13T11:45:14.504Z",
  updatedAt: "2019-08-13T11:45:14.504Z",
  OrganizationId: null,
  Roles: [
    {
      id: 1,
      name: "employee",
      createdAt: "2019-08-13T11:45:14.475Z",
      updatedAt: "2019-08-13T11:45:14.475Z",
      UserHasRole: {
        user_id: 1,
        role_id: 1,
        createdAt: "2019-08-13T11:45:14.526Z",
        updatedAt: "2019-08-13T11:45:14.526Z"
      }
    },
    {
      id: 2,
      name: "project-manager",
      createdAt: "2019-08-13T11:45:14.475Z",
      updatedAt: "2019-08-13T11:45:14.475Z",
      UserHasRole: {
        user_id: 1,
        role_id: 2,
        createdAt: "2019-08-13T11:45:14.526Z",
        updatedAt: "2019-08-13T11:45:14.526Z"
      }
    },
    {
      id: 3,
      name: "human-resources",
      createdAt: "2019-08-13T11:45:14.475Z",
      updatedAt: "2019-08-13T11:45:14.475Z",
      UserHasRole: {
        user_id: 1,
        role_id: 3,
        createdAt: "2019-08-13T11:45:14.526Z",
        updatedAt: "2019-08-13T11:45:14.526Z"
      }
    },
    {
      id: 4,
      name: "manager",
      createdAt: "2019-08-13T11:45:14.475Z",
      updatedAt: "2019-08-13T11:45:14.475Z",
      UserHasRole: {
        user_id: 1,
        role_id: 4,
        createdAt: "2019-08-13T11:45:14.526Z",
        updatedAt: "2019-08-13T11:45:14.526Z"
      }
    },
    {
      id: 5,
      name: "administrator",
      createdAt: "2019-08-13T11:45:14.475Z",
      updatedAt: "2019-08-13T11:45:14.475Z",
      UserHasRole: {
        user_id: 1,
        role_id: 5,
        createdAt: "2019-08-13T11:45:14.526Z",
        updatedAt: "2019-08-13T11:45:14.526Z"
      }
    }
  ],
  Organization: null,
  Balance: {
    id: 1,
    total: 25,
    remaining: 17,
    locked: 0,
    nextYear: 25,
    createdAt: "2019-08-13T11:45:14.504Z",
    updatedAt: "2019-08-13T11:45:14.504Z",
    UserId: 1
  },
  Contract: {
    
  },
  Requests: [...requests.filter(el => el.user_id === 1)],
  RequestApprovals: [],
  Teams: [
    {
      id: 1,
      name: "pisicile salbatice",
      Users: [1, 2, 3, 4]
    }
  ],
  Comments: []
};

bosses = [
  {
    id: 1,
    name: "Florina Vasile"
  },
  {
    id: 2,
    name: "Big Shaq"
  },
  {
    id: 3,
    name: "Alexis Sanchez"
  },
  {
    id: 4,
    name: "Milo Yannoupoulos"
  }
];

const tokens = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiTWl0aWPDoyIsImxhc3ROYW1lIjoiQmxuayIsInJvbGVzIjpbImVtcGxveWVlIl0sInJlcXVlc3RJZCI6IjNmZDhjMzRlLTc4ZTktNDcyZS1iYjBhLTMwNWUxYWVmNmM4OCIsImlhdCI6MTU2NjgwNDU5NywiZXhwIjoxNTY3NDA5Mzk3fQ.gXDgxt3tNdR5EVCyZHMH-jPCrrlDMmhXwxgF5uFt8Qg",
  refresh_token: ""
};

const contract = {
  id: 0,
  name:'Contract',
  hiredOn: '2019-04-22',
  number: 1234,
  position: 'Awesome Dev',
  vacationDays: 20
}

export default {
  requests,
  loggedUser,
  bosses,
  tokens,
  contract
};
