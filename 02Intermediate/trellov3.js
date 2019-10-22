let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function (meet = 0) {
        this.meetings = this.meetings + meet;
    },

    meetingsDone: function (meet = 0) {
        this.meetDone = this.meetDone + meet;
    },

    getSummaryOfDay: function () {
        summary = this.meetings - this.meetDone;
        return `You have ${summary} meetings left`
    },

    resetDay: function () {
        this.meetings = 0;
        this.meetDone = 0;
    },

};

myTodos.addMeeting(3);
myTodos.meetingsDone(2);
console.log(myTodos.getSummaryOfDay());
log.console(myTodos.day);