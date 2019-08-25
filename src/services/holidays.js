import axios from 'axios'
import holidaysCacheService from './holidaysCache'
import moment from 'moment'
//TODO: get holidays for a 1 year interval

export default class HolidaysService{
    static baseUrl = 'https://calendarific.com/api/v2/holidays'
    static apiKey = '6898d6d6bfbf09ab189f14360bd95fd94491804b'

    static getHolidays = async (year) => {

        try{
            const cachedHolidays = await holidaysCacheService.get()
            if(cachedHolidays){
                const holidays = cachedHolidays.filter(el => moment().diff(el.date.iso) < 0)
                return {
                    holidays,
                    success: true
                }
            }

            const response = await axios({
                method: 'GET',
                url: `${this.baseUrl}?api_key=${this.apiKey}&country=ro&year=${year}`
            })
            const nationalHolidays = response.data.response.holidays.filter(el => el.type.includes('National holiday'))
            holidaysCacheService.save(nationalHolidays)
            const holidays = nationalHolidays.filter(el => moment().diff(el.date.iso) < 0)
            return {
                holidays,
                success: true
            }
            
        } catch (e) {
            console.log(e);
            return{
                success: false,
                error: e
            }
        }
       
    }

    static getCountdownHoliday = async () => {
        const cachedHoliday = await holidaysCacheService.getCountdownHoliday()
        if(cachedHoliday){
            return cachedHoliday
        } 
        const holidaysResp = await this.getHolidays()
        return holidaysResp.holidays.find(holiday => holiday.name === "Christmas Day")
    }

    static setCountdownHoliday = (holiday) => {
        holidaysCacheService.setCountdownHoliday(holiday)
    }

}