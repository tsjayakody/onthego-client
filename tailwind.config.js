module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px':'14px',
        '15px': '15px',
        '15.84px': '15.84px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '22px': '22px',
        '23px': '23px',
        '23.17px': '23.17px',
        '25px': '25px',
        '27px': '27px',
        '29px':'29px',
        '29.83px': '29.83px',
        '30px': '30px',
        '31px': '31px',
        '32.67px': '32.67px',
        '34px': '34px',
        '36.58px': '36.58px',
        '38px': '38px',
        '42px': '42px',
        '45px': '45px',
        '53px': '53px',
        '57.5px': '57.5px',
        '59px': '59px',
        '61px': '61px',
        '71px': '71px',
        '81px': '81px',
        '149px': '149px',
        '242px': '242px',
      },
      margin: {
        '10px': '10px',
        '25px': '25px',
        '30px': '30px',
        '31px': '31px',
        '34px': '34px',
        '38px': '38px',
        '48px': '48px',
        '55px': '55px',
        '71px': '71px',
      },
      height: {
        '21': '1.313rem',
        '25': '1.563rem',
        '29': '1.1813rem',
        '30': '1.875rem',
        '35': '2.188rem',
        '36.58': '2.28rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        '69': '4.313rem',
        '70': '4.375rem',
        '89': '5.563rem',
        '108': '6.75rem',
        '119': '7.438rem',
        '120': '7.5rem',
        '138': '8.625rem',
        '164': '10.25rem',
        '166': '10.375rem',
        '179': '11.188rem',
        '183': '11.438rem',
        '198': '12.375rem',
        '260': '16.25rem',
      },
      width: {
        '23': '1.438rem',
        '30': '1.875rem',
        '119': '7.438rem',
        '120': '7.5rem',
        '138': '8.625rem',
        '140': '8.75rem',
        '149': '9.313rem',
        '150': '9.375rem',
        '203': '12.688rem',
        '260': '16.25rem',
        '854': '53.375rem',
      },
      space: {
        '21px': '21px',
      },
    },
    colors: {
      '#1B1730': '#1B1730',
      '#110E1F': '#110E1F',
      '#282246': '#282246',
      '#00D2CB': '#00D2CB',
      '#FFFFFF': '#FFFFFF',
      '#C4C4C4': '#C4C4C4',
      '#666666': '#666666',
      '#EFEFEF': '#EFEFEF',
      '#2F2566': '#2F2566',
      '#453598': '#453598',
      '#BFDBFE':'#BFDBFE',
    },
    fontSize: {
      '8px': ['8px', {
        lineHeight: '9.38px',
      },],
      '10px': ['10px', {
        lineHeight: '10px',
      },],
      '12px': ['12px', {
        lineHeight: '10px',
      },],
      '14px': ['14px', {
        lineHeight: '15px',
      },],
      '18px': ['18px', {
        lineHeight: '15px',
      },],
      '20px': ['20px', {
        lineHeight: '23.44px',
      },],
    }
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
