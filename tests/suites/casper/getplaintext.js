/*eslint strict:0*/
/*
casper.test.begin('getPlainText() tests', 1, function(test) {
    casper.start('tests/site/plaintext.notype', function() {
        test.assertEquals(this.getPlainText(), 'This is a plain and very simple sentence.',
            'Casper.getPlainText() can retrieve plain text with no content type');
    }).run(function() {
        test.done();
    });
});
*/
casper.test.begin('getPlainText() tests', 1, function(test) {
    casper.start('tests/site/page2.html', function() {
        console.log(this.getPlainText());
        //console.log(this.getPageContent());
        //console.log(this.getHTML());
        test.assertEquals(this.getPlainText(), 'This is a plain and very simple sentence.',
            'Casper.getPlainText() can retrieve plain text with no content type');
    }).run(function() {
        test.done();
    });
});
