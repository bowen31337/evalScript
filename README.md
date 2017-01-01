#eval-script

it is written in ES6, tested with karma, mocha, chai with the similar functionality with [simple-load-script](https://github.com/tomek-f/simple-load-script)


## Installation

###npm
```bash
npm install --save-dev eval-script
```
###Yarn
```bash
yarn add --dev eval-script
```

## Usage(UMD)

### in ES6
```js

import evalScript from 'eval-script'

evalScript('http://code.jquery.com/jquery-2.2.3.js',{
      'id':'script-jquery',
      'async':true
    },
    callback
  )
  .then(() => console.log("success"))
  .catch(error => console.log(error))

  const callback = () => console.log("call me after script was loaded")
```

### in Browser
```js
<script src='https://dl.dropboxusercontent.com/u/144131307/index.min.js'> </script>
<script type="text/javascript">
evalScript('http://code.jquery.com/jquery-2.2.3.js',{
      'id':'script-jquery',
      'async':true
    },
    callback
  ).then(function(){console.log("success");})
  .catch(function(error){console.log(error);});
function callback(){
  console.log("call me after script was loaded");
}

</script>
```

###Common Js
```js
var evalScript = require('eval-script');
evalScript(url, options, callback)
```

## test

```bash
  npm t
```
