// import jquery and add some instructions
import $ from 'jquery';
// import lodash
import _ from 'lodash';
// styles
import '../css/main.css';

// Here are the <p> and botton instructions to add

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button type="button">Click here to get started</button>');
$('body').append('<p id=count></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// bind lodash's debounce to the button
$('button').on('click', _.debounce(updateCounter, 500));

let count = 0;
//Function that tracks the number of times the button element has been clicked
function updateCounter() {
	count++;
	$('#count').text(`${count} clicks on the button`);
}
