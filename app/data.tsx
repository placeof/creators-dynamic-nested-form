import { CREATORTYPE, FormCreators } from "@/app/types"

export const data: FormCreators = {
  categories: [
    {
      name: "category 1",
      creators: [
        {
          name: "solo creator",
          creatorType: CREATORTYPE.SOLO_MEMBER,
          creatorRole: "",
          subCreators: [
            {
              name: "sub creator",
              creatorType: CREATORTYPE.SUB_CREATOR,
              creatorRole: "",
            },
          ],
        },
      ],
      subCategories: [
        {
          name: "sub category 1",
          creators: [
            {
              name: "solo creator 2",
              creatorType: CREATORTYPE.SOLO_MEMBER,
              creatorRole: "",
            },
            {
              name: "team creator",
              creatorType: CREATORTYPE.TEAM,
              creatorRole: "",
            },
          ],
        },
        {
          name: "sub category 2",
          creators: [
            {
              name: "team creator 2",
              creatorType: CREATORTYPE.TEAM,
              creatorRole: "",
              members: [
                {
                  name: "team creator 2 member",
                  creatorType: CREATORTYPE.TEAM_MEMBER,
                  creatorRole: "member",
                },
              ],
              subCreators: [
                {
                  name: "sub creator 2",
                  creatorType: CREATORTYPE.SUB_CREATOR,
                  creatorRole: "",
                },
                {
                  name: "sub creator 3",
                  creatorType: CREATORTYPE.SUB_CREATOR,
                  creatorRole: "",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "category 2",
      creators: [],
      subCategories: [
        {
          name: "sub category 3",
          creators: [
            {
              name: "solo creator",
              creatorType: CREATORTYPE.SOLO_MEMBER,
              creatorRole: "",
            },
            {
              name: "team creator",
              creatorType: CREATORTYPE.TEAM,
              creatorRole: "",
            },
          ],
        },
      ],
    },
  ],
}
