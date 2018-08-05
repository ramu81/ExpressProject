var tasks = [
{name:'Task A',month: 12, day: 1, year: 2016},
{name:'Task C',month: 06, day: 1, year: 2016},
{name:'Task B',month: 06, day: 1, year: 2016}
];
module.exports = {
	get: function(){
		return tasks;
	}
}