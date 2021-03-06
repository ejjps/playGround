kony.print("Worker Scope: Init ");
timer_init();

function timer_init() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer125";
    var i = 0;

    function timerFunc() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 300) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func() {
    createDBW2();

    function createDBW2() {
        kony.print("Worker Scope : sql_consumer_func : createDBW2");
        webSQLFlag = 1;
        baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect();
    }

    function success_dropTable(transactionId, resultset) {
        kony.print("Worker Scope : sql_producer_func : success_dropTable: Table was dropped");
    }

    function success_sqlSelect(transactionId, resultset) {
        kony.print("Worker Scope : sql_consumer_func : success_sqlSelect");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0; i <= numResults - 1; i++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker Scope : sql_consumer_func : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker Scope : sql_consumer_func : EMP NAME ::" + rowItem.empname);
                kony.print("Worker Scope : sql_consumer_func : EMP DEPT ::" + rowItem.depid.toString());
            };
        }
        //finally drop the table
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable, commonErrorCallback);
    }

    function commonErrorCallback(transactionId, error) {
        kony.print("Worker Scope :  sql_consumer_func : commonErrorCallback: Error code:: " + error);
        kony.print("Worker Scope :  sql_consumer_func : commonErrorCallback: Error message:: " + error.message);
    }

    function commonVoidcallback() {
        kony.print("Worker Scope : sql_consumer_func : commonVoidcallback: The transaction was executed successfully.");
    }

    function sqlSelect(transactionID) {
        kony.print("Worker Scope : sql_consumer_func : transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect, commonErrorCallback);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func : transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelect() {
        kony.print("Worker Scope : sql_consumer_func : doTransactionsqlSelect");
        try {
            kony.db.transaction(baseObjectIdw2, sqlSelect, commonErrorCallback, commonVoidcallback);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func : doTransactionsqlSelect: error in  select transaction" + err);
        }
    }
};