import * as Yup from 'yup';

export const initialValues = {
    jersy_number:'',
    sport:'',
    school:'',
    athlete_name:''
  }

  export const FindYourAtheleteFields = [
    {
      id: "jersy_number",
      type: "select",
      placeholder: "Select the Number",
      label: "Number",
      MenuItem: [
        
        {
          id: 1,
          value: "23",
        },
        {
          id: 2,
          value: "24",
        },
        {
          id: 3,
          value: "25",
        },
      ],
    },
  
    {
      id: "sport",
      type: "select",
      placeholder: "Select the Sport",
      label: "Sport",
      MenuItem: [
        {
          id: 1,
          value: "Basketball",
        },
        {
          id: 2,
          value: "Hockey",
        },
      ],
    },
  
    {
      id: "school",
      type: "select",
      placeholder: "Select the School",
      label: "School",
      MenuItem: [
        {
          id: 1,
          value: "University of North Carolina",
        },
      ],
    },
  
    {
      id: "athlete_name",
      type: "autocomplete",
      placeholder: "Search",
      label: "Search",
      searchItem: [
        { name: 'XYZ'},
        { name: 'ABC'},
        { name: 'XYZ2'},
        { name: 'ABC2'},
        { name: 'XYZ3'},
        { name: "ABC3"},
        { name: 'XYZ4'},
        {
          name: 'ABC4'
        },
      ],
    },
  ];
  

export const validateSchema= Yup.object().shape({
    jersy_number: Yup.string()
    .required("Please select."),

    sport: Yup.string()
    .required("Please select."),

    school: Yup.string()
    .required("Please select."),
    
    athlete_name: Yup.string()
    .required("Please select."),


})