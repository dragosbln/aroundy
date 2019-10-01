import colors from '../assets/theme/colors'

const leaveTypes = {
    'medical': 'MEDICAL',
    'sick-day': 'SICK DAY',
    'emergency': 'EMERGENCY',
    'blood-donation': 'BLOOD DONATION',
    'compensated-free-time': 'COMPENSATED FREE TIME',
    'annual': 'ANNUAL',
    'delegation': 'DELEGATION',
    'bereavement': 'BEREAVEMENT',
    'mariage': 'MARIAGE',
    'no-payment': 'NO PAYMENT',
    'paternal': 'PATERNAL',
    'training-day': 'TRAINING DAY'
}

const leaveColors = {
    'medical': colors.blue,
    'sick-day': '#123455',
    'emergency': colors.orange,
    'blood-donation': '#99aa82',
    'compensated-free-time': '#981123',
    'annual': colors.green_dark,
    'delegation': colors.gray_light,
    'bereavement': colors.gray_primary,
    'mariage': colors.green,
    'no-payment': colors.pink,
    'paternal': colors.red,
    'training-day': colors.yellow
}

export default {
    leaveTypes,
    leaveColors
}