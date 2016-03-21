app.controller('gradeSheetTeacherController', ['$scope', gradeSheetTeacherController]);

function gradeSheetTeacherController($scope) {
    $scope.module_title = 'Kasutajaliidesed - Rühm A';

    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1', '3', '5', '2'];
    var id = 1;

    function generateRandomItem(id) {

        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = dates[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2000);

        return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: birthdate,
            // birthDate: new Date(birthdate),
            balance: balance
        }
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    };

    //edit to the real data holder
    $scope.editItem = function editItem(row) {
        console.log(row);

        for (var i = 0; i < $scope.rowCollection; i++) {
            console.log()
        }

        angular.forEach($scope.rowCollection, function(value, key) {
            if (row.id == value.id) {
                var newFirstName = "Allar";
                value.firstName = newFirstName;
                $scope.rowCollection.push(value);
                console.log(value.firstName);
            }
        });

        // var index = $scope.rowCollection.indexOf(row);
        // if (index !== -1) {
        //     $scope.rowCollection.splice(index, 1);
        // }
    }
}