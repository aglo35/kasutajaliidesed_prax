var app = angular.module("ois", ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngAnimate', 'ngTouch', 'smart-table', 'bootstrap.fileField']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

    // route for the dashboard module
        .when('/', {
            templateUrl: '../../../app/components/dashboard/dashboard.html',
            controller: 'homeController'
        })

        // route for the study results module
        .when('/study_results', {
            templateUrl: '../../../app/components/study_results/study_results.html',
            controller: 'studyResultsController'
        })
        // route for the teacher grade sheet module
        .when('/grade_sheet_t', {
            templateUrl: '../../../app/components/grade_sheet_t/grade_sheet_t.html',
            controller: 'gradeSheetTeacherController'
        })
        // route for the student work submission module
        .when('/work_submission', {
            templateUrl: '../../../app/components/work_submission/work_submission.html',
            controller: 'workSubmissionController'
        })
});