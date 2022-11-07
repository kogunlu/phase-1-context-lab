/* Your Code Here */


let createEmployeeRecord = function(array){
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employee
}

let createEmployeeRecords = function(array){
    const employees = array.map(createEmployeeRecord)
    return employees
}

let createTimeInEvent = function(punch){
    const [punchDate, punchHour] = punch.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(punchHour),
        date: punchDate
    })

    return this
}

let createTimeOutEvent = function(punch){
    const [punchDate, punchHour] = punch.split(' ')

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(punchHour),
        date: punchDate
    })

    return this
}

let hoursWorkedOnDate = function(date){
    let timeOut = this.timeOutEvents.find(e => {
        return e.date === date
    })

    let timeIn = this.timeInEvents.find(e => {
        return e.date === date
    })

    return ((parseInt(timeOut.hour) - parseInt(timeIn.hour))/100)
}

let wagesEarnedOnDate = function(date){
    return (hoursWorkedOnDate.call(this, date) * parseInt(this.payPerHour))
}


let findEmployeeByFirstName = function(srcArray, firstName){
    let matchingNames = srcArray.find(e => {
        return e.firstName === firstName
    })
    return matchingNames
}

let calculatePayroll = function(srcArray){
    let totalPay = 0
    
    srcArray.map(employee => {
      totalPay = totalPay + allWagesFor(employee)
    })

    return totalPay
}




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

