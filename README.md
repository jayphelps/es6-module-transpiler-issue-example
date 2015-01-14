# es6-module-transpiler-issue-example

When run, this will output the comment malformed. For some reason consuming one of the forward slashes in the comment.

```javascript
define("input", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function foo() {
      
    }

    __exports__.foo = foo;/comment
  });
```
