function test_case_001() 
{
        frm1.lbl1.text +=("\nPS: Init \n");
		try {
        frm1.lbl1.text +=("\nPS: Init \n");
        frm1.lbl1.text +=("PS: In try block\n");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('httpReq_opnSend_01.js');
       
        worker.addEventListener("message", function(event) {frm1.lbl2.text +='\nPS:WS1:' + event.data;});

        frm1.lbl1.text +=("PS: Exit()\n");
    } catch (err) {
        frm1.lbl1.text +=("PS: In Catch block\n");
    }
    //frmHome.lbl2.text +='Status=' + event.data;
};