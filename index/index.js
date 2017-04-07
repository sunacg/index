/**
 * Created by sunyongqing on 2017/4/7.
 */
var app = angular.module("myApp",[]);

app.controller("myCrty",function ($scope) {
    $scope.users = [
        {name:"小明",age:18},
        {name:'小李',age:12},
        {name:"小华",age:68},
        {name:"小孙",age:65},
        {name:"小和",age:33}
    ]
    $scope.isshowt = true;
    $scope.dianji = function () {
        $scope.isshowt =  !$scope.isshowt;
    }

    //shuangji
    $scope.dbclick = function () {
        console.log(123);
        $scope.test = true;
    }
})