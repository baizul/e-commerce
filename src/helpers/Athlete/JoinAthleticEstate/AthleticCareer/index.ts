import * as Yup from "yup";

export const initialValue = {
  athletic_level: "",
  school: "",
  jersey_number: "",
  active_athlete: "",
  start_year: "",
  end_year: "",
};

export const FindAtheleteCareerFields = [
  {
    id: "athletic_level",
    type: "select",
    placeholder: "Athletic Level",
    label: "Athletic level",
    MenuItem: [
      {
        id: 1,
        value: "9",
      },
      {
        id: 2,
        value: "10",
      },
      {
        id: 3,
        value: "11",
      },
    ],
  },
  {
    id: "school",
    type: "select",
    placeholder: "School Name",
    label: "School",
    MenuItem: [
      {
        id: 1,
        value: "Lorem ipsum dolor",
      },
    ],
  },
  {
    id: "jersey_number",
    type: "select",
    placeholder: "What is your jersey number?",
    label: "Jersey Number",
    MenuItem: [
      {
        id: 1,
        value: "5",
      },
      {
        id: 2,
        value: "6",
      },
      {
        id: 3,
        value: "7",
      },
    ],
  },
  {
    id: "active_athlete",
    type: "select",
    placeholder: "Are you an active athlete with your jersey number?",

    label: "Active Athlete",
    MenuItem: [
      {
        id: 1,
        value: "Yes",
      },
      {
        id: 1,
        value: "No",
      },
    ],
  },
  {
    id: "start_year",
    type: "select",
    placeholder: "What year did your career start?",
    label: "Year",
    MenuItem: [
      {
        id: 1,
        value: "1998",
      },
      {
        id: 1,
        value: "1996",
      },
    ],
  },
  {
    id: "end_year",
    type: "select",
    placeholder: "What year did your career end?",
    label: "Year",
    MenuItem: [
      {
        id: 1,
        value: "2007",
      },
      {
        id: 1,
        value: "2008",
      },
    ],
  },
];

export const validationSchema = Yup.object().shape({
  athletic_level: Yup.string().required("Please select the athlete."),
  // .test("", "Please select the Jersy Number",(value) => !/select/.test(value)),

  school: Yup.string().required("Please select the athlete."),
  // .test("", "Please select the sport", (value) => !/select/.test(value)),

  jersey_number: Yup.string().required("Please select the athlete."),
  // .test("", "Please select the school", (value) => !/select/.test(value)),

  active_athlete: Yup.string().required("Please select the athlete."),

  start_year: Yup.string().required("Please select the athlete."),

  end_year: Yup.string().required("Please select the athlete."),
});
