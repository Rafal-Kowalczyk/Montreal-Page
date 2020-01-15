# Montreal-Page

Page:
https://rafal-kowalczyk.github.io/Montreal-Page/


#Fix bug "npm run watch"


If "npm run watch" throws an error:
-- parallelshell throw new err_invalid_arg_type('options.cwd' 'string' options.cwd) --
 replace the contents of the file:
-- node_modules/parallelshell/index.js --
on
https://raw.githubusercontent.com/darkguy2008/parallelshell/master/index.js