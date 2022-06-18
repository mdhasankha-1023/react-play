export const FetchPlaysFilter = [
  // Filter all the featured plays
  {
    display: "Filter all the featured plays",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "",
      clause: [
        {
          field: "featured",
          operator: "eq",
          value: true,
          type: "boolean",
        },
      ],
    },
  },
  // Filter Plays by a search string in name or description
  {
    display: "Filter Plays by a search string in name or description",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "or",
      clause: [
        {
          field: "name",
          operator: "iregex",
          value: "why",
          type: "string",
        },
        {
          field: "description",
          operator: "iregex",
          value: "why",
          type: "string",
        },
      ],
    },
  },
  // Filter Plays by Level
  {
    display: "Filter Plays by Level",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "",
      class: "level",
      clause: [
        {
          field: "name",
          operator: "eq",
          value: "Advanced",
          type: "string",
        },
      ],
    },
  },
  // Alternatively using the id
  {
    display: "Alternatively using the id",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      { play_tags: { tag: ["name"] } },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "",
      clause: [
        {
          field: "level_id",
          operator: "eq",
          value: "2af38a32-37a7-4456-b21b-bf6b3aedd804",
          type: "string",
        },
      ],
    },
  },
  // Filter plays by level, user and language
  {
    display: "Filter plays by level, user and language",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      {
        play_tags: { tag: ["name"] },
      },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "and",
      clause: [
        {
          field: "owner_user_id",
          operator: "eq",
          value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
          type: "string",
        },
        {
          field: "level_id",
          operator: "eq",
          value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
          type: "string",
        },
        {
          field: "language",
          operator: "eq",
          value: "js",
          type: "string",
        },
      ],
    },
  },
  // Filter plays by level, user, language, and multiple tags
  {
    display: "Filter plays by level, user, language, and multiple tags",
    name: "Fetch_Plays",
    function: "plays",
    write: false,
    params: [
      "blog",
      "component",
      "cover",
      "created_at",
      "description",
      "featured",
      "github",
      "id",
      "language",
      { level: ["name"] },
      "name",
      "path",
      {
        play_tags: { tag: ["name"] },
        where: {
          operator: "or",
          class: "tag",
          clause: [
            {
              field: "name",
              operator: "eq",
              value: "JSX",
              type: "string",
            },
            {
              field: "name",
              operator: "eq",
              value: "Schedule",
              type: "string",
            },
          ],
        },
      },
      "updated_at",
      { user: ["id", "displayName", "avatarUrl"] },
      "video",
    ],
    where: {
      operator: "and",
      clause: [
        {
          field: "owner_user_id",
          operator: "eq",
          value: "0680f581-6584-4bc4-bbe9-aa7c97567e72",
          type: "string",
        },
        {
          field: "level_id",
          operator: "eq",
          value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
          type: "string",
        },
        {
          field: "language",
          operator: "eq",
          value: "js",
          type: "string",
        },
      ],
    },
  },
];
