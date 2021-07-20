// const empDetails = (details) => details.map((element) => `I am planning to do ${element.course} from ${element.institute} whose contact number is ${element.mobileNo} and is situated in ${element.city}`)


console.log(
    empDetails([
      {
        course: "PDAC",
        institute: "PickupBiz",
        mobileNo: 9874561230,
        city: "Nanded",
      },
      {
        course: "Networking",
        institute: "Seed Infotech",
        mobileNo: 9874561555,
        city: "pune",
      },
  
      {
        course: "DAC ",
        institute: "C-DAC",
        mobileNo: 987456523523,
        city: "HYD",
      },
  
      {
        course: "HTML CSS",
        institute: "Naresh IT",
        mobileNo: 453636355,
        city: "Mumbai",
      },
    ])
  );