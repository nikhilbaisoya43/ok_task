'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [

      //* CODERS
      {
        first_name: 'Eluri',
        last_name: 'Jyothi',
        date_of_birth: '1998-06-30',
        joining_date: '2022-08-25',
        specialty: 'Office/ Clinics',
        email: 'ejyothi@helionext.com',
        password: '$2b$10$Xy6swVMIIKEIiw04LUY/ferV4FGUAUefvoWUKPScWSmqyO5d37JjW',
        employee_id: '7533',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Potnuri Posi Malleswara',
        last_name: 'Rao',
        date_of_birth: '1986-02-09',
        joining_date: '2022-08-25',
        specialty: 'ED',
        email: 'prao@helionext.com',
        password: '$2b$10$MyNukz/CXa0wcbtMOfZ6mOYRk/cX0hOrSP66bfsIalh0JHWc6Z6Hu',
        employee_id: '7534',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Kola Divya',
        last_name: 'Mani',
        date_of_birth: '1990-05-30',
        joining_date: '2022-08-26',
        specialty: 'ED',
        email: 'kmani@helionext.com',
        password: '$2b$10$ljgsVn9kVzmIx/cS92hKTORy3IK.iiGjMHYrxblK1AaPVlAhFveIy',
        employee_id: '7535',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Suganthi',
        last_name: 'K',
        date_of_birth: '1988-07-26',
        joining_date: '2022-09-08',
        specialty: 'SDC',
        email: 'suganthik@helionext.com',
        password: '$2b$10$m/QQlqR0LIpZkIzQwqmGGOUtU2G1ifVlgp4lQdTVDnNI.2pvzyK9i',
        employee_id: '7570',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Kiran Narayan',
        last_name: 'Patil',
        date_of_birth: '1991-01-01',
        joining_date: '2022-09-13',
        specialty: 'Clinics',
        email: 'knpatil@helionext.com',
        password: '$2b$10$ZqAzE4lGNaKf0AoV3ID5A.T6D4aGv6PUd58cU2yd8qROQtQUyJyE2',
        employee_id: '7590',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Kotha',
        last_name: 'Mounika',
        date_of_birth: '1994-03-05',
        joining_date: '2022-09-16',
        specialty: 'ED',
        email: 'kmounika@helionext.com',
        password: '$2b$10$Q.9bU2kD5AAImiu0cbCzie4IrARofdqTZlFlbGqZzym1Deg6mi0rG',
        employee_id: '7593',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Tanuja Ashok',
        last_name: 'Koli',
        date_of_birth: '1997-09-08',
        joining_date: '2022-09-19',
        specialty: 'OBS',
        email: 'takoli@helionext.com',
        password: '$2b$10$UxNKovl6NiyFxbD7WsRp3OgkgUUzY.7pqLbribn1TviTd7/u11FGW',
        employee_id: '7596',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Adilakshmi',
        last_name: 'Peteti',
        date_of_birth: '1986-06-22',
        joining_date: '2022-09-28',
        specialty: 'Clinics',
        email: 'apeteti@helionext.com',
        password: '$2b$10$DyptPpw5btBaHMM9KjyA6eTo8d6VzdDNVthU4A.BSiYKPWRxOImey',
        employee_id: '7619',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Sanket Shrikant',
        last_name: 'Tanavade',
        date_of_birth: '1996-03-22',
        joining_date: '2022-09-28',
        specialty: 'Clinics',
        email: 'stanavade@helionext.com',
        password: '$2b$10$0FW2dVuSi9vs67cqvTmDbuCzkBBUSqhTVRPF.IWNRwporqYNKNvfu',
        employee_id: '7621',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },
      {
        first_name: 'Tharshana',
        last_name: 'M',
        date_of_birth: '1989-04-21',
        joining_date: '2022-11-01',
        specialty: 'SDC',
        email: 'tharshanam@helionext.com',
        password: '$2b$10$aUUOTjd4/fmUDj2mGpl4pO597uCZRdSkG9k4EpUXShkqiKT9.lqN6',
        employee_id: '7668',
        RoleId: '3',
        DesignationId: '1',
        is_active: true
      },

      // * AUDITORS
      {
        first_name: 'Rajesh',
        last_name: 'Kumar',
        joining_date: '2022-01-10',
        specialty: 'SDS/ED/CLI',
        email: 'rkumar2@helionext.com',
        password: '$2b$10$MMViRAMm.5MOEHpqwIH0eexCpb6RNqrRa9b75mpBwSY.MsgyvDn7C',
        employee_id: '7137',
        RoleId: '4',
        DesignationId: '2',
        is_active: true
      },
      {
        first_name: 'Harikrishnan',
        last_name: 'R',
        joining_date: '2022-09-22',
        specialty: 'ED/CLI',
        email: 'harikrishnanr@helionext.com',
        password: '$2b$10$VuDgRjAPoLcJbif1B0Ed8uDY/r98x2qBhD5KB9f/vu5JryETMZPJ.',
        employee_id: '7612',
        RoleId: '4',
        DesignationId: '2',
        is_active: true
      },
      {
        first_name: 'Chinjumol M',
        last_name: 'A',
        joining_date: '2022-01-10',
        specialty: 'CLI/IP/SDS',
        email: 'cma@helionext.com',
        password: '$2b$10$snT63en.C4YSJSgz0r70L.X7P0UdIcHpUjl3iEMAcjwHcsBR7pZA.',
        employee_id: '7138',
        RoleId: '4',
        DesignationId: '2',
        is_active: true
      },
      {
        first_name: 'Shruti Swapnil',
        last_name: 'Poyrekar',
        joining_date: '2022-12-26',
        specialty: 'ED/CLI/OP',
        email: 'spoyrekar@helionext.com',
        password: '$2b$10$/YUzK4zg66CK.T/QPrSVIOw2saogNpc4A9g5LoZvd/ei7GoSdZbia',
        employee_id: '7737',
        RoleId: '4',
        DesignationId: '2',
        is_active: true
      },

      // * TEAM LEADS
      {
        first_name: 'Nikhil',
        last_name: 'Kumar',
        date_of_birth: '1990-01-08',
        joining_date: '2021-11-15',
        specialty: '',
        email: 'nkumar1@helionext.com',
        password: '$2b$10$BQRDg0d2v5fPey/Va3vCaeFjcm0acEIG/PmZHACrmpUmTJOw1/kv.',
        employee_id: '7006',
        RoleId: '1',
        DesignationId: '3',
        is_active: true
      },
      {
        first_name: 'Rahul',
        last_name: 'Yadav',
        date_of_birth: '1988-05-02',
        joining_date: '2022-01-19',
        specialty: '',
        email: 'ryadav@helionext.com',
        password: '$2b$10$NVOKjIz7WCvLCv1IF.I3bOJpn/tx7eadFh8Lhxjr7bi5PxxVzqL2O',
        employee_id: '7144',
        RoleId: '1',
        DesignationId: '4',
        is_active: true
      },
      {
        first_name: 'Nandhakumar',
        last_name: '',
        date_of_birth: '1989-06-07',
        joining_date: '2023-01-11',
        specialty: '',
        email: 'nandhap@helionext.com',
        password: '$2b$10$fFfg9sS0INe5iJr.2loC0On1NIBdMn97OHht2XssYbbnXPsMAL.w6',
        employee_id: '7762',
        RoleId: '1',
        DesignationId: '5',
        is_active: true
      },
      {
        first_name: 'Anusha',
        last_name: 'Chemmala',
        date_of_birth: '1988-06-21',
        joining_date: '2022-11-01',
        specialty: '',
        email: 'achemmala@helionext.com',
        password: '$2b$10$/DkCKA4EsDYXTOZm6sPbjeGzWX9BgGhRrEtbQmgf56FQrPaMuxR8.',
        employee_id: '7665',
        RoleId: '1',
        DesignationId: '6',
        is_active: true
      },
      {
        first_name: 'Atul',
        last_name: 'Verma',
        joining_date: '2022-12-26',
        specialty: '',
        email: 'akverma@helionext.com',
        password: '$2b$10$sWj3gCca7aLPj735VqSbceVmZNlsA09FI4O.TMc1MbYH.SbrgUJnO',
        employee_id: '7738',
        RoleId: '1',
        DesignationId: '6',
        is_active: true
      },
      {
        first_name: 'Rupesh',
        last_name: 'Marwaha',
        joining_date: '2005-06-22',
        specialty: '',
        email: 'rmarwaha@helionext.com',
        password: '$2b$10$oLgciAFupQKRyiHTt503Y.Ju2R4eoNoKocAHWnZ4F34YE8zXxJwj2',
        employee_id: '516',
        RoleId: '1',
        DesignationId: '7',
        is_active: true
      },
      {
        first_name: 'Lou',
        last_name: 'Lorenzano',
        specialty: '',
        email: 'lou.lorenzano@valerionhealth.com',
        password: '$2b$10$XTker8UzCfPzO9hZ5.1g5eE5PBLf4bhkJ.kyAt1D5Owc1ruvibQF.',
        RoleId: '1',
        DesignationId: '8',
        is_active: true
      },
      {
        first_name: 'Lisa',
        last_name: 'Crow',
        specialty: '',
        email: 'lisa.crow@valerionhealth.com',
        password: '$2b$10$MQXhcbh/wb7G11aQL6rA0.MtEXAgwlefnBQl/WPKqXtW7dn2W17Fi',
        RoleId: '1',
        DesignationId: '7',
        is_active: true
      },
      {
        first_name: 'Stacey',
        last_name: 'Upton',
        specialty: '',
        email: 'stacey.upton@valerionhealth.com',
        password: '$2b$10$EaHB.EoviaV7xXwz9PhenOwLLnNRiKLoggifxnlx6PPst/x2upbLy',
        RoleId: '1',
        is_active: true
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
