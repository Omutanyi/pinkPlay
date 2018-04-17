
let firstPassword=document.querySelector('Pass1');
    confirmationPassword=document.querySelector('conPass');
    submitRegistration=document.querySelector('SignUpBut');
    loginEmail=document.querySelector('logMail');
    loginPassword=document.querySelector('logPass');
    body_home=document.querySelector('body_home');


function regist() {
	if (submitRegistration=true) {
		if (firstPassword==confirmationPassword) {
			alert("Confirmation email sent to your email");

		} else {
			alert("wrong password/Confirmation password entered!!");
		}
	}
}

function pleaseLogin(){
	if (body_home=true) {
		alert("login please to access site");

	} else {}
}

function but1() {
	var x= document.getElementId('but1Cont');
	var y= document.getElementId('but2Cont');

	if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

$ ('#but1Id').click(function){
	$('#but1Id').css('display','none');
	$('#but1Cont').show();

});

$ ('#but2Id').click(function){
	$('#but2Id').css('display','none');
	$('#but2Cont').show();

});

var shareApp = angular.module('shareApp', []);

shareApp.controller('onlyController',function($scope){
	$scope.posts = [];
	$scope.newPost = {created_by:'', text:'', posted_at:''}

	$scope.post = function (){
		$scope.newPost.create_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {create_by:'', text:'', create_at:''};}
})