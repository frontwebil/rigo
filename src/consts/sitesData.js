export const sitesData = [
  {
    id: '6a1c146c',
    sitesBasic: {
      settings: {
        locationName: "Map",
        radius: "300m",
        coordinates: "31.8952020 / 34.9818310",
        location: "Active/Not Active/Mix",
        locationDate: "20.01.2024",
      },
      summary: {
        manager: "Moti Rush",
        atSite: "32",
        present: "26",
        absent: "6 , 2 more than 3 Days",
      },
      schedule: {
        firstShift: {
          "1-5": "06:30-18:00",
          6: "06:00-12:00",
          transportation: "1 Hour",
          break: "12:00-13:00",
        },
        secondShift: {
          "1-5": "06:30-18:30",
          6: "06:00-12:00",
        },
      },
    },
    sitesWorkedTime: [
      {
        tax:'2061',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "221:16",
          netto: "205:04",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        tax:'2062',
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "262:05",
          netto: "225:49",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
      {
        tax:'2063',
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "161:36",
          netto: "128:08",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Ramat Aviv",
      },
      {
        tax:'2064',
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "242:52",
          netto: "227:05",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        tax:'2065',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "221:16",
          netto: "105:04",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
    ],
    sitesActions: [
      {
        tax:'2061',
        date: {
          day: "12",
          month: "04",
          year: "2024",
          time: "07:19",
        },
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Adassa",
      },
      {
        tax:'2062',
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "10:46",
        },
        location: {
          type: "Exit",
          distance: "900m",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "10:02",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
      {
        tax:'2063',
        date: {
          day: "08",
          month: "04",
          year: "2024",
          time: "12:20",
        },
        location: {
          type: "Brake",
          distance: "At Site",
        },
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "04:20",
          netto: "04:00",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Adassa",
      },
      {
        tax:'2064',
        date: {
          day: "06",
          month: "04",
          year: "2024",
          time: "07:52",
        },
        location: {
          type: "Colleague",
          distance: "At Site",
        },
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Adassa",
      },
      {
        tax:'2065',
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "18:46",
        },
        location: {
          type: "Exit",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "01:01",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
    ],
    sitesAlerts:[
      {
        tax:'2061',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        location: {
          type: "Exit",
          distance: "900m",
        },
        confirmTime: {
          green:'17:23',
          red:'18:30'
        },
        ResaultTime:'13:52',
        manager: "Kobi Kats",
        alertNotification:[
          'Exam','Insurance'
        ]
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Intervisa'],
        ResaultTime:'',
      },
      {
        tax:'2063',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "1,7km",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'07:36',
          red:'06:32'
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
    ]
  },
  {
    id: "0fa08a70",
    sitesBasic: {
      settings: {
        locationName: "Map",
        radius: "300m",
        coordinates: "31.8952020 / 34.9818310",
        location: "Active/Not Active/Mix",
        locationDate: "20.01.2024",
      },
      summary: {
        manager: "Moti Rush",
        atSite: "32",
        present: "26",
        absent: "6 , 2 more than 3 Days",
      },
      schedule: {
        firstShift: {
          "1-5": "06:30-18:00",
          6: "06:00-12:00",
          transportation: "1 Hour",
          break: "12:00-13:00",
        },
        secondShift: {
          "1-5": "06:30-18:30",
          6: "06:00-12:00",
        },
      },
    },
    sitesWorkedTime: [
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "221:16",
          netto: "205:04",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "262:05",
          netto: "225:49",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
      {
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "161:36",
          netto: "128:08",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Ramat Aviv",
      },
      {
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "242:52",
          netto: "227:05",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "221:16",
          netto: "105:04",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
    ],
    sitesActions: [
      {
        date: {
          day: "12",
          month: "04",
          year: "2024",
          time: "07:19",
        },
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "10:46",
        },
        location: {
          type: "Exit",
          distance: "900m",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "10:02",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
      {
        date: {
          day: "08",
          month: "04",
          year: "2024",
          time: "12:20",
        },
        location: {
          type: "Brake",
          distance: "At Site",
        },
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "04:20",
          netto: "04:00",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Adassa",
      },
      {
        date: {
          day: "06",
          month: "04",
          year: "2024",
          time: "07:52",
        },
        location: {
          type: "Colleague",
          distance: "At Site",
        },
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "18:46",
        },
        location: {
          type: "Exit",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "01:01",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
    ],
    sitesAlerts:[
      {
        tax:'2061',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        location: {
          type: "Exit",
          distance: "900m",
        },
        confirmTime: {
          green:'17:23',
          red:'18:30'
        },
        ResaultTime:'13:52',
        manager: "Kobi Kats",
        alertNotification:[
          'Exam','Insurance'
        ]
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Intervisa'],
        ResaultTime:'',
      },
      {
        tax:'2063',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "1,7km",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'07:36',
          red:'06:32'
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
    ]
  },
  {
    id: "dae94f70",
    sitesBasic: {
      settings: {
        locationName: "Map",
        radius: "300m",
        coordinates: "31.8952020 / 34.9818310",
        location: "Active/Not Active/Mix",
        locationDate: "20.01.2024",
      },
      summary: {
        manager: "Moti Rush",
        atSite: "32",
        present: "26",
        absent: "6 , 2 more than 3 Days",
      },
      schedule: {
        firstShift: {
          "1-5": "06:30-18:00",
          6: "06:00-12:00",
          transportation: "1 Hour",
          break: "12:00-13:00",
        },
        secondShift: {
          "1-5": "06:30-18:30",
          6: "06:00-12:00",
        },
      },
    },
    sitesWorkedTime: [
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "221:16",
          netto: "205:04",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "262:05",
          netto: "225:49",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
      {
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "161:36",
          netto: "128:08",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Ramat Aviv",
      },
      {
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "242:52",
          netto: "227:05",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "221:16",
          netto: "105:04",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
    ],
    sitesActions: [
      {
        date: {
          day: "12",
          month: "04",
          year: "2024",
          time: "07:19",
        },
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "10:46",
        },
        location: {
          type: "Exit",
          distance: "900m",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "10:02",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
      {
        date: {
          day: "08",
          month: "04",
          year: "2024",
          time: "12:20",
        },
        location: {
          type: "Brake",
          distance: "At Site",
        },
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "04:20",
          netto: "04:00",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Adassa",
      },
      {
        date: {
          day: "06",
          month: "04",
          year: "2024",
          time: "07:52",
        },
        location: {
          type: "Colleague",
          distance: "At Site",
        },
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "18:46",
        },
        location: {
          type: "Exit",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "01:01",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
    ],
    sitesAlerts:[
      {
        tax:'2061',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        location: {
          type: "Exit",
          distance: "900m",
        },
        confirmTime: {
          green:'17:23',
          red:'18:30'
        },
        ResaultTime:'13:52',
        manager: "Kobi Kats",
        alertNotification:[
          'Exam','Insurance'
        ]
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Intervisa'],
        ResaultTime:'',
      },
      {
        tax:'2063',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "1,7km",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'07:36',
          red:'06:32'
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
    ]
  },
  {
    id: "210ae93e",
    sitesBasic: {
      settings: {
        locationName: "Map",
        radius: "300m",
        coordinates: "31.8952020 / 34.9818310",
        location: "Active/Not Active/Mix",
        locationDate: "20.01.2024",
      },
      summary: {
        manager: "Moti Rush",
        atSite: "32",
        present: "26",
        absent: "6 , 2 more than 3 Days",
      },
      schedule: {
        firstShift: {
          "1-5": "06:30-18:00",
          6: "06:00-12:00",
          transportation: "1 Hour",
          break: "12:00-13:00",
        },
        secondShift: {
          "1-5": "06:30-18:30",
          6: "06:00-12:00",
        },
      },
    },
    sitesWorkedTime: [
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "221:16",
          netto: "205:04",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "262:05",
          netto: "225:49",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
      {
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "161:36",
          netto: "128:08",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Ramat Aviv",
      },
      {
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "242:52",
          netto: "227:05",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "221:16",
          netto: "105:04",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
    ],
    sitesActions: [
      {
        date: {
          day: "12",
          month: "04",
          year: "2024",
          time: "07:19",
        },
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "10:46",
        },
        location: {
          type: "Exit",
          distance: "900m",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "10:02",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
      {
        date: {
          day: "08",
          month: "04",
          year: "2024",
          time: "12:20",
        },
        location: {
          type: "Brake",
          distance: "At Site",
        },
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "04:20",
          netto: "04:00",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Adassa",
      },
      {
        date: {
          day: "06",
          month: "04",
          year: "2024",
          time: "07:52",
        },
        location: {
          type: "Colleague",
          distance: "At Site",
        },
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "18:46",
        },
        location: {
          type: "Exit",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "01:01",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
    ],
    sitesAlerts:[
      {
        tax:'2061',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        location: {
          type: "Exit",
          distance: "900m",
        },
        confirmTime: {
          green:'17:23',
          red:'18:30'
        },
        ResaultTime:'13:52',
        manager: "Kobi Kats",
        alertNotification:[
          'Exam','Insurance'
        ]
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Intervisa'],
        ResaultTime:'',
      },
      {
        tax:'2063',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "1,7km",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'07:36',
          red:'06:32'
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
    ]
  },
  {
    id: "da73abdf",
    sitesBasic: {
      settings: {
        locationName: "Map",
        radius: "300m",
        coordinates: "31.8952020 / 34.9818310",
        location: "Active/Not Active/Mix",
        locationDate: "20.01.2024",
      },
      summary: {
        manager: "Moti Rush",
        atSite: "32",
        present: "26",
        absent: "6 , 2 more than 3 Days",
      },
      schedule: {
        firstShift: {
          "1-5": "06:30-18:00",
          6: "06:00-12:00",
          transportation: "1 Hour",
          break: "12:00-13:00",
        },
        secondShift: {
          "1-5": "06:30-18:30",
          6: "06:00-12:00",
        },
      },
    },
    sitesWorkedTime: [
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "221:16",
          netto: "205:04",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "262:05",
          netto: "225:49",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
      {
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "161:36",
          netto: "128:08",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Ramat Aviv",
      },
      {
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "242:52",
          netto: "227:05",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Ramat Aviv",
      },
      {
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "221:16",
          netto: "105:04",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Ramat Aviv",
      },
    ],
    sitesActions: [
      {
        date: {
          day: "12",
          month: "04",
          year: "2024",
          time: "07:19",
        },
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Kobi Kats",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "10:46",
        },
        location: {
          type: "Exit",
          distance: "900m",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        workedTime: {
          brutto: "10:02",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
      {
        date: {
          day: "08",
          month: "04",
          year: "2024",
          time: "12:20",
        },
        location: {
          type: "Brake",
          distance: "At Site",
        },
        name: "Victor Jacota",
        photo: "https://frontwebil.github.io/RIGO-photos/img/black-man.svg",
        customer: "Extra",
        workedTime: {
          brutto: "04:20",
          netto: "04:00",
        },
        manager: "Moti Rush",
        days: "16",
        site: "Adassa",
      },
      {
        date: {
          day: "06",
          month: "04",
          year: "2024",
          time: "07:52",
        },
        location: {
          type: "Colleague",
          distance: "At Site",
        },
        name: "Mihal Clmentov",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Inta",
        workedTime: {
          brutto: "00:00",
          netto: "00:00",
        },
        manager: "Moti Rush",
        days: "22",
        site: "Adassa",
      },
      {
        date: {
          day: "11",
          month: "04",
          year: "2024",
          time: "18:46",
        },
        location: {
          type: "Exit",
          distance: "At Site",
        },
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/angry-man.svg",
        customer: "Inta",
        workedTime: {
          brutto: "01:01",
          netto: "10:26",
        },
        manager: "Kobi Kats",
        days: "21",
        site: "Adassa",
      },
    ],
    sitesAlerts:[
      {
        tax:'2061',
        name: "Anatoli Vechurko",
        photo: "https://frontwebil.github.io/RIGO-photos/img/woman.svg",
        customer: "Yar",
        location: {
          type: "Exit",
          distance: "900m",
        },
        confirmTime: {
          green:'17:23',
          red:'18:30'
        },
        ResaultTime:'13:52',
        manager: "Kobi Kats",
        alertNotification:[
          'Exam','Insurance'
        ]
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Yar",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Intervisa' , 'Intervisa2' , 'Intervisa3' ,'Intervisa4'],
        ResaultTime:'',
      },
      {
        tax:'2063',
        location: {
          type: "Enter",
          distance: "At Site",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'',
          red:''
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
      {
        tax:'2062',
        location: {
          type: "Enter",
          distance: "1,7km",
        },
        name: "Ion Sinu",
        photo: "https://frontwebil.github.io/RIGO-photos/img/man-yellow.svg",
        customer: "Extra",
        confirmTime: {
          green:'07:36',
          red:'06:32'
        },
        manager: "Kobi Kats",
        alertNotification:['Insurance'],
        ResaultTime:'',
      },
    ]
  }
]