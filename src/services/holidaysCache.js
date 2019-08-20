import storageService from "./storage";

class holidaysCacheService {
  static _key = "holidays";
  static _countdownKey = "countdown_holiday";

  static save = (holidays = {}) => {
    const data = {
      holidays,
      expiresAt: new Date().valueOf() + 604800000
    };
    storageService.save(this._key, data);
  };

  static get = async () => {
    const data = await storageService.get(this._key);
    if (!data) {
      return null;
    }
    if (data.expiresAt < new Date().valueOf()) {
      return null;
    }
    return data.holidays;
  };

  static getCountdownHoliday = async () => {
    const holiday = storageService.get(this._countdownKey);
    if (!holiday) {
      return null;
    }
    return holiday;
  };

  static setCountdownHoliday = (countdownHoliday = {}) => {
      storageService.save(this._countdownKey, countdownHoliday)
  };
}

export default holidaysCacheService;
