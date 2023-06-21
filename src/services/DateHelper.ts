
interface DateModel {
    year: string
    month: string
    day: string
}

export class DateHelper {

    public static formatToLocalString = (
        timestamp: number,
        pattern: string
    ): string => {
        const date: Date = new Date(timestamp)
        return DateHelper.formatDate(date, pattern)
    }

    private static formatDate = (date: Date, pattern: string): string => {
        if (date == null) return ''
        let dateModel: DateModel = DateHelper.toDateModel(date)
        let result: string = pattern.replace(/y+/g, dateModel.year)
        result = result.replace(/M+/g, dateModel.month)
        result = result.replace(/d+/g, dateModel.day)
        return result
    }


    private static toDateModel = (date: Date): DateModel => {
        let strings = date
            .toISOString()
            .split('.')[0]
            .split('T')

        let dateStrings = strings[0].split('-')
        return {
            year: dateStrings[0],
            month: dateStrings[1],
            day: dateStrings[2]
        }
    }
}