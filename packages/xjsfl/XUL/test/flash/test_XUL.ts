import XUL from "@xjsfl/XUL";

XUL
    .factory()
    .setTitle('Dialog with initilize event')
    .addTextbox('Text', 'text')
    // .addEvent('initialize', onInitialize)
    .show();