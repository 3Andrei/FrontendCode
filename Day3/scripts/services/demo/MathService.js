hrApp.service('MathService', function () {
        return {
            add: function (a,b) {
                return a+b;
            },
            substract: function (a,b) {
                return a-b;
            },
            multiplication: function (a,b) {
                return a*b;
            },
            division: function (a,b) {
                return a/b;
            }
            // TODO #14 add multiply and divide functions
        }
    }
);