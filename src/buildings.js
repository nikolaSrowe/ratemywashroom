const buildings = [
    {
      name: "Art Building",
      floors: [
        { number: 1, bathrooms: [{ room: 111, type: "WAG", access: "Public" }, { room: 126, type: "WAG", access: "Staff only" }] },
        { number: 2, bathrooms: [{ room: 211, type: "WAG", access: "Public" }, { room: 224, type: "WM", access: "Staff only" }] },
        { number: 3, bathrooms: [{ room: 273, type: "WAG", access: "Public" }, { room: 373, type: "WAG", access: "Public" }] }
      ],
      position: [49.93938954747356, -119.39697324232871]
    },
    {
      name: "Arts & Sci II (ASC)",
      floors: [
        { number: 1, bathrooms: [{ room: 121, type: "WAG", access: "Public", note: "With shower" }] },
        { number: 2, bathrooms: [{ room: 222, type: "WAG", access: "Public" }, { room: 223, type: "WAG", access: "Public" }] },
        { number: 4, bathrooms: [{ room: 422, type: "WAG", access: "Public" }, { room: 423, type: "WAG", access: "Public" }] }
      ],
      position: [49.94015501017497, -119.39778734834991]
    },
    {
      name: "Creative & Critical Studies (CCS)",
      floors: [
        { number: 2, bathrooms: [{ room: 202, type: "WAG", access: "Public" }] }
      ],
      position: [49.939267315866665, -119.39841337977235]
    },
    {
      name: "Commons (COM)",
      floors: [
        { number: 0, bathrooms: [{ room: 9, type: "WAG", access: "Public" }] },
        { number: 1, bathrooms: [{ room: 107, type: "WAG", access: "Public" }, { room: 108, type: "WAG", access: "Public" }, { room: 109, type: "WAG", access: "Public" }] },
        { number: 2, bathrooms: [{ room: 207, type: "WAG", access: "Public" }] },
        { number: 3, bathrooms: [{ room: 320, type: "WAG", access: "Public" }] }
      ],
      position: [49.9403730011134, -119.39532630080429]
    },
    {
      name: "Engineering, Management & Education (EME)",
      floors: [
        { number: 0, bathrooms: [{ room: 223, type: "WW", access: "Public" }, { room: 225, type: "WM", access: "Public" }, { room: 253, type: "WAG", access: "Public" }] },
        { number: 1, bathrooms: [{ room: 1154, type: "WAG", access: "Public" }, { room: "1215-2", type: "WM", access: "Public" }, { room: 1219, type: "WW", access: "Public" }] },
        { number: 2, bathrooms: [{ room: 2225, type: "WW", access: "Public" }, { room: 2227, type: "WM", access: "Public" }] },
        { number: 3, bathrooms: [{ room: 3128, type: "WAG", access: "Public" }, { room: 3146, type: "WAG", access: "Public" }] },
        { number: 4, bathrooms: [{ room: 4216, type: "WW", access: "Public" }, { room: 4218, type: "WM", access: "Public" }] }
      ],
      position: [49.93898988446691, -119.39463467231046]
    },
    {
      name: "Fipke (FIP)",
      floors: [
        { number: 1, bathrooms: [{ room: 117, type: "WAG", access: "Public" }, { room: 208, type: "WAG", access: "Public" }] },
        { number: 2, bathrooms: [{ room: 234, type: "WAG", access: "Public" }] },
        { number: 3, bathrooms: [{ room: 334, type: "WAG", access: "Public" }] }
      ],
      position: [49.94065946968649, -119.39646805090713]
    },
    {
      name: "Gym (GYM)",
      floors: [
        { number: 1, bathrooms: [{ room: "1st Floor", type: "WAG", access: "Public", note: "Officials / Shower room" }] }
      ],
      position: [49.938145973874384, -119.39752120406114]
    },
    {
      name: "Library",
      floors: [
        { number: 2, bathrooms: [{ room: 232, type: "WAG", access: "Public", note: "Shower only" }, { room: 233, type: "WAG", access: "Public" }, { room: 314, type: "WAG", access: "Public" }] }
      ],
      position: [49.94000004968197, -119.39561220550306]
    },
    {
      name: "Science (SCI)",
      floors: [
        { number: 1, bathrooms: [{ room: 116, type: "WAG", access: "Public", note: "With shower" }] },
        { number: 2, bathrooms: [{ room: 225, type: "WAG", access: "Public", note: "With shower" }] },
        { number: 3, bathrooms: [{ room: 321, type: "WAG", access: "Public" }] }
      ],
      position: [49.94004464267661, -119.39644143688483]
    },
    {
      name: "University Centre (UNC)",
      floors: [
        { number: 1, bathrooms: [{ room: 135, type: "WAG", access: "Public" }] },
        { number: 2, bathrooms: [{ room: 225, type: "WAG", access: "Public" }] },
        { number: 3, bathrooms: [{ room: "312 N", type: "WAG", access: "Public" }] }
      ],
      position: [49.94120740497877, -119.39622491774145]
    }
  ];
  
  export default buildings;
  