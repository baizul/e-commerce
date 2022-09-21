export let addressesData = [
  // {
  //   id: "1",
  //   name: "Ashley James",
  //   address: "Applewood Lane",
  //   apartment: "123456",
  //   city: "New York",
  //   state: "New York",
  //   zipCode: "10001",
  //   defaultAddress: true,
  //   active:true,
  // },
  // {
  //   id: "2",
  //   name: "Alex",
  //   address: "Applewood Lane 2",
  //   apartment: "1234562",
  //   city: "New York 2",
  //   state: "New York 2",
  //   zipCode: "10002",
  //   defaultAddress: false,
  //   active:false,
  // },
];

export const updateAdresses = (updatedAddress: any) => {
  addressesData = [...updatedAddress];
};
